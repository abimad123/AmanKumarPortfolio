import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin, Sparkles } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactInfoCard = ({ icon: Icon, title, value, href, delay }: { icon: any, title: string, value: string, href: string, delay: number }) => (
  <a
    href={href}
    target={href.startsWith('http') ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30 transition-all duration-500 block w-full hover:-translate-y-1"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative bg-background/80 backdrop-blur-xl p-5 rounded-[15px] border border-white/5 flex items-center gap-5 transition-all duration-500">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-mono tracking-wider mb-1">{title}</p>
        <p className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  </a>
);

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({ title: "Message sent successfully!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              CONNECT
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              Get In <span className="neon-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
            <p className="mt-8 text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
              I'm always open to discussing new projects, robotics challenges, or opportunities in UAV systems and defense engineering. Let's build something extraordinary together.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-start">

            {/* Left Side: Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ContactInfoCard
                icon={Mail}
                title="EMAIL"
                value="aman2004hyd@gmail.com"
                href="mailto:aman2004hyd@gmail.com"
                delay={0}
              />
              <ContactInfoCard
                icon={Phone}
                title="MOBILE"
                value="+91 8500113310"
                href="tel:+918500113310"
                delay={100}
              />
              <ContactInfoCard
                icon={Linkedin}
                title="LINKEDIN"
                value="aman-kumar-dhar"
                href="https://www.linkedin.com/in/aman-kumar-dhar"
                delay={200}
              />
              <ContactInfoCard
                icon={MapPin}
                title="LOCATION"
                value="Phagwara, Punjab"
                href="#"
                delay={300}
              />
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-3">
              <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent">
                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-3xl -z-10" />

                <form onSubmit={handleSubmit} className="relative bg-background/80 backdrop-blur-xl p-8 md:p-10 rounded-[23px] border border-white/5 space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-mono text-muted-foreground group-focus-within:text-primary transition-colors ml-1">YOUR NAME</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all ${errors.name ? 'border-destructive/50 focus:border-destructive' : ''}`}
                          placeholder="John Doe"
                        />
                        <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-focus-within:opacity-100 blur-md transition-opacity -z-10" />
                      </div>
                      {errors.name && <p className="text-destructive text-xs mt-1 absolute">{errors.name}</p>}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-mono text-muted-foreground group-focus-within:text-primary transition-colors ml-1">YOUR EMAIL</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all ${errors.email ? 'border-destructive/50 focus:border-destructive' : ''}`}
                          placeholder="john@example.com"
                        />
                        <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-focus-within:opacity-100 blur-md transition-opacity -z-10" />
                      </div>
                      {errors.email && <p className="text-destructive text-xs mt-1 absolute">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 group pt-2">
                    <label className="text-xs font-mono text-muted-foreground group-focus-within:text-primary transition-colors ml-1">YOUR MESSAGE</label>
                    <div className="relative">
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none ${errors.message ? 'border-destructive/50 focus:border-destructive' : ''}`}
                        placeholder="I'd like to talk about..."
                      />
                      <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-focus-within:opacity-100 blur-md transition-opacity -z-10" />
                    </div>
                    {errors.message && <p className="text-destructive text-xs mt-1 absolute">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group/btn overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 transition-all duration-500 rounded-xl group-hover/btn:scale-105" />
                      <div className="relative px-6 py-4 flex items-center justify-center gap-3 text-primary-foreground font-semibold tracking-wide">
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={18} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                            SEND MESSAGE
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
