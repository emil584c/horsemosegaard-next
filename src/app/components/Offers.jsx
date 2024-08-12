export default function Offers({
  offers = [],
  text,
  title,
  backgroundSecondary,
}) {
  return (
    <section
      className={`offers ${backgroundSecondary ? "background-secondary" : ""}`}
      id="tilbyder"
    >
      <div className="offers__inner page-container">
        <h2 className="offers__title">{title}</h2>
        <p className="offers__text">{text},</p>
        <div className="offers__grid">
          {offers.map((offer) => (
            <div
              className="offers__grid-item"
              key={offer.title}
            >
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
