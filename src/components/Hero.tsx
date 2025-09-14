import "./styles/Hero.css";
import ShapeBackground from "./ShapeBackground";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="section-spacing">
        <div className="container">
          <div className="hero-content">
            <div className="hero-title-wrap">
              <h1 className="hero-title home">
                CMF Design
                <br />
                Course
              </h1>
            </div>
            <div className="hero-sub-title-wrap">
              <h2 className="hero-sub-title">
                Авторський курс з <br />
                проєктування меблів
                <br />
                та CMF Design
              </h2>
            </div>
            <div className="hero-date-badge-wrap">
              <div className="hero-date-badge">
                <div className="hero-date-text">Старт: 25 вересня 2025</div>
              </div>
            </div>
          </div>
          <div className="hero-about-layout">
            <div className="hero-about-content">
              <div className="hero-about-thumb-layout">
                <img
                  src="images/cmf/japandibedsidetable.png"
                  loading="lazy"
                  id="w-node-d10dc31e-9d01-79ed-1a57-d041684826d6-4ce1e319"
                  alt="image"
                  className="hero-about-thumb"
                />
                <img
                  src="images/cmf/stones.JPG"
                  loading="lazy"
                  alt="image"
                  className="hero-about-thumb"
                />
                <img
                  src="images/cmf/cube.JPG"
                  loading="lazy"
                  alt="image"
                  className="hero-about-thumb"
                />
              </div>
              <div className="hero-about-text-wrap">
                <p className="hero-about-text">
                  Це унікальний курс, який поєднує три ключові складові
                  сучасного предметного дизайну:
                </p>
                <ul>
                  <li>Проєктування</li>
                  <li>Морфологію</li>
                  <li>CMF Design (колір, матеріал, текстура)</li>
                </ul>
                <p className="hero-about-text">
                  <strong>CMF Design</strong> - це спеціалізована область
                  дизайну, в якій основна увага приділяється трьом елементам
                  поверхні - кольору, матеріалу та обробки (тобто текстурі), щоб
                  підтримувати як функціональні, так і емоційні характеристики
                  продукту.
                </p>
                <br />
                <p className="hero-about-text">
                  Ви пройдете повний шлях — від аналізу завдання до створення
                  скетчів, хто володіє програмами 3D-модель з продуманою
                  концепцією, стилістикою і CMF-пропозицією.
                  <br />
                  Курс створений для дизайнерів, які хочуть працювати глибше,
                  свідоміше й актуальніше.
                </p>
              </div>
              <div className="hero-about-btn-wrap">
                <a href="#contact" className="primary-btn w-inline-block">
                  <div className="btn-inner">
                    <div>Записатись на курс</div>
                    <div className="btn-icon-wrap">
                      <div className="btn-icon w-embed">
                        <svg
                          width=" 100%"
                          height=" 100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="btn-icon w-embed">
                        <svg
                          width=" 100%"
                          height=" 100%"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="btn-shape"></div>
                </a>
              </div>
              <div className="hero-social-block">
                <div className="hero-social-item">
                  <span className="hero-social-label">Instagram:</span>
                  <a
                    href="https://instagram.com/valeria_vari_design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link"
                  >
                    @valeria_vari_design
                  </a>
                </div>
                <div className="hero-social-item">
                  <span className="hero-social-label">WhatsApp/Telegram:</span>
                  <a
                    href="https://wa.me/393278445410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link"
                  >
                    +393278445410
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-about-thumb-wrap">
              <img
                src="images/cmf/horizontal-cmf.jpg"
                loading="lazy"
                alt="hero-thumb"
                className="hero-about-thumb"
              />
            </div>
          </div>
        </div>
      </div>
      <ShapeBackground
        variant="hero"
        imageSrc="images/c-shape-2.svg"
        imageAlt="c-shape-2"
      />
    </div>
  );
}
