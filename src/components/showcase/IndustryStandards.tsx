const standards = [
  { name: "ISA-95", desc: "Enterprise-Control Integration" },
  { name: "ISO 55000", desc: "Asset Management Standard" },
  { name: "ISO 14224", desc: "Equipment Reliability Data" },
  { name: "ISO 13374", desc: "Condition Monitoring" },
  { name: "MIMOSA", desc: "Open Standards for O&M" },
  { name: "CMMS", desc: "Computerized Maintenance Mgmt" },
  { name: "RCM", desc: "Reliability Centered Maintenance" },
  { name: "TPM", desc: "Total Productive Maintenance" },
  { name: "FMEA", desc: "Failure Mode & Effects Analysis" },
  { name: "OEE", desc: "Overall Equipment Effectiveness" },
];

const IndustryStandards = () => {
  return (
    <section id="standards" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Industry Standards Compliance</h2>
          <p className="section-subtitle mx-auto">
            Built to meet and exceed global asset management and maintenance standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {standards.map((std) => (
            <div key={std.name} className="data-card text-center">
              <div className="font-mono font-bold text-lg mb-1" style={{ color: "hsl(var(--maintenance-amber))" }}>{std.name}</div>
              <div className="text-xs text-muted-foreground">{std.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryStandards;
