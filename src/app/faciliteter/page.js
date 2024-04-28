import HeaderSection from "../components/HeaderSection";
import SecondaryCover from "../components/SecondaryCover";
import TextImage from "../components/TextImage";
import FooterSection from "../components/FooterSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function Facilities() {
  return (
    <>
      <HeaderSection />
      <main>
        <SecondaryCover title="Vores faciliteter" />
        <TextImage
          title={"Vores lokaler"}
          text={
            "Stedet er beliggende i Bjæverskov midt i mellem Køge og Ringsted. Lokalerne er hyggelige og rustikke. Dét ene med bjælker i loftet, lys som kan dæmpes, store plankeborde og anretter borde i samme stil. I det andet lokale kan du slå dig løs på dansegulvet eller dyste i diverse spil, tage en hyggelig snak i loungeområdet eller i baren. Derudover er der et anretterkøkken, garderobe, et toilet og mulighed for adgang til udendørs areal."
          }
          images={[
            {
              url: "./img/longtable-tv.jpg",
              alt: "Room with longtable and a TV",
            },
            {
              url: "./img/lounge-area.jpg",
              alt: "A lounge area",
            },
            {
              url: "./img/kitchensink.jpg",
              alt: "A kitchen area",
            },
            {
              url: "./img/servicetable.jpg",
              alt: "A table for service",
            },
            {
              url: "./img/longtable-setup2.jpg",
              alt: "A longtable setup with service",
            },
            {
              url: "./img/changing-room.jpg",
              alt: "A changing room",
            },
            {
              url: "./img/bar.jpg",
              alt: "A bar",
            },
          ]}
          // primaryButtonText={"Download plantegning"}
          // primaryButtonHref={"./img/room.png"}
          // primaryButtonTargetBlank={true}
        />
        <TextImage
          title={"Aktiviter"}
          text={
            "Vi har mange sjove aktiviteter for både voksne og børn. Alle aktiviterne følger med ved leje af lokalerne."
          }
          images={[
            {
              url: "./img/pooltable.jpg",
              alt: "A pool table",
            },
            {
              url: "./img/dart.jpg",
              alt: "A dart board",
            },
            {
              url: "./img/foosball.jpg",
              alt: "A foosball table",
            },
            {
              url: "./img/poolgame.jpg",
              alt: "A pool game",
            },
            {
              url: "./img/table-tennis.jpg",
              alt: "A table tennis table",
            },
            {
              url: "./img/speakers.png",
              alt: "Speaker area with lights and smoke machine",
            },
          ]}
          listItems={[
            "Poolbord",
            "Dart",
            "Bordfodbold",
            "Bordtennis",
            "Diskotek med lys og røgmaskine mv.",
            "Basketkurv",
          ]}
          reverse={true}
          backgroundSecondary={true}
        />
        <TextImage
          title={"Teknisk udstyr"}
          text={
            "Vi stiller forskelligt elektronik og hvidevarer til rådighed. Følgende er til rådighed, men vi anbefaler at i tager kontakt for at høre om specifikke behov."
          }
          images={[
            {
              url: "./img/tv.jpg",
              alt: "A TV with speakers",
            },
            {
              url: "./img/fridge-filled.jpg",
              alt: "A fridge filled with drinks",
            },
            {
              url: "./img/electronics.jpg",
              alt: "A collection of electronics",
            },
          ]}
          listItems={[
            "85 Tommer LED 4K storskærms TV",
            "3 Køleskabe",
            "Fryser",
            "Ovn og mikrobølgeovn",
            "Opvaskemaskine",
            "Kaffemaskine og elkedel",
            "Induktionskogeplader",
            "Wifi",
          ]}
        />
        <ContactSection
          title="Kontakt os"
          text="Har i spørgsmål til vores faciliteter eller om lokalerne, eller har i lyst til at tage en snak om vi er det rette sted for jer, så send en mail eller giv os et kald, og så tager vi en snak."
          image={{ url: "./img/sunset2.jpg", alt: "A sunset" }}
          backgroundSecondary={true}
        />
      </main>
      <FooterSection />
    </>
  );
}
