import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const GlassCard = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("glass rounded-xl p-6", className)}>
      {children}
    </div>
  );
};
