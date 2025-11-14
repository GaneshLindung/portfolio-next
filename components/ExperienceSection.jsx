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
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{experience.role}</h3>
                  <span>{experience.company}</span>
                </div>
                <p className="timeline-period">{experience.period}</p>
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