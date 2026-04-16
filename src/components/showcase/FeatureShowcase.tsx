import {
  Brain, ClipboardList, Search as SearchIcon, AlertTriangle, Package,
  ScanLine, FileText, Zap, BarChart3, MessageSquare,
  TrendingUp, Clock, Shield, Target, Gauge, AlertCircle,
  Settings, Battery, PieChart, Type,
} from "lucide-react";

interface FeatureImpact {
  metric: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: React.ElementType;
  impact: FeatureImpact[];
  capabilities: string[];
}

const features: Feature[] = [
  {
    id: "predictive",
    title: "Predictive Maintenance",
    subtitle: "AI-POWERED PREDICTION",
    description: "Analyze machine sensor data, MTBF trends, and failure history to predict breakdowns before they happen. Automatically generates preventive work orders based on predicted failure windows.",
    color: "--maintenance-blue",
    icon: Brain,
    impact: [
      { metric: "85%", label: "Fewer Unplanned Stops", description: "Predict failures before they cause downtime", icon: TrendingUp },
      { metric: "40%", label: "Cost Reduction", description: "Shift from reactive to proactive maintenance", icon: Gauge },
      { metric: "3x", label: "Asset Lifespan", description: "Optimized maintenance intervals extend equipment life", icon: Settings },
      { metric: "24/7", label: "Continuous Monitoring", description: "Real-time sensor data analysis around the clock", icon: Clock },
    ],
    capabilities: ["Sensor Data Ingestion", "MTBF/MTTR Analytics", "Failure Prediction Models", "Auto Work Order Generation", "Maintenance Schedule Optimization", "Vibration Analysis", "Thermal Monitoring", "Oil Analysis Integration"],
  },
  {
    id: "triage",
    title: "Smart Work Order Triage",
    subtitle: "INTELLIGENT ASSIGNMENT",
    description: "Auto-assign priority, estimated hours, and the right technician based on historical patterns, skill matching, and current workload distribution.",
    color: "--maintenance-green",
    icon: ClipboardList,
    impact: [
      { metric: "60%", label: "Faster Assignment", description: "Eliminate manual triage bottlenecks", icon: Clock },
      { metric: "95%", label: "Skill Match Rate", description: "Right technician for the right job every time", icon: Target },
      { metric: "30%", label: "Productivity Gain", description: "Balanced workload across all technicians", icon: TrendingUp },
      { metric: "<2min", label: "Triage Time", description: "From report to assigned in seconds", icon: Gauge },
    ],
    capabilities: ["Priority Scoring Engine", "Technician Skill Matrix", "Workload Balancer", "SLA Tracking", "Estimated Duration", "Escalation Rules", "Shift-Aware Assignment", "Emergency Override"],
  },
  {
    id: "rca",
    title: "Failure Root Cause Analysis",
    subtitle: "INTELLIGENT DIAGNOSTICS",
    description: "When a failure code is logged, AI suggests probable root causes and corrective actions based on past incidents, equipment history, and industry knowledge bases.",
    color: "--maintenance-red",
    icon: AlertTriangle,
    impact: [
      { metric: "70%", label: "Faster Resolution", description: "AI-guided diagnosis cuts investigation time", icon: Clock },
      { metric: "45%", label: "Repeat Failure Reduction", description: "Address root causes, not just symptoms", icon: Shield },
      { metric: "200+", label: "Failure Patterns", description: "Growing knowledge base of failure signatures", icon: PieChart },
      { metric: "92%", label: "Accuracy Rate", description: "High-confidence root cause suggestions", icon: Target },
    ],
    capabilities: ["Failure Code Analysis", "Fishbone Diagram Generation", "5-Why Automation", "Corrective Action Suggestions", "Similar Incident Matching", "Equipment History Correlation", "Knowledge Base Learning", "FMEA Integration"],
  },
  {
    id: "chatbot",
    title: "AI Chatbot for Technicians",
    subtitle: "FIELD ASSISTANT",
    description: "Let engineers ask questions like 'What's the maintenance history for CNC-001?' or 'How do I replace the hydraulic pump?' and get instant answers from SOPs and documents.",
    color: "--maintenance-purple",
    icon: MessageSquare,
    impact: [
      { metric: "5x", label: "Faster Info Access", description: "Instant answers vs. manual document search", icon: Clock },
      { metric: "80%", label: "Self-Service Rate", description: "Technicians resolve queries without supervisor help", icon: Target },
      { metric: "1000+", label: "Documents Indexed", description: "SOPs, manuals, and procedures searchable via chat", icon: FileText },
      { metric: "24/7", label: "Always Available", description: "AI assistant available on every shift", icon: Gauge },
    ],
    capabilities: ["Natural Language Q&A", "SOP/Manual Search", "Maintenance History Lookup", "Step-by-Step Guidance", "Photo/Video References", "Multilingual Support", "Voice Input", "Offline Capable"],
  },
  {
    id: "spare-parts",
    title: "Spare Parts Demand Forecasting",
    subtitle: "INVENTORY INTELLIGENCE",
    description: "Predict stock needs based on maintenance schedules, failure trends, and supplier lead times to prevent stockouts and reduce carrying costs.",
    color: "--maintenance-orange",
    icon: Package,
    impact: [
      { metric: "90%", label: "Stockout Prevention", description: "Never miss a repair due to missing parts", icon: Shield },
      { metric: "25%", label: "Inventory Cost Reduction", description: "Optimize stock levels with demand forecasting", icon: TrendingUp },
      { metric: "15d", label: "Avg Lead Time Saved", description: "Proactive ordering before demand spikes", icon: Clock },
      { metric: "99%", label: "Parts Availability", description: "Critical spares always in stock", icon: Target },
    ],
    capabilities: ["Demand Prediction Models", "Reorder Point Optimization", "Lead Time Tracking", "Supplier Performance", "ABC Classification", "Min/Max Auto-Adjust", "Critical Spares Alerts", "Cost Trend Analysis"],
  },
  {
    id: "anomaly",
    title: "Inspection Anomaly Detection",
    subtitle: "PATTERN RECOGNITION",
    description: "Flag unusual inspection results or patterns that deviate from normal baselines. Detect subtle degradation trends before they become critical failures.",
    color: "--maintenance-cyan",
    icon: ScanLine,
    impact: [
      { metric: "3x", label: "Early Detection", description: "Catch anomalies weeks before failure", icon: AlertCircle },
      { metric: "95%", label: "Detection Accuracy", description: "Minimize false positives with adaptive baselines", icon: Target },
      { metric: "60%", label: "Inspection Efficiency", description: "Focus attention on actual deviations", icon: TrendingUp },
      { metric: "∞", label: "Continuous Learning", description: "Baselines adapt as equipment ages", icon: Brain },
    ],
    capabilities: ["Baseline Auto-Calibration", "Statistical Process Control", "Trend Deviation Alerts", "Multi-Sensor Correlation", "Visual Inspection AI", "Threshold Management", "Historical Comparison", "Severity Classification"],
  },
  {
    id: "handover",
    title: "Shift Handover Summarization",
    subtitle: "AUTOMATED REPORTS",
    description: "Auto-generate comprehensive shift summaries from work orders completed, incidents reported, open items, and safety observations — no more manual handover notes.",
    color: "--maintenance-teal",
    icon: FileText,
    impact: [
      { metric: "15min", label: "Time Saved per Shift", description: "Eliminate manual report writing", icon: Clock },
      { metric: "100%", label: "Coverage", description: "Nothing missed in shift transitions", icon: Shield },
      { metric: "0", label: "Information Gaps", description: "Complete context for incoming shift", icon: Target },
      { metric: "Auto", label: "Generated", description: "One-click summaries from live data", icon: Settings },
    ],
    capabilities: ["Auto Summary Generation", "Open Item Tracking", "Incident Highlights", "Safety Observations", "KPI Snapshots", "Photo Attachments", "Digital Sign-Off", "Historical Archive"],
  },
  {
    id: "energy",
    title: "Energy Optimization Suggestions",
    subtitle: "EFFICIENCY ANALYTICS",
    description: "Analyze energy consumption patterns across equipment and production schedules. Recommend efficiency improvements and detect energy waste from degrading equipment.",
    color: "--maintenance-yellow",
    icon: Zap,
    impact: [
      { metric: "20%", label: "Energy Savings", description: "Identify and eliminate consumption waste", icon: TrendingUp },
      { metric: "$50K+", label: "Annual Cost Reduction", description: "Typical savings for mid-size facility", icon: Gauge },
      { metric: "15%", label: "Carbon Reduction", description: "Sustainability through efficiency", icon: Battery },
      { metric: "Real-time", label: "Monitoring", description: "Continuous energy pattern analysis", icon: Clock },
    ],
    capabilities: ["Consumption Pattern Analysis", "Equipment Efficiency Scoring", "Peak Load Management", "Waste Detection", "Benchmark Comparisons", "Carbon Footprint Tracking", "Scheduling Optimization", "Utility Cost Analysis"],
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    subtitle: "DATA INTELLIGENCE",
    description: "Comprehensive reporting with AI-powered insights. Your AI assistant in Reports provides deeper data access, trend analysis, and actionable recommendations.",
    color: "--maintenance-indigo",
    icon: BarChart3,
    impact: [
      { metric: "50+", label: "Report Templates", description: "Pre-built reports for every maintenance KPI", icon: FileText },
      { metric: "AI", label: "Powered Insights", description: "Natural language report generation", icon: Brain },
      { metric: "360°", label: "Visibility", description: "Cross-functional maintenance analytics", icon: PieChart },
      { metric: "1-Click", label: "Export", description: "PDF, Excel, and automated email delivery", icon: Settings },
    ],
    capabilities: ["KPI Dashboards", "Trend Analysis", "Pareto Charts", "SPC Charts", "Cost Tracking", "Compliance Reports", "Custom Report Builder", "Scheduled Distribution"],
  },
  {
    id: "nlsearch",
    title: "Natural Language Search",
    subtitle: "UNIVERSAL SEARCH",
    description: "Let users search across machines, work orders, parts, and documents using plain language queries. 'Show me all overdue PMs for Building A' just works.",
    color: "--maintenance-amber",
    icon: SearchIcon,
    impact: [
      { metric: "10x", label: "Faster Search", description: "Natural language vs. filter-based queries", icon: Clock },
      { metric: "All", label: "Data Sources", description: "Machines, WOs, parts, docs — unified search", icon: Target },
      { metric: "95%", label: "Query Understanding", description: "Handles complex, multi-entity searches", icon: Brain },
      { metric: "0", label: "Training Required", description: "Intuitive for any user, any skill level", icon: Type },
    ],
    capabilities: ["Cross-Entity Search", "Fuzzy Matching", "Date Range Parsing", "Status Filtering", "Equipment Hierarchy", "Document Full-Text", "Search History", "Saved Queries"],
  },
];

