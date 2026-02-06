import '../styles/Metrics.css'


const metrics = [
  { 
    value: '10x', 
    label: 'Faster Screening',
    desc: 'AI parses and ranks 250+ applications per day vs 25 manually'
  },
  { 
    value: '70%', 
    label: 'Faster Time-to-Hire',
    desc: 'Average hiring timeline drops from 42 days to just 12 days'
  },
  { 
    value: '25x', 
    label: 'More Interview Capacity',
    desc: 'AI conducts 200+ automated screening interviews daily vs 8 manual calls'
  },
  { 
    value: '95%', 
    label: 'Application Completion',
    desc: 'Smart application forms reduce candidate drop-off dramatically'
  },
  { 
    value: '89%', 
    label: 'More Qualified Applications',
    desc: 'AI job description optimizer attracts higher-quality candidate pipelines'
  },
  { 
    value: '80%', 
    label: 'Lower Recruitment Costs',
    desc: 'vs traditional recruiting agencies and multiple-software subscriptions'
  },
  { 
    value: '50%', 
    label: 'Reduction in Bad Hires',
    desc: 'AI skills assessment and matching improves hiring accuracy dramatically'
  },
];

function Metrics() {
  return (
    <section className="metrics-section" id="metrics">
      <p className="eyebrow">Impact & Results</p>
      <h2 className="metrics-title">Turn hiring into a predictable growth lever</h2>
      <p className="metrics-subtext">
        RecruiterAI automates the slowest workflows so every candidate gets a fast, consistent experience.
      </p>
      <div className="metrics-grid">
        {metrics.map((m, i) => (
          <div className="metric-card" key={m.label}>
            <span className="metric-bar" />
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
            <p className="metric-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Metrics;
