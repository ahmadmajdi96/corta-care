import { Sparkles } from "lucide-react";
import cortaLogo from "@/assets/corta-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={cortaLogo} alt="CORTA-Maintenance Logo" className="h-10 w-auto" height={40} loading="lazy" />
          <span className="font-bold text-2xl tracking-tight">CORTA-Maintenance</span>
        </div>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          AI-Powered Predictive Maintenance for industrial production lines.
          From sensor data to work orders — every asset monitored, every failure prevented.
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground mb-10 flex-wrap">
          <span>Predictive AI</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Smart Triage</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Root Cause Analysis</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Energy Optimization</span>
        </div>

        <a
          href="https://cortanexai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm group hover:border-primary/40 hover:bg-primary/10 transition-all duration-500"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Powered by{" "}
            <span className="gradient-text font-semibold tracking-tight group-hover:opacity-90">CortaneX AI</span>
          </span>
        </a>

        <div className="mt-8 text-xs text-muted-foreground/50">
          © 2026 CORTA-Maintenance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
