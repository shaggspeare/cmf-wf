import './styles/Program.css';

export default function Program() {
  return (
    <div className="program-section">
      <div className="section-spacing">
        <div className="container">
          <div className="section-heading projects-heading">
            <div className="section-title-wrap">
              <h2 className="section-title">Програма курсу</h2>
            </div>
            <div className="section-text-wrap">
              <p className="section-text">
                Курс охоплює всі ключові аспекти сучасного дизайну меблів та CMF дизайну. 
                Всього 23 заняття з глибоким занурення у світ професійного предметного дизайну.
              </p>
            </div>
          </div>
          <div className="program-layout">
            <div className="program-item-gap"></div>
            <div className="program-item">
              <div className="program-item-icon-wrap">
                <img
                  src="/images/cmf/chair1.JPG"
                  loading="lazy"
                  alt="CMF Design"
                  className="program-item-icon"
                />
              </div>
              <div className="program-item-title-wrap">
                <h2 className="program-item-title">CMF Design (5 занять)</h2>
              </div>
              <div className="program-item-text-wrap">
                <p className="program-item-text">
                  Колір: сприйняття, психологія, гармонії. 
                  Матеріали: нові й переосмислені. 
                  Текстури: створення та використання.
                </p>
              </div>
              <div className="program-item-bg"></div>
              <div className="program-item-shape-wrap">
                <div className="common-shape-wrap program-item-shape">
                  <img
                    src="images/s-shape-1.svg"
                    loading="lazy"
                    alt="s-shape-1"
                    className="common-shape"
                  />
                </div>
              </div>
            </div>
            <div className="program-item">
              <div className="program-item-icon-wrap">
                <img
                  src="/images/cmf/chair2.JPG"
                  loading="lazy"
                  alt="Морфологія в дизайні"
                  className="program-item-icon"
                />
              </div>
              <div className="program-item-title-wrap">
                <h2 className="program-item-title">Морфологія в дизайні (8 занять)</h2>
              </div>
              <div className="program-item-text-wrap">
                <p className="program-item-text">
                  Конструктивний аналіз меблів 12–18 ст. 
                  Пошук натхнення у фешн-, ювелірному дизайні, біоніці. 
                  Сучасні підходи до формоутворення.
                </p>
              </div>
              <div className="program-item-bg"></div>
              <div className="program-item-shape-wrap">
                <div className="common-shape-wrap program-item-shape">
                  <img
                    src="images/s-shape-1.svg"
                    loading="lazy"
                    alt="s-shape-1"
                    className="common-shape"
                  />
                </div>
              </div>
            </div>
            <div className="program-item">
              <div className="program-item-icon-wrap">
                <img
                  src="/images/cmf/misc.jpg"
                  loading="lazy"
                  alt="Проєктування"
                  className="program-item-icon"
                />
              </div>
              <div className="program-item-title-wrap">
                <h2 className="program-item-title">Проєктування (7 занять)</h2>
              </div>
              <div className="program-item-text-wrap">
                <p className="program-item-text">
                  Робота з брифом. 
                  Дослідження бренду, ринку, аналогів. 
                  Побудова концепції, габарити, ергономіка, стиль, тренди.
                </p>
              </div>
              <div className="program-item-bg"></div>
              <div className="program-item-shape-wrap">
                <div className="common-shape-wrap program-item-shape">
                  <img
                    src="images/s-shape-1.svg"
                    loading="lazy"
                    alt="s-shape-1"
                    className="common-shape"
                  />
                </div>
              </div>
            </div>
            <div className="program-item">
              <div className="program-item-icon-wrap">
                <img
                  src="/images/cmf/hero.jpg"
                  loading="lazy"
                  alt="Фінал курсу"
                  className="program-item-icon"
                />
              </div>
              <div className="program-item-title-wrap">
                <h2 className="program-item-title">Фінал курсу (3 заняття)</h2>
              </div>
              <div className="program-item-text-wrap">
                <p className="program-item-text">
                  3D-модель (або скетчі). 
                  Презентація проєкту. 
                  Підготовка фінальної CMF-пропозиції та презентація проекту.
                </p>
              </div>
              <div className="program-item-bg"></div>
              <div className="program-item-shape-wrap">
                <div className="common-shape-wrap program-item-shape">
                  <img
                    src="images/s-shape-1.svg"
                    loading="lazy"
                    alt="s-shape-1"
                    className="common-shape"
                  />
                </div>
              </div>
            </div>
            <div className="program-item-gap"></div>
          </div>
        </div>
      </div>
    </div>
  );
}