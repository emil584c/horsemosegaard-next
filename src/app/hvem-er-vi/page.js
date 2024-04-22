import SecondaryCover from "../components/SecondaryCover";
import TextImage from "../components/TextImage";
import FooterSection from "../components/FooterSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import HeaderSection from "../components/HeaderSection";

export default function AboutUs() {
  return (
    <>
      <HeaderSection />
      <SecondaryCover title="Hvem er vi" />
      <TextImage
        title={"Gårdens historie"}
        text={
          "Horsemosegaard er et meget velholdt landsted fra 1900. Et tidligere landbrug og slægtsgård. Vi overtog gården i sommeren 2019 og gik stille og roligt i gang med at renovere de gamle staldbygninger og laden. Vi fandt ting på gården, som vi har brugt til renovering og til dekorationer på væggene og har forsøgt at bevare en hyggelig og rustik stil hele vejen igennem."
        }
        images={[
          {
            url: "./img/old-farm.jpg",
            alt: "An old image of the area",
          },
        ]}
      />
      <TextImage
        title={"Gården i dag"}
        text={
          "På gården bor i dag Per og Tove som begge er i midt 50’erne og elsker at være i gang og kreative herude. Per bygger og laver selv alt herude. Toves store interesse er hunde og hundetræning primært agility. Vi har anlagt en agility bane, hvor der trænes og undervises i agility. På gården bor også 2 hunde og 4 alpacaer."
        }
        images={[
          {
            url: "./img/alpaca-group.jpg",
            alt: "A group of alpacas",
          },
          {
            url: "./img/dogs.jpg",
            alt: "2 dogs",
          },
        ]}
        reverse={true}
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
