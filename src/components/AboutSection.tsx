import ImageTextSection from "./ImageTextSection";

export default function AboutSection() {
  const aboutText = `Я — Валерія Варі промисловий / предметний / інтер'єрний дизайнер з 12-річним міжнародним досвідом.

-Магістр міланського SPD.
-Засновник CONFERMA Design (*преміум меблі) Київ, Україна.
-Викладач курсу CMF Design UA у харківському ХНУМГ та автор курсу CMF Design UA.
-Менеджер проєктів, організатор виставок «Life Line» – Італія.
-Працювала в ADP Associati, Studio Architetto Tesei та Antes Design.
-Брала участь у таких міжнародних виставках як Fuori Salone, iSalone del mobile Мілан; Paris Design Week та Maison Objet у Парижі, KiFF у Києві.

Сьогодні зона моєї професійної спеціалізації охоплює проєктування меблів різного рівня складності, освітлювальних приладів, предметного декору, а також розробку інтер'єрних рішень для приватних просторів, об'єктів сектору HORECA та homestaging — декорування простору для особистого користування або з метою продажу нерухомості.`;

  return (
    <ImageTextSection
      title="Про мене"
      text={aboutText}
      imageSrc="/images/cmf/sample.jpg"
      imageAlt="Валерія Варі - дизайнер"
      imageOnRight={true}
      className="about-section"
    />
  );
}
