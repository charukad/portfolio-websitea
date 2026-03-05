import { GlassCard } from "@/components/ui/GlassCard";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RadioReceiver, Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <AnimatedSection className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-12">
          <RadioReceiver className="text-neon-cyan w-6 h-6 animate-pulse" />
          <h2 className="font-heading text-3xl font-bold text-foreground text-center">TRANSMIT_SIGNAL</h2>
        </div>

        <GlassCard className="p-8 md:p-12 border-neon-cyan/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
          
          <div className="text-center mb-10">
            <p className="text-foreground-muted font-mono text-sm">
              Open for opportunities, research collaborations, or system architecture discussions.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-neon-blue">IDENTIFIER [Name]</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-glass-border rounded-lg px-4 py-3 text-foreground font-mono focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-neon-blue">CONNECTION_URI [Email]</label>
                <input 
                  type="email" 
                  className="w-full bg-black/40 border border-glass-border rounded-lg px-4 py-3 text-foreground font-mono focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-mono text-xs text-neon-blue">PAYLOAD [Message]</label>
              <textarea 
                rows={5}
                className="w-full bg-black/40 border border-glass-border rounded-lg px-4 py-3 text-foreground font-mono focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="Enter transmission data..."
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <GlowingButton variant="primary" className="w-full md:w-auto px-12">
                INITIATE_TRANSMISSION
              </GlowingButton>
            </div>
          </form>

          <div className="mt-16 pt-8 border-t border-glass-border flex flex-col items-center gap-6">
            <span className="font-mono text-xs text-foreground-muted">OR CONNECT VIA SECURE CHANNELS</span>
            <div className="flex gap-6">
              <a href="#" className="p-3 rounded-full glass hover:border-neon-purple hover:text-neon-purple transition-all group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 rounded-full glass hover:border-neon-blue hover:text-neon-blue transition-all group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 rounded-full glass hover:border-neon-cyan hover:text-neon-cyan transition-all group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>
    </section>
  );
};