const FeatureShowcase = () => {
  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">AI-Powered Features</h2>
          <p className="section-subtitle mx-auto">
            10 intelligent modules that transform maintenance from reactive firefighting 
            to proactive, data-driven asset management.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feat, idx) => (
            <div key={feat.id} id={feat.id} className="scroll-mt-8">
              {/* Feature Header */}
              <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center mb-12`}>
                {/* Icon display instead of screenshot */}
                <div className="lg:w-2/5">
                  <div className="module-card p-12 flex items-center justify-center">
                    <div
                      className="p-8 rounded-2xl"
                      style={{
                        background: `hsl(var(${feat.color}) / 0.1)`,
                        border: `1px solid hsl(var(${feat.color}) / 0.2)`,
                      }}
                    >
                      <feat.icon className="w-20 h-20" style={{ color: `hsl(var(${feat.color}))` }} />
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{
                      background: `hsl(var(${feat.color}) / 0.1)`,
                      color: `hsl(var(${feat.color}))`,
                      border: `1px solid hsl(var(${feat.color}) / 0.25)`,
                    }}
                  >
                    {feat.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{feat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{feat.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-mono font-semibold text-foreground">{feat.capabilities.length}</span> capabilities ·
                    <span className="font-mono font-semibold text-foreground">{feat.impact.length}</span> impact metrics
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {feat.impact.map((m) => (
                  <div key={m.label} className="data-card text-center group hover:border-primary/30 transition-all duration-300">
                    <div
                      className="inline-flex p-2 rounded-lg mb-3 mx-auto"
                      style={{ background: `hsl(var(${feat.color}) / 0.1)` }}
                    >
                      <m.icon className="w-5 h-5" style={{ color: `hsl(var(${feat.color}))` }} />
                    </div>
                    <div className="text-2xl font-bold font-mono mb-1" style={{ color: `hsl(var(${feat.color}))` }}>
                      {m.metric}
                    </div>
                    <div className="text-sm font-semibold text-foreground mb-2">{m.label}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>

              {/* Capabilities */}
              <div className="data-card">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Capabilities</h4>
                <div className="flex flex-wrap gap-2">
                  {feat.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1.5 rounded-md text-xs font-medium border border-border bg-secondary/30"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
