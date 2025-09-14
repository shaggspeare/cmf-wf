import ImageTextSection from "./ImageTextSection";
import ShapeBackground from "./ShapeBackground";

export default function AboutSection() {
  const aboutText = `<p>Я — <strong>Валерія Варі</strong> промисловий / предметний / інтер'єрний дизайнер з <strong>12-річним міжнародним досвідом</strong>.</p>

<ul>
<li>Магістр міланського <strong>SPD</strong>.</li>
<li>Засновник <strong>CONFERMA Design</strong> (*преміум меблі) Київ, Україна.</li>
<li>Викладач курсу <strong>CMF Design UA</strong> у харківському <strong>ХНУМГ</strong> та приватній школі дизайну <strong>EDS</strong>.</li>
<li>Aвтор курсу <strong>CMF Design UA</strong> з 2019 року.</li>
<li>Менеджер проєктів, організатор виставок <strong>«Life Line»</strong> – Італія.</li>
<li>Працювала в <strong>ADP Associati</strong>, <strong>Studio Architetto Tesei</strong> та <strong>Antes Design</strong>.</li>
<li>Брала участь у таких міжнародних виставках як <strong>Fuori Salone</strong>, <strong>iSalone del mobile</strong> Мілан; <strong>Paris Design Week</strong> та <strong>Maison Objet</strong> у Парижі, <strong>KiFF</strong> у Києві.</li>
</ul>

<p>Сьогодні зона моєї професійної спеціалізації охоплює проєктування меблів різного рівня складності, освітлювальних приладів, предметного декору, а також розробку інтер'єрних рішень для приватних просторів, об'єктів сектору HORECA та homestaging — декорування простору для особистого користування або з метою продажу нерухомості.</p>`;

  return (
    <div style={{ position: "relative" }}>
      <ImageTextSection
        title="Про мене"
        text={aboutText}
        imageSrc="/images/cmf/valeria.JPG"
        imageAlt="Валерія Варі - дизайнер"
        imageOnRight={true}
        className="about-section"
      />
      <ShapeBackground variant="center" />
    </div>
  );
}
