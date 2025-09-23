import './styles/DetailedProgramSection.css';

interface DetailedProgramSectionProps {
  className?: string;
}

export default function DetailedProgramSection({ 
  className = ""
}: DetailedProgramSectionProps) {
  const detailedProgramText = `<p><strong>Лектор: Валерія Варі</strong></p>

<ol>
<li><strong>CMF Design.</strong> Що таке CMF? Основні компоненти CMF. CMF стратегія, варіанти продукту CMF для різних аудиторій.</li>
<li><strong>Морфологія.</strong> Що таке морфологія дизайну. Навіщо вона потрібна дизайнеру. З чого складається. Аналіз наявних об'єктів дизайну. Порівняльна характеристика формоутворення 70-х та наш час.</li>
<li><strong>Проектування.</strong> Алгоритм роботи промислового дизайнера. Отримання брифів від фабрик. Як правильно працювати із брифом. Складання додаткових запитань до замовника.</li>
<li><strong>CMF Design.</strong> Компонент СMF – колір. Колір та її сприйняття, психологія кольору. Колірні гармонії.</li>
<li><strong>Морфологія.</strong> Вивчення конструкторських особливостей меблів 12-18 ст. перенесення вузлів кріплення в новий об'єкт з іншого матеріалу на інший функціональний об'єкт.</li>
<li><strong>Морфологія.</strong> Правильне вивчення аналогів дизайн об'єктів того об'єкта, який Ви розробляєте.</li>
<li><strong>Проектування.</strong> Збір інформації про компанію, її аудиторію, аналоги розроблюваного об'єкта, коткурентів. Переваги та недоліки наявних об'єктів над ринком.</li>
<li><strong>CMF Design.</strong> Компонент СMF – матеріали. Нові матеріали та добре знайомі — переосмислені.</li>
<li><strong>Історія дизайну.</strong> 2 Лекції (запис). Дам додатково літературу, яка допоможе систематизувати це все.</li>
<li><strong>Морфологія.</strong> Пошук натхнення та аналогів смислових конструкторських вузлів у суміжних областях – <em>ювелірний дизайн, фешн дизайн, біоніка</em> та інші. Застосування цього прийому на своєму об'єкті, що розробляється.</li>
<li><strong>Проектування.</strong> Brainshtorm ideas. Вибір кількох із якими йдемо далі. Формулюємо Концепт проекту.</li>
<li><strong>CMF Design.</strong> Компонент СMF – текстури. Пошук та створення нових текстур. Використання їх у проектуванні.</li>
<li><strong>Морфологія.</strong> Вивчити стиль, що сподобався в дизайні і зробити ескізи від руки або 3D (по можливості) у тому ж стилі.</li>
<li><strong>Проектування.</strong> Перегляд перших ідей, відбір, робота над опрацюванням ідеї (її сильні та слабкі сторони), як покращити. Початок написання концепту.</li>
<li><strong>Морфологія.</strong> Розбір сучасного дизайну та його особливостей.</li>
<li><strong>Проектування.</strong> Опрацювання ідеї, концепту, розробка її відмінних рис. Габаритні розміри, передбачувані матеріали, формотворні елементи, стиль. Мудборд.</li>
<li><strong>Морфологія.</strong> Робота над деталізацією Вашого дизайну об'єкта можна в ескізах, можна в 3D.</li>
<li><strong>Проектування.</strong> Перша загальна 3D модель, перевірка габаритів, вузлів кріплення, статики, ергономики.</li>
<li><strong>Морфологія.</strong> Що означає впровадження нових технологій у Ваш дизайн? Що означає зробити інноваційний дизайн.</li>
<li><strong>Проектування.</strong> Перша презентація проекту, освітлення концепту, натхнення, аудиторії, ідеї та стилістики виконання проекту. Скетчі та перші рендери. Затвердження проекту для фінального опрацювання.</li>
<li><strong>Детальне опрацювання креслень, габаритів, формоутворення.</strong></li>
<li><strong>CMF Design.</strong> Робота над CMF пропозиціями.</li>
<li><strong>ФІНАЛ</strong></li>
</ol>

<p><strong>Всього 23 заняття з яких:</strong></p>
<ul>
<li>CMF Design 5 занять</li>
<li>Морфологія в Дизайні 8 занять</li>
<li>Проектування 7 занять</li>
<li>Історія Дизайну 2 заняття</li>
</ul>`;

  return (
    <div className={`detailed-program-section ${className}`}>
      <div className="section-spacing">
        <div className="container">
          <div className="detailed-program-centered-title-wrap">
            <h2 className="detailed-program-centered-title">Детальна програма</h2>
          </div>
          <div className="detailed-program-layout">
            <div className="detailed-program-images">
              <div className="detailed-program-image-wrap">
                <img
                  src="/images/cmf/table.jpg"
                  loading="lazy"
                  alt="Презентація програми курсу 1"
                  className="detailed-program-image"
                />
              </div>
              <div className="detailed-program-image-wrap">
                <img
                  src="/images/cmf/bedlamp.JPG"
                  loading="lazy"
                  alt="Презентація програми курсу 2"
                  className="detailed-program-image"
                />
              </div>
              <div className="detailed-program-image-wrap">
                <img
                  src="/images/cmf/salone_exhibition.jpg"
                  loading="lazy"
                  alt="Презентація програми курсу 3"
                  className="detailed-program-image"
                />
              </div>
            </div>
            <div className="detailed-program-content">

              <div className="detailed-program-text-wrap">
                <div className="detailed-program-text" dangerouslySetInnerHTML={{ __html: detailedProgramText }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}