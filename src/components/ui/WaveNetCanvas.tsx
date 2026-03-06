import React, { useEffect, useRef } from 'react';

const WaveNetCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        // Canvas dimensions
        const setCanvasDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasDimensions();
        window.addEventListener('resize', setCanvasDimensions);

        // Wave parameters (adjust these to match the desired look)
        const perspective = 350; // Fake 3D depth
        const yOffset = canvas.height * 0.7; // Vertical position of the wave (shifted down for dramatic tilt)

        const rows = 35; // depth lines
        const cols = 70; // points per line

        const xSpacing = canvas.width / (cols - 1) * 2.5; // wider spacing to spread it out across screen
        const zSpacing = 45;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;

            time += 0.015; // Smooth relaxed speed

            for (let j = 0; j < rows; j++) {
                ctx.beginPath();
                let firstPoint = true;

                for (let i = 0; i < cols; i++) {

                    // Calculate 3D coordinates
                    const x3d = (i - cols / 2) * xSpacing;
                    const z3d = j * zSpacing + 50; // Offset Z to push it into the screen

                    // Math.sin combinations for a natural rolling wave 
                    // Emphasizing the vertical movement to break the "straight line" look
                    const wave1 = Math.sin(i * 0.15 + time) * 90;
                    const wave2 = Math.sin(j * 0.2 - time * 1.2) * 80;
                    const wave3 = Math.cos((i + j) * 0.08 + time * 0.8) * 110;

                    const y3d = wave1 + wave2 + wave3;

                    // Project 3D to 2D
                    const scale = perspective / (perspective + z3d);
                    const x2d = centerX + x3d * scale;
                    const y2d = yOffset + y3d * scale;

                    // Draw the lines
                    if (firstPoint) {
                        ctx.moveTo(x2d, y2d);
                        firstPoint = false;
                    } else {
                        ctx.lineTo(x2d, y2d);
                    }

                    // Draw glowing neon dots with varying colors
                    const dotSize = 2.5 * scale;
                    const alpha = Math.max(0, 1 - (z3d / (rows * zSpacing)));

                    // Dynamic multi-color based on position (neon pink/purple/cyan)
                    const hue = (i * 8 + j * 12 + time * 60) % 360;

                    if (i % 2 === 0 || j % 2 === 0) { // draw dots frequently
                        ctx.fillStyle = `hsla(${hue}, 100%, 75%, ${alpha})`; // brighter lightness
                        // Draw circle for dot
                        ctx.beginPath();
                        ctx.arc(x2d, y2d, dotSize, 0, Math.PI * 2);
                        ctx.fill();

                        // Glowing effect for closer particles
                        if (z3d < 500 && i % 3 === 0) {
                            ctx.save();
                            ctx.beginPath();
                            ctx.arc(x2d, y2d, dotSize * 5, 0, Math.PI * 2);
                            ctx.fillStyle = `hsla(${hue}, 100%, 65%, ${alpha * 0.4})`;
                            ctx.fill();
                            ctx.restore();
                        }
                    }
                }

                // Stroke the connecting horizontal line with a brighter glowing neon white/blue
                const lineAlpha = Math.max(0.05, 0.6 - (j / rows));
                ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasDimensions);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[5] w-full h-full opacity-70 mix-blend-screen"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default WaveNetCanvas;
