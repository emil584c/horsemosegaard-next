"use client";

import { useEffect } from "react";

const CalendarComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tockify.com/browser/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-tockify-component="mini"
      data-tockify-calendar="horsemosegaard"
    ></div>
  );
};

export default CalendarComponent;
