import { useState } from 'react'
import '../styles/FAQ.css'

const faqs = [
  {
    question: 'How does AI screening work?',
    answer:
      'RecruiterAI analyzes resumes, portfolios, and assessments to instantly rank candidates against the competencies you define. Recruiters review prioritized shortlists instead of raw submissions.',
  },
  {
    question: 'Does RecruiterAI integrate with ATS?',
    answer:
      'Yes. We connect with modern ATS platforms plus HRIS, calendar, and communication tools so data flows automatically in both directions.',
  },
  {
    question: 'What’s the pricing?',
    answer:
      'Pricing scales with team size and monthly applicant volume. Most teams see ROI by replacing manual tools and reducing agency spend.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Implementation averages 10 business days including workflow configuration, training, and integrations.',
  },
  {
    question: 'Is candidate data secure?',
    answer:
      'RecruiterAI encrypts data at rest and in transit, is SOC 2 Type II compliant, and provides granular access controls across hiring teams.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <p className="eyebrow">FAQ</p>
        <h2>Questions Teams Ask Before Switching</h2>
      </div>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <article key={faq.question} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button type="button" onClick={() => handleToggle(index)} aria-expanded={openIndex === index}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && <p>{faq.answer}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

export default FAQ
