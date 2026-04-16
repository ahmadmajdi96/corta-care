import { Brain, Search, AlertTriangle, ClipboardList, ScanLine, Package, Zap, ArrowRight } from "lucide-react";

const layers = [
  {
    title: "AI Intelligence Layer",
    subtitle: "Machine Learning & Predictive Analytics",
    systems: [
      { name: "Predictive Engine", desc: "MTBF analysis, failure prediction, auto work orders", icon: Brain, color: "--maintenance-blue" },
      { name: "NLP Search", desc: "Natural language queries across all maintenance data", icon: Search, color: "--maintenance-purple" },
      { name: "Anomaly Detection", desc: "Real-time inspection and sensor anomaly flagging", icon: AlertTriangle, color: "--maintenance-amber" },
    ],
  },
  {
    title: "Operations Layer",
    subtitle: "Day-to-Day Maintenance Execution",
    systems: [
      { name: "Work Orders", desc: "Smart triage, auto-assignment, priority scoring", icon: ClipboardList, color: "--maintenance-green" },
      { name: "Inspections", desc: "Scheduled rounds with anomaly baseline tracking", icon: ScanLine, color: "--maintenance-cyan" },
      { name: "Spare Parts", desc: "Demand forecasting, stock optimization, lead times", icon: Package, color: "--maintenance-orange" },
      { name: "Energy", desc: "Consumption analytics and efficiency recommendations", icon: Zap, color: "--maintenance-yellow" },
    ],
  },
];

const SystemArchitecture = () => {
  return (
    <section id="architecture" className="py-16 sm:py-24 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">System Architecture</h2>
          <p className="section-subtitle mx-auto">
            A two-tier architecture combining AI intelligence with operational execution — 
            predictive analytics driving proactive maintenance across your production lines.
          </p>
        </div>

        <div className="space-y-8">
          {layers.map((layer, idx) => (
            <div key={layer.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-border" />
                <div className="px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm font-medium text-muted-foreground">
                  {layer.title}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <p className="text-center text-sm text-muted-foreground mb-6">{layer.subtitle}</p>

              <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${layer.systems.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
                {layer.systems.map((sys) => (
                  <div key={sys.name} className="data-card flex items-start gap-4 group">
                    <div
                      className="p-3 rounded-lg shrink-0"
                      style={{
                        background: `hsl(var(${sys.color}) / 0.1)`,
                        border: `1px solid hsl(var(${sys.color}) / 0.2)`,
                      }}
                    >
                      <sys.icon className="w-6 h-6" style={{ color: `hsl(var(${sys.color}))` }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{sys.name}</h3>
                      <p className="text-sm text-muted-foreground">{sys.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {idx === 0 && (
                <div className="flex justify-center my-6">
                  <div className="flex flex-col items-center gap-1 text-muted-foreground/40">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                    <span className="text-xs uppercase tracking-wider">Data Flow</span>
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
