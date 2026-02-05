import '../styles/Metrics.css'


const metrics = [
  { value: '10x', label: 'Faster Screening' },
  { value: '70%', label: 'Faster Time-to-Hire' },
  { value: '25x', label: 'Interview Capacity' },
  { value: '95%', label: 'Application Completion' },
  { value: '89%', label: 'Better Applications' },
  { value: '80%', label: 'Lower Cost' },
  { value: '50%', label: 'Fewer Bad Hires' },
];

function Metrics() {
  return (
    <section className="metrics-section">
      <p className="eyebrow">Impact & Results</p>
      <h2 className="metrics-title">Turn hiring into a predictable growth lever</h2>
      <p className="metrics-subtext">
        RecruiterAI automates the slowest workflows so every candidate gets a fast, consistent experience.
      </p>
      <div className="metrics-grid">
        {metrics.map((m) => (
          <div className="metric-card" key={m.label}>
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Metrics;
