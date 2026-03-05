import { TerminalText } from "@/components/ui/TerminalText";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { StatusLED } from "@/components/ui/StatusLED";
import { NeuralNetwork } from "@/components/3d/NeuralNetwork";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <NeuralNetwork />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-neon-blue/30 w-fit">
            <StatusLED status="active" />
            <span className="text-xs font-mono text-neon-blue">SYSTEM STATUS: ACTIVE</span>
          </div>
          
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
              H.A. Dasun Charuka
            </h1>
            <h2 className="text-xl lg:text-2xl font-mono text-neon-purple">
              AI / ML / LLM Systems Engineer
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Autonomous Agents", "LLM Tooling", "AI Trading", "Pipelines"].map((badge) => (
              <span key={badge} className="px-3 py-1 rounded-md glass text-sm font-mono text-foreground-muted">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <GlowingButton variant="primary">Launch Projects</GlowingButton>
            <GlowingButton variant="secondary">Enter AI Lab</GlowingButton>
          </div>
        </div>

        <div className="z-10 lg:ml-auto w-full max-w-md">
          <div className="glass rounded-xl p-6 border-neon-blue/20 shadow-[0_0_30px_rgba(86,179,255,0.05)]">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-glass-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs font-mono text-foreground-muted">sys_init.sh</span>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <TerminalText text="> boot_sequence: OK" delay={500} className="text-green-400" />
              <TerminalText text="> role: AI Systems Engineer" delay={1500} className="text-foreground" />
              <TerminalText text="> building: autonomous agent control systems" delay={2500} className="text-foreground" />
              <TerminalText text="> stack: python · llm apis · react · infra" delay={3500} className="text-foreground" />
              <TerminalText text="> location: Sri Lanka" delay={4500} className="text-foreground" />
              <div className="mt-4 flex items-center">
                <span className="text-neon-blue font-mono mr-2">{"$"}</span>
                <span className="w-2 h-4 bg-neon-blue animate-pulse inline-block" style={{ animationDelay: '5s' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-20"></div>
    </section>
  );
};
