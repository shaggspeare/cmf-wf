import ImageTextSection from "./ImageTextSection";
import ShapeBackground from "./ShapeBackground";

export default function BenefitsSection() {
  const benefitsText = `<ul>
<li><strong>Повне розуміння CMF Design</strong> — як працювати з кольором, текстурою, матеріалами</li>
<li><strong>Методики формоутворення і морфологічного аналізу</strong></li>
<li><strong>Чіткий алгоритм проєктування:</strong> бриф, дослідження, концепція, реалізація</li>
<li><strong>Практику створення</strong> мудборду, скетчів, 3D-моделі, презентації</li>
<li><strong>Роботу з реальними задачами</strong> та розвиток дизайнерського мислення</li>
</ul>`;

  return (
    <div style={{ position: 'relative' }}>
      <ImageTextSection
        title="Що ви отримаєте?"
        text={benefitsText}
        imageSrc="/images/cmf/texture.png"
        imageAlt="Текстури та матеріали"
        imageOnRight={true}
        className="benefits-section"
      />
      <ShapeBackground variant="center" />
    </div>
  );
}