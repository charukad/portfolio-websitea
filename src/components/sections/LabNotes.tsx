import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookOpen, ArrowRight } from "lucide-react";

const notes = [
  {
    date: "2024.10.15",
    title: "Building Autonomous Agents with LangChain",
    category: "Architecture",
    readTime: "5 min read"
  },
  {
    date: "2024.09.28",
    title: "RL in AI Trading: A Practical Approach",
    category: "Research",
    readTime: "8 min read"
  },
  {
    date: "2024.09.10",
    title: "LLM Orchestration Patterns",
    category: "System Design",
    readTime: "6 min read"
  }
];

export const LabNotes = () => {
  return (
    <section id="writing" className="py-24 relative bg-background/50">
      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <BookOpen className="text-neon-blue w-6 h-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground">LAB_NOTES</h2>
          <div className="flex-1 h-px bg-glass-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {notes.map((note, idx) => (
            <GlassCard key={idx} className="group hover:border-neon-blue/40 cursor-pointer transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-neon-blue px-2 py-1 rounded bg-neon-blue/10">
                  {note.category}
                </span>
                <span className="text-xs font-mono text-foreground-muted">
                  {note.date}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-6 text-foreground group-hover:text-neon-blue transition-colors flex-grow">
                {note.title}
              </h3>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-glass-border">
                <span className="text-xs text-foreground-muted font-mono">{note.readTime}</span>
                <ArrowRight className="w-4 h-4 text-foreground-muted group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-sm font-mono text-neon-blue hover:text-neon-cyan transition-colors border-b border-transparent hover:border-neon-cyan pb-1">
            VIEW_ALL_NOTES (12)
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
};
