import ImageTextSection from "./ImageTextSection";

export default function CourseSection() {
  const courseText = `<p>Це унікальний авторський курс, який поєднує три ключові складові сучасного предметного дизайну:</p>

<ul>
<li><strong>Проєктування</strong></li>
<li><strong>Морфологію</strong></li>
<li><strong>CMF Design</strong> (колір, матеріал, текстура)</li>
</ul>

<p>Ви пройдете повний шлях — від аналізу завдання до створення скетчів, хто володіє програмами 3D-модель з продуманою концепцією, стилістикою і CMF-пропозицією.</p>

<p><strong>Курс створений для дизайнерів, які хочуть працювати глибше, свідоміше й актуальніше.</strong></p>`;

  return (
    <ImageTextSection
      title="Про курс"
      text={courseText}
      imageSrc="/images/cmf/course-cover.jpg"
      imageAlt="Курс CMF Design"
      imageOnRight={false}
      className="course-section"
    />
  );
}