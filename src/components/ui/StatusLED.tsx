import { cn } from "@/lib/utils";

export const StatusLED = ({ status = "active", className }: { status?: "active" | "wip" | "idle"; className?: string }) => {
  return (
    <span className={cn("relative flex h-2.5 w-2.5", className)}>
      <span
        className={cn(
          "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
          status === "active" ? "bg-neon-cyan" : status === "wip" ? "bg-yellow-400" : "bg-gray-400"
        )}
      ></span>
      <span
        className={cn(
          "relative inline-flex rounded-full h-2.5 w-2.5",
          status === "active" ? "bg-neon-cyan" : status === "wip" ? "bg-yellow-400" : "bg-gray-400"
        )}
      ></span>
    </span>
  );
};
