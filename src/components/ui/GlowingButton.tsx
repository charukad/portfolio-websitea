import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const GlowingButton = ({ children, className, variant = "primary", ...props }: GlowingButtonProps) => {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 font-mono text-sm font-medium tracking-wide transition-all duration-300 rounded-lg overflow-hidden group",
        variant === "primary"
          ? "bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 border border-neon-blue/30 hover:border-neon-blue/60 shadow-[0_0_15px_rgba(86,179,255,0.15)] hover:shadow-[0_0_25px_rgba(86,179,255,0.3)]"
          : "bg-white/5 text-foreground hover:bg-white/10 border border-white/10 hover:border-white/20",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
