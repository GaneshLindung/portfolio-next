import { experiences } from '../data/content';

export default function ExperienceSection() {
  return (
    <section id="pengalaman">
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Pengalaman</span>
          <h2 className="section-heading">Perjalanan karier dan kontribusi utama</h2>
          <p className="section-paragraph">
            Bekerja bersama tim multidisiplin untuk memecahkan masalah kompleks dan menghadirkan pengalaman digital yang
            menyenangkan.
          </p>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <div key={experience.company} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <span className="timeline-role-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M8 7V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1M5 7h14v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    </span>
                    <h3>{experience.role}</h3>
                  </div>
                  <span>{experience.company}</span>
                </div>
                <p className="timeline-period">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7 3v3M17 3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {experience.period}
                </p>
                <ul>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
