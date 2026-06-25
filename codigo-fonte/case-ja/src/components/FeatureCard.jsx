function FeatureCard({ title, highlight, text }) {
  return (
    <section className="feature-card">
      <p className="section-label">{title}</p>
      <h2>{highlight}</h2>
      <p>{text}</p>
    </section>
  );
}

export default FeatureCard;
