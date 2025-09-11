import ImageTextSection from "./ImageTextSection";

export default function AboutSection() {
  const aboutText = `<p>Я — <strong>Валерія Варі</strong> промисловий / предметний / інтер'єрний дизайнер з <strong>12-річним міжнародним досвідом</strong>.</p>

<ul>
<li>Магістр міланського SPD.</li>
<li>Засновник <strong>CONFERMA Design</strong> (*преміум меблі) Київ, Україна.</li>
<li>Викладач курсу <strong>CMF Design UA</strong> у харківському ХНУМГ та автор курсу CMF Design UA.</li>
<li>Менеджер проєктів, організатор виставок <em>«Life Line»</em> – Італія.</li>
<li>Працювала в ADP Associati, Studio Architetto Tesei та Antes Design.</li>
<li>Брала участь у таких міжнародних виставках як <em>Fuori Salone</em>, <em>iSalone del mobile</em> Мілан; <em>Paris Design Week</em> та <em>Maison Objet</em> у Парижі, <em>KiFF</em> у Києві.</li>
</ul>

<p>Сьогодні зона моєї професійної спеціалізації охоплює проєктування меблів різного рівня складності, освітлювальних приладів, предметного декору, а також розробку інтер'єрних рішень для приватних просторів, об'єктів сектору HORECA та homestaging — декорування простору для особистого користування або з метою продажу нерухомості.</p>`;

  return (
    <ImageTextSection
      title="Про мене"
      text={aboutText}
      imageSrc="/images/cmf/valeria.jpg"
      imageAlt="Валерія Варі - дизайнер"
      imageOnRight={true}
      className="about-section"
    />
  );
}
