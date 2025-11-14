import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section>
      <div className="container" style={{ display: 'grid', gap: '2.5rem' }}>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <span className="section-kicker">Apa kata mereka</span>
          <h2 className="section-heading">Kolaborasi yang berdampak nyata</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial-card">
              <p>“{testimonial.quote}”</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.title}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}