import '../styles/Testimonials.css'

const testimonials = [
  {
    quote:
      'RecruiterAI collapsed our screening time from days to hours. The team now focuses on relationship building instead of inbox triage.',
    name: 'Priya Kapoor',
    title: 'Head of Talent',
    company: 'Northwind Commerce',
  },
  {
    quote:
      'Interview scheduling used to be the bottleneck. Automated workflows keep every stakeholder looped-in without another spreadsheet.',
    name: 'Miguel Santos',
    title: 'VP People',
    company: 'Atlas Robotics',
  },
  {
    quote:
      'We re-engaged thousands of silver-medal candidates and filled 40% of roles with them. RecruiterAI paid for itself in the first quarter.',
    name: 'Elena Novak',
    title: 'Chief People Officer',
    company: 'Arclight Bio',
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <p className="eyebrow">Testimonials</p>
        <h2>Teams Trust RecruiterAI To Close Top Talent</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => {
          const initials = testimonial.name
            .split(' ')
            .map((part) => part[0])
            .join('')
          return (
            <article key={testimonial.name} className="testimonial-card">
              <div className="avatar" aria-hidden="true">
                {initials}
              </div>
              <p className="quote">“{testimonial.quote}”</p>
              <div className="author">
                <p className="name">{testimonial.name}</p>
                <p className="role">
                  {testimonial.title} · {testimonial.company}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
