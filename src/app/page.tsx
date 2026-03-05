import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SystemProfile } from "@/components/sections/SystemProfile";
import { SkillsLab } from "@/components/sections/SkillsLab";
import { ProjectLab } from "@/components/sections/ProjectLab";
import { AgentControlRoom } from "@/components/sections/AgentControlRoom";
import { LabNotes } from "@/components/sections/LabNotes";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-neon-blue/30 selection:text-neon-blue">
      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-50"></div>
      
      <Navbar />
      <Hero />
      <SystemProfile />
      <ProjectLab />
      <AgentControlRoom />
      <SkillsLab />
      <LabNotes />
      <Contact />
      <Footer />
    </main>
  );
}
