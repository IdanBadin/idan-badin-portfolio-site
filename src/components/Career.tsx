import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Project Manager</h4>
                <h5>Hakurnas Lead Works</h5>
              </div>
              <h3>2020–2021</h3>
            </div>
            <p>
              Increased factory productivity 25% by independently developing a
              custom digital tracking system. Led full lifecycle from needs
              assessment through deployment and team onboarding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Support & Front-end Dev</h4>
                <h5>Weezmo (Nayax)</h5>
              </div>
              <h3>2022–2024</h3>
            </div>
            <p>
              Built client-facing web products using JavaScript, HTML, and CSS.
              Performed complex troubleshooting and log analysis for SaaS
              products in close collaboration with R&D teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Content Localization Lead</h4>
                <h5>Aleph Beta × EL AL</h5>
              </div>
              <h3>2025–Now</h3>
            </div>
            <p>
              Architected AI-driven content workflows using DeepL, GPT, and
              Maestra for large-scale video subtitle localization with high-level
              quality assurance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Amdocs</h5>
              </div>
              <h3>2025–Now</h3>
            </div>
            <p>
              Built SAP-integrated dashboards for supplier data analysis.
              Automated ETL workflows with SQL and Python, and applied ML
              techniques for service pattern detection.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Solutions Engineer</h4>
                <h5>Reichman University</h5>
              </div>
              <h3>2026–Now</h3>
            </div>
            <p>
              Developing LLM-powered AI Agents for the Registration Department
              using Microsoft Copilot Studio. Managing full project lifecycle
              from stakeholder analysis to university-wide deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
