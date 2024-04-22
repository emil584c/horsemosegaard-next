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
              alt: "1",
            },
            {
              url: "./img/lounge-area.jpg",
              alt: "2",
            },
            {
              url: "./img/alpaca-group.jpg",
              alt: "3",
            },
            {
              url: "./img/outside-room.jpg",
              alt: "4",
            },
            {
              url: "./img/longtable.jpg",
              alt: "5",
            },
            {
              url: "./img/kitchensink.jpg",
              alt: "6",
            },
            {
              url: "./img/pooltable.jpg",
              alt: "7",
            },
            {
              url: "./img/changing-room.jpg",
              alt: "8",
            },
            {
              url: "./img/room.png",
              alt: "9",
            },
          ]}
        />
      </section>
    </>
  );
}

export default PrimaryCover;
