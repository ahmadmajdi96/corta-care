import {
  TrendingUp, Clock, ShieldCheck, Eye, Layers, Wifi,
  BarChart3, Lock, Zap, Wrench,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Reduce Downtime by 85%",
    description: "Predictive maintenance and smart triage eliminate unplanned stops and minimize mean-time-to-repair across all production lines.",
  },
  {
    icon: Clock,
    title: "Cut Maintenance Costs 40%",
    description: "Shift from reactive to proactive maintenance. AI-optimized schedules and spare parts forecasting reduce waste and emergency spend.",
  },
  {
    icon: ShieldCheck,
    title: "Improve Safety & Compliance",
    description: "Automated inspection anomaly detection and shift handover summaries ensure nothing falls through the cracks between shifts.",
  },
  {
    icon: Eye,
    title: "Full Asset Visibility",
    description: "Real-time monitoring of every machine, sensor, and maintenance activity. Complete equipment history at your fingertips via AI chatbot.",
  },
  {
    icon: Layers,
    title: "Unified Maintenance Data",
    description: "Work orders, inspections, spare parts, and energy data share a common backbone. Root cause analysis leverages the full picture.",
  },
  {
    icon: Wifi,
    title: "Field-Ready Mobile Apps",
    description: "AI chatbot and natural language search work on tablets and phones — technicians get answers on the factory floor, not at a desk.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    description: "AI-powered reports, trend analysis, Pareto charts, and KPI dashboards transform raw maintenance data into operational decisions.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Maintenance managers, technicians, planners, and operators each see exactly what they need — secure and streamlined.",
  },
  {
    icon: Zap,
    title: "Energy Optimization",
    description: "Detect energy waste from degrading equipment, optimize consumption patterns, and track carbon footprint improvements.",
  },
  {
    icon: Wrench,
    title: "Continuous Improvement",
    description: "AI learns from every failure, every repair, and every inspection — getting smarter and more accurate over time.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 px-4 sm:px-6 relative scroll-mt-16">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Why <span className="gradient-text">CORTA-Maintenance</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Measurable impact on your maintenance KPIs from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg w-fit mb-4" style={{ background: "hsl(var(--maintenance-amber) / 0.1)", border: "1px solid hsl(var(--maintenance-amber) / 0.2)" }}>
                <benefit.icon className="w-5 h-5" style={{ color: "hsl(var(--maintenance-amber))" }} />
              </div>
              <h3 className="font-semibold mb-2 text-sm">{benefit.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
