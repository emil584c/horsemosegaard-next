function TextCalender({ title, text }) {
  return (
    <>
      <section className="text-calender page-container">
        <div className="text-calender__inner">
          <div className="text-calender__text-container">
            <h2 className="text-calender__title">{title}</h2>
            <p className="text-calender__text">{text}</p>
          </div>
          <div className="text-calender__calender-section">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FCopenhagen&bgcolor=%23fff8f3&showPrint=0&showTz=0&showCalendars=0&showTabs=0&showTitle=0&src=OGI5NDJkYjBkMzY3YmY2YjQ5NjhjNTU3YjlkMWZhOGY5NjJiNDJiMTNlOTkxMjQ1YzA5M2JlMTU1YTdlMGY3ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default TextCalender;
