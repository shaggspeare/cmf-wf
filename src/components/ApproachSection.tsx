import ImageTextSection from "./ImageTextSection";

export default function ApproachSection() {
  const approachText = `<p>Я поєдную знання з різних дисциплін, щоб перетворити якісний дизайн на бажаний.</p>

<p><strong>Моя мета — створити об'єкт, який викликає емоційний відгук ще до моменту дотику.</strong></p>

<p>Я застосовую принципи ергономіки, розуміння матеріалів, трендів та взаємодії з усіма п'ятьма відчуттями — зоровим, тактильним, слуховим, нюховим і навіть смаковим контекстом.</p>

<p>Усе це формує цілісне враження, що впливає на ключове дизайнерське питання: <strong>людина захоче мати цей об'єкт чи ні</strong>.</p>

<ul>
<li><strong>Синтез форми</strong></li>
<li><strong>Правильний підбір матеріалів</strong></li>
<li><strong>СMF як основа емоційного зв'язку</strong></li>
<li><strong>Робота сенсорикою, текстурами, кольорами</strong></li>
</ul>`;

  return (
    <div style={{ position: 'relative' }}>
      <ImageTextSection
        title="Мій підхід"
        text={approachText}
        imageSrc="/images/cmf/moodboard.jpeg"
        imageAlt="Мудборд дизайну"
        imageOnRight={true}
        className="approach-section"
      />
    </div>
  );
}