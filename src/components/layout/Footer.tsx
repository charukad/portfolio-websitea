export const Footer = () => {
  return (
    <footer className="py-8 border-t border-glass-border text-center bg-background/80 relative z-10">
      <p className="font-mono text-xs text-foreground-muted">
        © {new Date().getFullYear()} H.A. Dasun Charuka. All systems operational.
      </p>
    </footer>
  );
};
