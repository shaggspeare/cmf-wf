import ImageTextSection from "./ImageTextSection";
import ShapeBackground from "./ShapeBackground";

export default function ResultsSection() {
  const resultsText = `<ul>
<li><strong>Повний концепт предмету меблів</strong></li>
<li><strong>Навички в CMF, формі, композиції</strong></li>
<li><strong>Створення особистого проєкту, колекції</strong></li>
</ul>

<p>Після закінчення курсу ви матимете всі необхідні інструменти для створення якісного та емоційно привабливого дизайну меблів, який викликає бажання володіти цим об'єктом.</p>`;

  return (
    <div style={{ position: 'relative' }}>
      <ImageTextSection
        title="Результат після курсу?"
        text={resultsText}
        imageSrc="/images/cmf/cmf-strategy-lamp.png"
        imageAlt="Готові дизайнерські об'єкти"
        imageOnRight={false}
        className="results-section"
      />
      <ShapeBackground variant="center" />
    </div>
  );
}