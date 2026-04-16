import {
  Home, Settings, Layers, ClipboardList, Calendar, FileCheck, Package,
  AlertOctagon, Shield, Construction, Gauge, ClipboardCheck, ArrowRightLeft,
  Activity, Zap, FileText, GraduationCap, Building2, ShieldCheck, Bell,
  Smartphone,
} from "lucide-react";

import dashboardImg from "@/assets/features/dashboard.jpg";
import machinesImg from "@/assets/features/machines.jpg";
import assetHierarchyImg from "@/assets/features/asset-hierarchy.jpg";
import workOrdersImg from "@/assets/features/work-orders.jpg";
import schedulesImg from "@/assets/features/schedules.jpg";
import inspectLogImg from "@/assets/features/inspect-log.jpg";
import safetyLotoImg from "@/assets/features/safety-loto.jpg";
import permitToWorkImg from "@/assets/features/permit-to-work.jpg";
import calibrationImg from "@/assets/features/calibration.jpg";
import auditManagementImg from "@/assets/features/audit-management.jpg";
import oeePerformanceImg from "@/assets/features/oee-performance.jpg";
import documentsImg from "@/assets/features/documents.jpg";
import trainingImg from "@/assets/features/training.jpg";
import vendorsImg from "@/assets/features/vendors.jpg";
import warrantyTrackingImg from "@/assets/features/warranty-tracking.jpg";
import notificationsImg from "@/assets/features/notifications.jpg";
import failureCodesImg from "@/assets/features/failure-codes.jpg";
import fieldAppImg from "@/assets/features/field-app.jpg";

interface CoreFeature {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  color: string;
  highlights: string[];
}

interface FeatureGroup {
  label: string;
  features: CoreFeature[];
}

