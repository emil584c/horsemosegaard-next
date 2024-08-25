"use client";

import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className={`accordion ${
        props.backgroundSecondary ? "background-secondary" : ""
      }`}
    >
      <div className="accordion__inner">
        <h2 className="accordion__title">{props.title}</h2>
        {props.items.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.title}
            answer={item.text}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
