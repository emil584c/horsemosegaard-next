export default function SecondaryPriceSection(props) {
  return (
    <section className="secondary-price-section">
      <div className="secondary-price-section__inner page-container">
        <h2 className="secondary-price-section__title">{props.title}</h2>
        <p className="secondary-price-section__text">{props.text}</p>
        <div className="secondary-price-section__grid">
          {props.prices.map((price) => (
            <div className="secondary-price-section__item">
              <div>
                <h3 className="secondary-price-section__item-title">
                  {price.title}
                </h3>
                <p className="secondary-price-section__item-text">
                  {price.text}
                </p>
              </div>
              <p className="secondary-price-section__item-price">
                {price.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
