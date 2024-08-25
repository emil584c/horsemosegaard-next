import HeaderSection from "../components/HeaderSection";
import SecondaryCover from "../components/SecondaryCover";
import TextImage from "../components/TextImage";
import FooterSection from "../components/FooterSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Accordion from "../components/Accordion.jsx";

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
        <Accordion
          title="Ofte stillede spørgsmål"
          backgroundSecondary={false}
          items={[
            {
              title: "Hvor mange er der plads til",
              text: "Der er plads til 50 siddende gæster på Horsemosegaard.",
              isOpen: true,
            },
            {
              title: "Følger der service med",
              text: "Der er fuldt service til 50 gæster, rød, hvidvin og vandglas og så er der div. skåle og fade mv.",
            },
            {
              title: "Er der køkken til rådighed",
              text: "Der er 2 anretter køkken med ovn, microovn, komfur, køle og fryseskabe + der er mulighed for at sætte grill eller en foodtruck op udenfor.",
            },
            {
              title: "Serverer I mad",
              text: "Nej man medbringer som udgangspunkt alt selv.",
            },
            {
              title: "Opvarmning af lokaler",
              text: "Lokalerne opvarmes med el radiatorer.",
            },
            {
              title: "Kan man overnatte der",
              text: "Nej men vi henviser gerne til steder hvor man kan overnatte. Og så er der mulighed for at sætte campingvogn, telt eller autocamper op ved forespørgsel.",
            },
            {
              title: "Er der gode parkeringsforhold",
              text: " ja, der kan fint holde min. 35 biler i forbindelse med lokalet.",
            },
            {
              title: "Kan man komme hertil med offentlig transport",
              text: "Nærmeste busstoppested ligger 3 km herfra. Herfra kan man komme til Ringsted, Køge og Solrød bla.",
            },
            {
              title: "Hvor længe før kan jeg aflyse min bookning",
              text: "Senest 30 dage før ellers opkræves fuld pris",
            },
            {
              title: "Hvor meget af mit depositum får jeg tilbage",
              text: "Depositum tilbagebetales efter festen, der vil blive modregnet i el forbrug og evt skader, knuste glas mv.",
            },
            {
              title: "Skal jeg selv gøre rent",
              text: "Rengøring klares som udgangspunkt selv medmindre andet aftales.",
            },
            {
              title: "Hvornår får jeg adgang til lokalet",
              text: "Vi er meget fleksible omkring dette, så har du brug for at pynte op eller sætte ting af nogle dage før, så finder vi ud af det. Lokalet skal være rengjort og klar kl 20 om søndagen ved weekendleje.",
            },
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
