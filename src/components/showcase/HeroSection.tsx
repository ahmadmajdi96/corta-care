import heroFactory from "@/assets/hero-factory.jpg";
import cortaLogo from "@/assets/corta-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroFactory}
          alt="Industrial production line maintenance facility"
          className="w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="pulse-dot" style={{ background: "hsl(var(--maintenance-amber))" }} />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">AI-Powered Predictive Maintenance Platform</span>
        </div>

        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={cortaLogo}
            alt="CORTA-Maintenance Logo"
            className="h-16 sm:h-20 md:h-24 w-auto animate-fade-in"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
          <span className="gradient-text">CORTA</span>
          <br />
          <span className="text-foreground">Maintenance</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          AI-driven predictive maintenance for industrial production lines — from sensor analytics 
          to automated work orders, keeping your machines running at peak performance.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {[
            { value: "10", label: "AI Features" },
            { value: "24/7", label: "Real-time Monitoring" },
            { value: "85%", label: "Downtime Reduction" },
            { value: "ISO 55000", label: "Compliant" },
          ].map((stat) => (
            <div key={stat.label} className="data-card text-center backdrop-blur-sm bg-card/60 p-4 sm:p-6">
              <div className="metric-value text-xl sm:text-3xl" style={{ color: "hsl(var(--maintenance-amber))" }}>{stat.value}</div>
              <div className="metric-label mt-1 text-[10px] sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
