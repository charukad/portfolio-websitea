import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Core AI & ML",
    color: "bg-neon-blue",
    skills: [
      { name: "Machine Learning", level: 90 },
      { name: "Deep Learning", level: 85 },
      { name: "LLM Systems", level: 95 },
      { name: "AI Agents", level: 95 },
      { name: "Data Engineering", level: 80 },
    ]
  },
  {
    title: "Technologies & Tools",
    color: "bg-neon-purple",
    skills: [
      { name: "Python", level: 98 },
      { name: "PyTorch / TensorFlow", level: 85 },
      { name: "LangChain", level: 90 },
      { name: "NodeJS / React", level: 85 },
      { name: "Docker / Linux", level: 80 },
    ]
  }
];

export const SkillsLab = () => {
  return (
    <section id="skills" className="py-24 relative">
      <AnimatedSection className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <Cpu className="text-neon-purple w-6 h-6" />
          <h2 className="font-heading text-3xl font-bold text-foreground">CAPABILITY_MATRIX</h2>
          <div className="flex-1 h-px bg-glass-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <GlassCard key={idx} className="flex flex-col gap-6">
              <h3 className="font-mono text-foreground tracking-wider border-b border-glass-border pb-2">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-mono">
                      <span className="text-foreground-muted">{skill.name}</span>
                      <span className="text-xs text-foreground/50">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${category.color} rounded-full opacity-80 shadow-[0_0_10px_currentColor]`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};
