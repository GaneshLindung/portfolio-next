import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section id="testimoni">
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Apa kata mereka</span>
          <h2 className="section-heading">Kolaborasi yang berdampak nyata</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial-card">
              <span className="testimonial-card__quote" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9.25 6.75C6.9 8.15 5.75 10.1 5.75 12.65V17.25H10.5V12.75H8.25C8.25 11.25 9.05 10.05 10.65 9.15L9.25 6.75ZM17.25 6.75C14.9 8.15 13.75 10.1 13.75 12.65V17.25H18.5V12.75H16.25C16.25 11.25 17.05 10.05 18.65 9.15L17.25 6.75Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <p>{testimonial.quote}</p>
              <footer className="testimonial-card__footer">
                <span className="testimonial-card__identity">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.title}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
