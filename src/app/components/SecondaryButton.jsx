"use client";

import Link from "next/link";

function SecondaryButton(props) {
  return (
    <Link
      href={props.link}
      className="secondary-button"
      onClick={() => scrollToTop()}
    >
      <p className="secondary-button__text">{props.text}</p>
      <img
        className="secondary-button__arrow"
        src="./img/icons/arrow.svg"
        alt="arrow icon"
      />
    </Link>
  );
}

export default SecondaryButton;
