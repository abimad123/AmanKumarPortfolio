import React, { useEffect, useRef } from 'react';

const DroneSwarmCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasDimensions();

        // Track mouse globally
        const handleMouseMove = (e: MouseEvent) => {
            // Offset by scroll position to ensure accuracy if scrolled?
            // Hero section is vh, so usually we just need clientX/Y.
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        window.addEventListener('resize', setCanvasDimensions);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        class Drone {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            glowIntensity: number;
            glowDirection: number;
            angle: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 1.2;
                this.vy = (Math.random() - 0.5) * 1.2;
                this.size = Math.random() * 2 + 2;
                this.color = Math.random() > 0.5 ? 'rgba(0, 255, 255, 0.8)' : 'rgba(56, 189, 248, 0.8)';
                this.glowIntensity = Math.random() * 0.5 + 0.3;
                this.glowDirection = Math.random() > 0.5 ? 0.03 : -0.03;
                this.angle = Math.atan2(this.vy, this.vx);
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce gently off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Smooth rotation towards velocity vector
                const targetAngle = Math.atan2(this.vy, this.vx);

                // Calculate shortest rotation path
                let delta = targetAngle - this.angle;
                if (delta > Math.PI) delta -= Math.PI * 2;
                if (delta < -Math.PI) delta += Math.PI * 2;

                this.angle += delta * 0.1;

                // Pulsing glow effect
                this.glowIntensity += this.glowDirection;
                if (this.glowIntensity > 1 || this.glowIntensity < 0.2) {
                    this.glowDirection *= -1;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                // Drone body (quadcopter top-down view)
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 15 * this.glowIntensity;
                ctx.shadowColor = this.color;

                // Central hub
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Arms
                ctx.lineWidth = 1;
                ctx.strokeStyle = this.color;

                const armLength = this.size * 2.5;
                ctx.beginPath();
                ctx.moveTo(-armLength, -armLength);
                ctx.lineTo(armLength, armLength);
                ctx.moveTo(-armLength, armLength);
                ctx.lineTo(armLength, -armLength);
                ctx.stroke();

                // Rotors (pulsing/spinning effect opacity)
                const rotorSize = this.size * 1.2;
                ctx.beginPath();
                ctx.arc(-armLength, -armLength, rotorSize, 0, Math.PI * 2);
                ctx.arc(armLength, armLength, rotorSize, 0, Math.PI * 2);
                ctx.arc(-armLength, armLength, rotorSize, 0, Math.PI * 2);
                ctx.arc(armLength, -armLength, rotorSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.glowIntensity * 0.6})`;
                ctx.fill();

                ctx.restore();
            }
        }

        const drones: Drone[] = [];
        const droneCount = Math.max(15, Math.floor((window.innerWidth * window.innerHeight) / 25000));
        for (let i = 0; i < droneCount; i++) {
            drones.push(new Drone(Math.random() * canvas.width, Math.random() * canvas.height));
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < drones.length; i++) {
                drones[i].update();
                drones[i].draw();

                // Connect drones to form a "mesh network" representing embedded systems/robotics communications
                for (let j = i + 1; j < drones.length; j++) {
                    const dx = drones[i].x - drones[j].x;
                    const dy = drones[i].y - drones[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const maxDist = 200;
                    if (distance < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(drones[i].x, drones[i].y);
                        ctx.lineTo(drones[j].x, drones[j].y);
                        // Opacity falls off with distance
                        const opacity = Math.max(0, 1 - distance / maxDist);
                        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                // Connect drone to mouse like a scanner or interactive swarm attraction
                const dxMouse = drones[i].x - mouseX;
                const dyMouse = drones[i].y - mouseY;
                const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distanceMouse < 250) {
                    ctx.beginPath();
                    ctx.moveTo(drones[i].x, drones[i].y);
                    ctx.lineTo(mouseX, mouseY);
                    const opacity = Math.max(0, 1 - distanceMouse / 250);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.3})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    // Drones gently orbit/attract to user cursor
                    drones[i].vx -= (dxMouse / distanceMouse) * 0.02;
                    drones[i].vy -= (dyMouse / distanceMouse) * 0.02;

                    // Speed limit
                    const speed = Math.sqrt(drones[i].vx * drones[i].vx + drones[i].vy * drones[i].vy);
                    if (speed > 2.5) {
                        drones[i].vx = (drones[i].vx / speed) * 2.5;
                        drones[i].vy = (drones[i].vy / speed) * 2.5;
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasDimensions);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[5] w-full h-full opacity-60 mix-blend-screen"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default DroneSwarmCanvas;
