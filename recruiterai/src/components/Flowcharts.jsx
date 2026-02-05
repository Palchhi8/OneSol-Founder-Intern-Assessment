import '../styles/Flowcharts.css'

const flows = [
  {
    title: 'Automated Screening',
    subtitle: 'Scoring, matching, prioritizing',
    steps: ['Capture every applicant', 'AI fit score instantly', 'Surface focus-ready shortlists'],
  },
  {
    title: 'Multi-stage Interviews',
    subtitle: 'Scheduling and collaboration',
    steps: ['Coordinate interview loops', 'Collect structured feedback', 'Keep stakeholders aligned'],
  },
  {
    title: 'Candidate Re-engagement',
    subtitle: 'Always-on nurturing',
    steps: ['Revive silver medalists', 'Send branded updates', 'Automate follow-ups globally'],
  },
]

function Flowcharts() {
  return (
    <section className="flowcharts" id="how-it-works">
      <p className="eyebrow">How RecruiterAI Works</p>
      <h2>Give every recruiter an AI copilot across the hiring journey</h2>
      <p className="flowcharts-sub">
        Three synchronized flows automate the manual layers of screening, interviewing, and nurturing so
        teams stay focused on candidate relationships.
      </p>
      <div className="flowcharts-cards">
        {flows.map((flow) => (
          <article className="flowchart-card" key={flow.title}>
            <header>
              <h3>{flow.title}</h3>
              <p>{flow.subtitle}</p>
            </header>
            <ul>
              {flow.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Flowcharts
