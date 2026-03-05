import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Terminal } from "lucide-react";

export const SystemProfile = () => {
  return (
    <section id="profile" className="py-24 relative">
      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="text-neon-blue w-6 h-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground">SYSTEM PROFILE</h2>
          <div className="flex-1 h-px bg-glass-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard className="col-span-1 md:col-span-2 border-neon-blue/20">
            <h3 className="font-mono text-neon-purple mb-4 text-sm tracking-wider">IDENTITY_MATRIX</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 border-b border-glass-border pb-3">
                <span className="text-foreground-muted font-mono text-sm">Engineer</span>
                <span className="col-span-2 font-mono text-foreground">H.A. Dasun Charuka</span>
              </div>
              <div className="grid grid-cols-3 border-b border-glass-border pb-3">
                <span className="text-foreground-muted font-mono text-sm">Role</span>
                <span className="col-span-2 font-mono text-foreground">AI / ML / LLM Systems Engineer</span>
              </div>
              <div className="grid grid-cols-3 border-b border-glass-border pb-3">
                <span className="text-foreground-muted font-mono text-sm">Location</span>
                <span className="col-span-2 font-mono text-foreground">Sri Lanka</span>
              </div>
              <div className="grid grid-cols-3 pb-2">
                <span className="text-foreground-muted font-mono text-sm">Current Focus</span>
                <span className="col-span-2 font-mono text-foreground leading-relaxed">Building autonomous AI systems capable of reasoning, planning, and interacting with real environments.</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="font-mono text-neon-blue mb-4 text-sm tracking-wider">PHILOSOPHY</h3>
            <blockquote className="text-lg leading-relaxed text-foreground italic border-l-2 border-neon-blue pl-4 my-6">
              "AI should not just answer questions. It should take actions."
            </blockquote>
            <p className="text-sm text-foreground-muted">
              Focusing on safe tool use, robust architecture, and measurable real-world automation.
            </p>
          </GlassCard>

          <GlassCard className="col-span-1 md:col-span-3 mt-4">
            <h3 className="font-mono text-neon-cyan mb-6 text-sm tracking-wider">CORE_MODULES</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Autonomous Agents", desc: "Multi-agent orchestration & tool execution." },
                { title: "LLM Infrastructure", desc: "RAG, prompt engineering, & model deployment." },
                { title: "AI Trading Systems", desc: "Market pattern recognition & RL strategies." },
                { title: "Data Pipelines", desc: "Intelligent deduction & NLP analysis." }
              ].map((module, i) => (
                <div key={i} className="p-4 rounded-lg bg-background/50 border border-glass-border hover:border-neon-cyan/40 transition-colors">
                  <h4 className="font-bold text-foreground mb-2 text-sm">{module.title}</h4>
                  <p className="text-xs text-foreground-muted">{module.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>
    </section>
  );
};