const featureGroups: FeatureGroup[] = [
  {
    label: "Overview",
    features: [
      {
        title: "Dashboard",
        description: "Real-time overview of your entire maintenance operation — OEE scores, MTBF trends, active tasks, critical alerts, and recent activity in one unified command center.",
        icon: Home,
        image: dashboardImg,
        color: "--maintenance-blue",
        highlights: ["OEE & KPI Metrics", "Critical Alerts Feed", "Activity Timeline", "Maintenance Backlog"],
      },
    ],
  },
  {
    label: "Core Maintenance",
    features: [
      {
        title: "Machines & Stations",
        description: "Complete equipment registry with real-time status tracking. Monitor operational state, maintenance history, and performance data for every machine on your production floor.",
        icon: Settings,
        image: machinesImg,
        color: "--maintenance-blue",
        highlights: ["Equipment Registry", "Status Monitoring", "Location Tracking", "Maintenance History"],
      },
      {
        title: "Asset Hierarchy",
        description: "Organize assets in a structured tree — Plant → Area → Production Line → Machine → Component. Navigate your entire facility with full parent-child relationships.",
        icon: Layers,
        image: assetHierarchyImg,
        color: "--maintenance-cyan",
        highlights: ["Multi-Level Tree", "Component Tracking", "BOM Management", "Criticality Ranking"],
      },
      {
        title: "Work Orders",
        description: "Full work order lifecycle management from creation to completion. Track corrective, preventive, and predictive work orders with priority levels and technician assignment.",
        icon: ClipboardList,
        image: workOrdersImg,
        color: "--maintenance-green",
        highlights: ["Lifecycle Management", "Priority Scoring", "Cost Tracking", "Completion Logs"],
      },
      {
        title: "Maintenance Schedules",
        description: "Plan and manage preventive maintenance with calendar views, Gantt charts, and automated scheduling based on time, meter readings, or condition triggers.",
        icon: Calendar,
        image: schedulesImg,
        color: "--maintenance-purple",
        highlights: ["PM Calendar", "Gantt Planning", "Trigger-Based Scheduling", "Resource Allocation"],
      },
      {
        title: "Inspect & Log",
        description: "Conduct scheduled inspection rounds with digital checklists. Log readings, flag anomalies, and attach photos — all from a tablet or mobile device on the floor.",
        icon: FileCheck,
        image: inspectLogImg,
        color: "--maintenance-teal",
        highlights: ["Digital Checklists", "Reading Logs", "Photo Attachments", "Route Planning"],
      },
      {
        title: "Spare Parts Inventory",
        description: "Manage your spare parts warehouse with stock levels, reorder points, min/max thresholds, and full transaction history tied to work orders.",
        icon: Package,
        image: "@/assets/features/spare-parts.jpg",
        color: "--maintenance-orange",
        highlights: ["Stock Management", "Reorder Alerts", "Transaction History", "BOM Linking"],
      },
      {
        title: "Failure Codes & RCA",
        description: "Standardized failure code taxonomy for consistent failure reporting. Classify by problem, cause, and remedy to build a knowledge base for root cause analysis.",
        icon: AlertOctagon,
        image: failureCodesImg,
        color: "--maintenance-red",
        highlights: ["Failure Taxonomy", "Problem-Cause-Remedy", "Trend Analysis", "Knowledge Base"],
      },
    ],
  },
  {
    label: "Safety & Compliance",
    features: [
      {
        title: "Safety & LOTO",
        description: "Digital lockout/tagout procedures ensuring worker safety during maintenance. Track energy isolation points, authorized personnel, and verification steps.",
        icon: Shield,
        image: safetyLotoImg,
        color: "--maintenance-red",
        highlights: ["LOTO Procedures", "Energy Isolation", "Safety Permits", "Incident Tracking"],
      },
      {
        title: "Permit to Work",
        description: "Manage work permits for hazardous tasks — hot work, confined space entry, electrical work. Digital approval workflows with multi-level authorization.",
        icon: Construction,
        image: permitToWorkImg,
        color: "--maintenance-yellow",
        highlights: ["Permit Workflows", "Risk Assessment", "Multi-Level Approval", "Expiry Tracking"],
      },
      {
        title: "Calibration",
        description: "Track instrument and sensor calibration schedules. Maintain certificates, tolerance ranges, and compliance records for regulatory audits.",
        icon: Gauge,
        image: calibrationImg,
        color: "--maintenance-amber",
        highlights: ["Calibration Schedules", "Certificate Management", "Tolerance Tracking", "Compliance Records"],
      },
      {
        title: "Audit Management",
        description: "Plan, execute, and track compliance audits. Manage findings, corrective actions, and follow-ups with full audit trail documentation.",
        icon: ClipboardCheck,
        image: auditManagementImg,
        color: "--maintenance-indigo",
        highlights: ["Audit Planning", "Finding Tracker", "Corrective Actions", "Compliance Reports"],
      },
    ],
  },
  {
    label: "Operations",
    features: [
      {
        title: "OEE Performance",
        description: "Track Overall Equipment Effectiveness across your production lines. Break down availability, performance, and quality metrics with drill-down analysis.",
        icon: Activity,
        image: oeePerformanceImg,
        color: "--maintenance-green",
        highlights: ["Availability Tracking", "Performance Rate", "Quality Metrics", "Loss Analysis"],
      },
      {
        title: "Field App",
        description: "Mobile-first interface for technicians on the floor. View assignments, scan equipment barcodes, log work, and access documentation — online or offline.",
        icon: Smartphone,
        image: fieldAppImg,
        color: "--maintenance-blue",
        highlights: ["Barcode Scanning", "Offline Mode", "GPS Location", "Photo Capture"],
      },
    ],
  },
  {
    label: "Resources",
    features: [
      {
        title: "Documents & SOPs",
        description: "Centralized document management for SOPs, technical manuals, drawings, and procedures. Version control and quick access linked to specific equipment.",
        icon: FileText,
        image: documentsImg,
        color: "--maintenance-purple",
        highlights: ["Version Control", "Equipment Linking", "Full-Text Search", "Access Control"],
      },
      {
        title: "Training & Certifications",
        description: "Track technician training records, skill matrices, and certification expirations. Ensure the right qualifications for every maintenance task.",
        icon: GraduationCap,
        image: trainingImg,
        color: "--maintenance-teal",
        highlights: ["Skill Matrix", "Certification Tracking", "Training Records", "Expiry Alerts"],
      },
      {
        title: "Vendors & Suppliers",
        description: "Manage your vendor relationships, service contracts, and supplier performance. Track response times, pricing, and service quality ratings.",
        icon: Building2,
        image: vendorsImg,
        color: "--maintenance-cyan",
        highlights: ["Vendor Scorecards", "Contract Management", "Performance Tracking", "Contact Directory"],
      },
      {
        title: "Warranty Tracking",
        description: "Monitor equipment warranty coverage, expiration dates, and claim history. Never miss a warranty claim or pay for covered repairs out of pocket.",
        icon: ShieldCheck,
        image: warrantyTrackingImg,
        color: "--maintenance-green",
        highlights: ["Coverage Tracking", "Expiry Alerts", "Claim Management", "Cost Savings"],
      },
    ],
  },
  {
    label: "System",
    features: [
      {
        title: "Notifications & Alerts",
        description: "Real-time push notifications for critical alerts, task assignments, SLA breaches, and maintenance reminders. Configurable channels — email, SMS, and in-app.",
        icon: Bell,
        image: notificationsImg,
        color: "--maintenance-amber",
        highlights: ["Push Notifications", "SLA Alerts", "Email & SMS", "Custom Rules"],
      },
    ],
  },
];

const CoreFeatures = () => {
  return (
    <section id="platform" className="py-16 sm:py-24 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">Complete Platform Modules</h2>
          <p className="section-subtitle mx-auto">
            Beyond AI — a full-featured CMMS covering every aspect of industrial maintenance 
            from work orders and asset management to safety compliance and vendor tracking.
          </p>
        </div>

        <div className="space-y-20">
          {featureGroups.map((group) => (
            <div key={group.label}>
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px flex-1 bg-border" />
                <div className="px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm font-medium text-muted-foreground">
                  {group.label}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="data-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative -mx-5 -mt-5 mb-5 overflow-hidden">
                      <img
                        src={feat.image}
                        alt={feat.title}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div
                        className="absolute bottom-3 left-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                          background: `hsl(var(${feat.color}) / 0.15)`,
                          color: `hsl(var(${feat.color}))`,
                          border: `1px solid hsl(var(${feat.color}) / 0.3)`,
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <feat.icon className="w-3 h-3" />
                        {feat.title}
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {feat.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1.5">
                      {feat.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2 py-1 rounded text-[10px] font-medium border border-border bg-secondary/30"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
