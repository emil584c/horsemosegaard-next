import HeaderSection from "./components/HeaderSection.jsx";
import PrimaryCover from "./components/PrimaryCover.jsx";
import TextImage from "./components/TextImage.jsx";
import Offers from "./components/Offers.jsx";
import FooterSection from "./components/FooterSection.jsx";
import SecondaryButton from "./components/SecondaryButton.jsx";
import ContactSection from "./components/ContactSection.jsx";

function Home() {
  return (
    <>
      <HeaderSection />
      <PrimaryCover />
      <TextImage
        title={"Vores faciliteter"}
        text={
          "Horsemosegaard er en landejendom beliggende i Bjæverskov, midt mellem Køge og Ringsted. Faciliteterne består af to større lokaler, det ene med bar, loungeområde, poolbord, dart, bordfodbold og diskotek med mulighed for “lysshow” på dansegulvet. I det andet lokale er der plankeborde, stort buffetbord, kaffebar, en sofagruppe og stort tv. Alt herinde kan rykkes rundt på efter behov."
        }
        images={[
          {
            url: "./img/room.png",
            alt: "A room",
          },
          {
            url: "./img/kitchensink.jpg",
            alt: "A kitchen area",
          },
          {
            url: "./img/longtable-tv.jpg",
            alt: "A longtable with tv in background",
          },
          {
            url: "./img/electronics.jpg",
            alt: "A room with electronics",
          },
          {
            url: "./img/bar.jpg",
            alt: "A bar",
          },
        ]}
        id={"faciliteter"}
      >
        <SecondaryButton
          text="Læs mere om vores faciliteter"
          link="/faciliteter"
        />
      </TextImage>
      <Offers
        title="Hvad tilbyder vi"
        text="På Horsemosegaard tilbyder vi vores lokaler til et bredt udvalg af arrangementer, både til private samt firmaer."
        backgroundSecondary={true}
        offers={[
          {
            title: "Fester",
            text: "Hold en af livets store fester herude, såsom konfirmation, barnedåb, bryllup, runde fødselsdage mm.",
          },
          {
            title: "Firmaarrangement",
            text: "Book lokaler og evt udendørs arealer til dit næste firmaarrangement. Det kan være til teambuilding, møder, sommerfest, julefrokost eller andet.",
          },
          {
            title: "Hundetræning",
            text: "Vi har en indhegnet bane på 1200 kvm som kan lejes pr time eller hele dage. På banen er agility udstyr. Der vil i perioder blive tilbudt agility træning.",
          },
          {
            title: "Hobby",
            text: "Har du brug for et sted hvor du kan undervise, holde det næste bestyrelsesmøde eller generalforsamling. Dette kan være kombination med træningsbanen udenfor.",
          },
          {
            title: "Og meget mere",
            text: "Står du og mangler et lokale til noget som ikke er på listen, og tror du vi har de helt rigtige faciliteter? Så skriv en besked eller giv os et opkald.",
          },
        ]}
      />

      <ContactSection
        title="Kontakt os"
        text="Har i spørgsmål til vores faciliteter eller om lokalerne, eller har i lyst til at tage en snak om vi er det rette sted for jer, så send en mail eller giv os et kald, og så tager vi en snak."
        image={{ url: "./img/sunset2.jpg", alt: "A sunset" }}
        backgroundSecondary={true}
      />
      <FooterSection />
    </>
  );
}

export default Home;
