import PrimaryButton from "./PrimaryButton";
import ImageSlider from "./ImageSlider";

function PrimaryCover() {
  return (
    <>
      <section className="primary-cover">
        <div className="primary-cover__text-container page-container">
          <h1 className="primary-cover__title">
            Vi skaber de hyggeligste rammer om dit arrangement
          </h1>
          <p className="primary-cover__text">
            Horsemosegaard er for dig som ønsker hyggelige lokaler i en moderne
            rustik stil i skønne landlige omgivelser. Dette er stedet hvor man
            kan være aktiv sammen med sine gæster inde og ude. Vi er i
            beliggende i Bjæverskov, tæt på Køge.
          </p>
          <div className="primary-cover__button-container">
            <PrimaryButton
              text={"Kontakt"}
              href={"#kontakt"}
            />
            <PrimaryButton
              transparent={true}
              text={"Læs mere"}
              href={"#faciliteter"}
            />
          </div>
        </div>
        <ImageSlider
          images={[
            {
              url: "./img/outside-sunset.jpg",
              alt: "Picture of a sunset",
            },
            {
              url: "./img/lounge-area.jpg",
              alt: "A lounge area",
            },
            {
              url: "./img/alpaca-group.jpg",
              alt: "A group of alpacas",
            },
            {
              url: "./img/outside-room.jpg",
              alt: "Outside view of the facilites",
            },
            {
              url: "./img/longtable.jpg",
              alt: "A long table with chairs",
            },
            {
              url: "./img/kitchensink.jpg",
              alt: "A kitchen prepping area",
            },
            {
              url: "./img/pooltable.jpg",
              alt: "A pool table",
            },
            {
              url: "./img/changing-room.jpg",
              alt: "A changing room",
            },
            {
              url: "./img/room.png",
              alt: "A room with a pooltable and foosball table",
            },
          ]}
        />
      </section>
    </>
  );
}

export default PrimaryCover;
