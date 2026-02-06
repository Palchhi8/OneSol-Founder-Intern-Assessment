import '../styles/Flowcharts.css'

function Flowcharts() {
  return (
    <section className="flowcharts" id="how-it-works">
      <p className="eyebrow">How RecruiterAI Works</p>
      <h2>Give every recruiter an AI copilot across the hiring journey</h2>
      <p className="flowcharts-sub">
        Three synchronized flows automate the manual layers of screening, interviewing, and nurturing so
        teams stay focused on candidate relationships.
      </p>

      <div className="flowcharts-grid">
        {/* Flowchart 1 */}
        <div className="flowchart">
          <h3 className="flowchart-title">Automated Candidate Screening</h3>
          <div className="flow-nodes">
            <div className="node process">New Application</div>
            <div className="arrow">&#8595;</div>
            <div className="node process">AI Resume Screening (Top 20%)</div>
            <div className="arrow">&#8595;</div>
            <div className="node process">Send Screening Questions</div>
            <div className="arrow">&#8595;</div>
            <div className="node diamond">Qualification Score &gt; 75%?</div>
            <div className="branch">
              <div className="branch-path yes-path">
                <span className="branch-label yes">YES</span>
                <div className="arrow">&#8595;</div>
                <div className="node process">Auto-schedule Interview</div>
                <div className="arrow">&#8595;</div>
                <div className="node process">Send Reminder</div>
              </div>
              <div className="branch-path no-path">
                <span className="branch-label no">NO</span>
                <div className="arrow">&#8595;</div>
                <div className="node process">Thank You Email</div>
                <div className="arrow">&#8595;</div>
                <div className="node process">Add to Talent Pool</div>
              </div>
            </div>
          </div>
          <p className="flowchart-benefit">Screen 250+ applications in minutes vs. 8 hours manually</p>
        </div>

        {/* Flowchart 2 */}
        <div className="flowchart">
          <h3 className="flowchart-title">Multi-Stage Interview Automation</h3>
          <div className="flow-nodes">
            <div className="node process">Candidate Accepts Invite</div>
            <div className="arrow">&#8595;</div>
            <div className="node process">AI Video Interview</div>
            <div className="arrow">&#8595;</div>
            <div className="node process">AI Scoring</div>
            <div className="arrow">&#8595;</div>
            <div className="node diamond">Score &gt; 80%?</div>
            <div className="branch">
              <div className="branch-path yes-path">
                <span className="branch-label yes">YES</span>
                <div className="arrow">&#8595;</div>
                <div className="node process">Round 2 Panel</div>
                <div className="arrow">&#8595;</div>
                <div className="node process">Hiring Manager Review</div>
                <div className="arrow">&#8595;</div>
                <div className="node diamond small">Hire?</div>
                <div className="branch">
                  <div className="branch-path yes-path">
                    <span className="branch-label yes">YES</span>
                    <div className="arrow">&#8595;</div>
                    <div className="node process">Offer + Welcome</div>
                  </div>
                  <div className="branch-path no-path">
                    <span className="branch-label no">NO</span>
                    <div className="arrow">&#8595;</div>
                    <div className="node process">Personal Rejection</div>
                  </div>
                </div>
              </div>
              <div className="branch-path no-path">
                <span className="branch-label no">NO</span>
                <div className="arrow">&#8595;</div>
                <div className="node process">Auto Rejection</div>
              </div>
            </div>
          </div>
          <p className="flowchart-benefit">Reduce time-to-hire from 42 days to 12 days</p>
        </div>

        {/* Flowchart 3 */}
        <div className="flowchart">
          <h3 className="flowchart-title">Passive Candidate Re-engagement</h3>
          <div className="flow-nodes">
            <div className="node process">Rejected (60–74%)</div>
            <div className="arrow">&#8595;</div>
            <div className="node process">Add to Future Talent</div>
            <div className="arrow">&#8595;</div>
            <div className="node process">Wait 3 Months</div>
            <div className="arrow">&#8595;</div>
            <div className="node diamond">New role opens?</div>
            <div className="branch">
              <div className="branch-path yes-path">
                <span className="branch-label yes">YES</span>
                <div className="arrow">&#8595;</div>
                <div className="node process">Personalized Email</div>
                <div className="arrow">&#8595;</div>
                <div className="node diamond small">Interested in applying?</div>
                <div className="branch">
                  <div className="branch-path yes-path">
                    <span className="branch-label yes">YES</span>
                    <div className="arrow">&#8595;</div>
                    <div className="node process">Fast-Track Interview</div>
                  </div>
                  <div className="branch-path no-path">
                    <span className="branch-label no">NO</span>
                    <div className="arrow">&#8595;</div>
                    <div className="node process">Stay in Pool</div>
                  </div>
                </div>
              </div>
              <div className="branch-path no-path">
                <span className="branch-label no">NO</span>
                <div className="arrow">&#8595;</div>
                <div className="node process">Check Next Quarter</div>
              </div>
            </div>
          </div>
          <p className="flowchart-benefit">Build a qualified talent pipeline automatically</p>
        </div>
      </div>
    </section>
  )
}

export default Flowcharts
