export default function PriceSection(props) {
  return (
    <section className="price-section">
      <div className="price-section__inner page-container">
        <h2 className="price-section__title">{props.title}</h2>
        <p className="price-section__text">{props.text}</p>
        <p className="price-section__special">
          Pris på helligdage efter aftale.
        </p>
        <div className="price-section__grid">
          {props.prices.map((price) => (
            <div className="price-section__item">
              <div className="price-section__item-title-container">
                <div className="price-section__item-text-container">
                  <h3 className="price-section__item-title">{price.title}</h3>
                  <p className="price-section__item-text">{price.text}</p>
                </div>
              </div>
              <div className="price-section__item-line"></div>
              {price.listItems && (
                <ul className="price-section__item-list">
                  {price.listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="price-section__item-price-container">
                <p className="price-section__item-price">
                  {price.price}{" "}
                  <span className="price-section__item-price-light">
                    Inkl. moms {price.el && "+ el forbrug"}
                  </span>
                </p>
                <p className="price-section__item-deposit">
                  Depositum: {price.deposit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
