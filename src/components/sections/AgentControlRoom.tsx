"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Activity, Code, Globe, TerminalSquare, BrainCircuit } from "lucide-react";

const agents = [
  { id: "orchestrator", name: "Orchestrator", icon: BrainCircuit, color: "text-neon-purple", border: "border-neon-purple" },
  { id: "research", name: "Web Research", icon: Globe, color: "text-neon-cyan", border: "border-neon-cyan" },
  { id: "code", name: "Code Agent", icon: Code, color: "text-neon-blue", border: "border-neon-blue" },
  { id: "tool", name: "Tool Execution", icon: TerminalSquare, color: "text-green-400", border: "border-green-400" }
];

export const AgentControlRoom = () => {
  const [activeAgent, setActiveAgent] = useState(0);
  const [agentStatuses, setAgentStatuses] = useState(agents.map(() => "idle"));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % agents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAgentStatuses((prev) => 
      prev.map((_, idx) => {
        if (idx === activeAgent) return "executing...";
        if (idx === (activeAgent - 1 + agents.length) % agents.length) return "evaluating...";
        return "idle";
      })
    );
  }, [activeAgent]);

  return (
    <section id="lab" className="py-24 relative overflow-hidden">
      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Activity className="text-neon-purple w-6 h-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground">AGENT_CONTROL_ROOM</h2>
          <div className="flex-1 h-px bg-glass-border ml-4"></div>
        </div>

        <GlassCard className="p-8 border-neon-purple/20 bg-background/80 relative">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(167,139,250,0.2)_50%,transparent_100%)] bg-[length:200%_100%] animate-pulse"></div>

          <div className="text-center mb-10">
            <p className="font-mono text-sm text-foreground-muted mb-2">Simulated Multi-Agent Collaboration</p>
            <h3 className="text-xl font-bold text-foreground">Task: Implement Trading Strategy</h3>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {agents.map((agent, idx) => {
              const Icon = agent.icon;
              const isActive = activeAgent === idx;
              const status = agentStatuses[idx];

              return (
                <div key={agent.id} className="flex flex-col items-center relative w-full md:flex-1">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 relative bg-background border ${isActive ? `shadow-[0_0_20px_currentColor] scale-110 ${agent.border} ${agent.color}` : 'border-glass-border text-foreground-muted'}`}>
                    <Icon className="w-8 h-8" />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-current"></span>
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-sm text-foreground">{agent.name}</h4>
                    <p className={`font-mono text-xs mt-1 transition-colors duration-300 ${isActive ? agent.color : 'text-foreground-muted'}`}>
                      [{status}]
                    </p>
                  </div>

                  {idx < agents.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-glass-border">
                      <div className={`h-full transition-all duration-500 ${isActive ? agent.color + ' bg-current w-full' : 'w-0'}`}></div>
                    </div>
                  )}
                  {idx < agents.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-glass-border my-2">
                      <div className={`w-full transition-all duration-500 ${isActive ? agent.color + ' bg-current h-full' : 'h-0'}`}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-4 bg-black/50 rounded-lg border border-glass-border font-mono text-xs text-foreground-muted max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2 text-neon-purple">
              <TerminalSquare className="w-4 h-4" /> System Log
            </div>
            <p className="animate-pulse">{`> [${agents[activeAgent].name}] processing subroutine...`}</p>
          </div>
        </GlassCard>
      </AnimatedSection>
    </section>
  );
};
