import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatusLED } from "@/components/ui/StatusLED";
import { Database, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Autonomous AI Agent OS",
    description: "AI operating system capable of controlling computer tasks using LLM agents.",
    status: "active" as const,
    capabilities: ["Multi-agent orchestration", "Tool execution", "Terminal control"],
    tech: ["Python", "LLM APIs", "Agents", "NodeJS"]
  },
  {
    title: "AI Trading Intelligence System",
    description: "Machine learning system for analyzing crypto and forex markets.",
    status: "active" as const,
    capabilities: ["Market pattern recognition", "RL strategy", "Risk management AI"],
    tech: ["PyTorch", "Python", "Data Engineering"]
  },
  {
    title: "News Intelligence Engine",
    description: "AI pipeline for scraping, deduplicating and distributing Sri Lankan news.",
    status: "active" as const,
    capabilities: ["Intelligent duplicate detection", "NLP analysis", "Auto-distribution"],
    tech: ["Python", "NLP", "Scraping", "Cloudflare"]
  },
  {
    title: "AI Agent Control Center",
    description: "A system where agents collaborate like employees in a virtual office.",
    status: "wip" as const,
    capabilities: ["Multi-agent collaboration", "Visual UI", "Autonomous routing"],
    tech: ["React", "Next.js", "LangChain", "WebSockets"]
  }
];

export const ProjectLab = () => {
  return (
    <section id="projects" className="py-24 relative bg-background/50">
      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Database className="text-neon-cyan w-6 h-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground">AI_PROJECT_LAB</h2>
          <div className="flex-1 h-px bg-glass-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <GlassCard key={idx} className="group hover:border-neon-cyan/30 transition-all duration-300 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <StatusLED status={project.status} />
              </div>
              
              <p className="text-sm text-foreground-muted mb-6 flex-grow">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-neon-purple mb-2 block">Capabilities:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.capabilities.map((cap, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-foreground-muted">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-xs font-mono text-neon-blue mb-2 block">Tech Stack:</span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs text-foreground/70">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}{i < project.tech.length - 1 ? ' · ' : ''}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-glass-border">
                <button className="text-sm font-mono hover:text-neon-blue transition-colors flex items-center gap-2 text-foreground-muted">
                  <ExternalLink className="w-4 h-4" /> Demo
                </button>
                <button className="text-sm font-mono hover:text-foreground transition-colors flex items-center gap-2 text-foreground-muted">
                  <Github className="w-4 h-4" /> Code
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};
