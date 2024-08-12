"use client";

import Link from "next/link";

function FooterSection() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-section__inner page-container">
          <div className="footer-section__row">
            <Link
              href={"/"}
              className="footer-section__logo"
            >
              <img
                src="./img/icons/farm-white.svg"
                alt="farm icon"
              />
              <p className="header-section__logo-text">Horsemosegaard</p>
            </Link>
            <p className="footer-section__text">
              Hyggelige lokaler i en moderne rustik stil i skønne landlige
              omgivelser. Dette er stedet hvor man kan være aktiv sammen med
              sine gæster inde og ude.
            </p>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Genveje</h3>
            <ul>
              <li>
                <Link
                  onClick={() => scrollToTop()}
                  href={"/hvem-er-vi"}
                >
                  Hvem er vi
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToTop()}
                  href={"/priser"}
                >
                  Priser
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToTop()}
                  href={"/faciliteter"}
                >
                  Faciliter
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Her finder du os</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/dir//Gummersmarkvej+23,+4632+Bj%C3%A6verskov/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4652ed62f3fe2f95:0x6d66308573560277?sa=X&ved=1t:707&ictx=111"
                >
                  Gummersmarkvej 23
                  <br />
                  4632 Bjæverskov
                </a>
              </li>
              <a
                href="https://www.instagram.com/horsemosegaard/"
                target="_blank"
              >
                <img
                  src="./img/icons/instagram.svg"
                  alt="instagram logo"
                />
              </a>
            </ul>
          </div>
          <div className="footer-section__row">
            <h3 className="footer-section__row-title">Kontakt os</h3>
            <ul>
              <a
                href="tel:+21564229"
                className="footer-section__phone"
              >
                +45 21 67 42 29
              </a>
              <a
                href="mailto:horsemosegaard@gmail.com"
                className="footer-section__mail"
              >
                horsemosegaard@gmail.com
              </a>
            </ul>
          </div>
        </div>
        <p className="footer-section__cvr page-container">
          CVR-nr.: 44 73 59 03
        </p>
        <p className="footer-section__copyright page-container">
          © 2024 Horsemosegaard. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default FooterSection;
