export default function ContactSection(props) {
  return (
    <section
      className={`contact-section ${
        props.backgroundSecondary ? "background-secondary" : ""
      }`}
      id="kontakt"
    >
      <div className="contact-section__inner page-container">
        <div className="contact-section__text-container">
          <h2 className="contact-section__title">{props.title}</h2>
          <p className="contact-section__text">{props.text}</p>
          <div className="contact-section__info">
            <a
              href="tel:+21564229"
              className="contact-section__phone"
            >
              <img
                src="./img/icons/phone.svg"
                alt="phone icon"
              />
              <p>+45 21 67 42 29</p>
            </a>
            <a
              href="mailto:horsemosegaard@gmail.com"
              className="contact-section__mail"
            >
              <img
                src="./img/icons/mail.svg"
                alt="mail icon"
              />
              <p>horsemosegaard@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="contact-section__image-container object-fit">
          <img
            src={props.image.url}
            alt={props.image.alt}
          />
        </div>
      </div>
    </section>
  );
}
