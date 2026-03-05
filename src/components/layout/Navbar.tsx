import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-t-0 border-x-0 !bg-background/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight flex items-center gap-2">
            <span className="text-neon-blue">{"//"}</span> DASUN.AI
          </Link>
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-xs font-mono text-neon-blue">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            SYSTEM ACTIVE
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-foreground-muted">
          <Link href="#projects" className="hover:text-neon-blue transition-colors">Projects</Link>
          <Link href="#lab" className="hover:text-neon-blue transition-colors">Lab</Link>
          <Link href="#skills" className="hover:text-neon-blue transition-colors">Skills</Link>
          <Link href="#contact" className="px-4 py-2 rounded border border-glass-border hover:border-neon-blue/50 hover:text-neon-blue transition-colors">
            Transmit Signal
          </Link>
        </div>
      </div>
    </nav>
  );
};
