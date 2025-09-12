"use client";

import { useState } from "react";
import "./styles/Reviews.css";

export default function Reviews() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  const handleToggleExpand = (index: number) => {
    setExpandedReview(expandedReview === index ? null : index);
  };
  return (
    <div className="reviews-section">
      <div className="section-spacing">
        <div className="container">
          <div className="section-heading projects-heading">
            <div className="section-title-wrap">
              <h2 className="section-title">Відгуки студентів</h2>
            </div>
            <div className="section-text-wrap">
              <p className="section-text">
                Відгуки моїх студентів про курс з проєктування меблів та CMF
                Design.
              </p>
            </div>
          </div>
          <div className="reviews-layout">
            <div className="reviews-item">
              <div className="reviews-item-text-wrap">
                <p
                  className={`reviews-item-text ${expandedReview !== 0 ? "reviews-item-text-long reviews-item-text-expandable" : ""}`}
                  onClick={() => handleToggleExpand(0)}
                >
                  &quot;Валерія, Добрий день! Хочу подякувати Вам за весь цей
                  чудовий курс! Дякуємо за щедрість, професіоналізм, якими Ви
                  сміливо ділитеся! Дякую за величезну кількість корисної,
                  прикладної інформації, за структурний підхід. Завдяки цьому
                  курсу прийшло розуміння, що творець, дизайн, це насамперед
                  система знань. Дякую за чудову атмосферу! Жаль, що я не
                  встигну взяти участь у zoom конференції. Із задоволенням
                  приєднаюся до інших Ваших курсів.&quot;
                </p>
                {expandedReview !== 0 && (
                  <button
                    className="reviews-item-expand-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleExpand(0);
                    }}
                  >
                    Читати повністю
                  </button>
                )}
              </div>
              <div className="reviews-item-info-wrap">
                <div className="reviews-item-author-wrap">
                  <img
                    src="images/author-1.webp"
                    loading="lazy"
                    alt="author-1"
                    className="reviews-item-author"
                  />
                </div>
                <div className="reviews-item-info">
                  <p className="reviews-item-author-name">Студентка курсу</p>
                  <p className="reviews-item-author-info">CMF Design</p>
                </div>
              </div>
            </div>
            <div className="reviews-item">
              <div className="reviews-item-text-wrap">
                <p
                  className={`reviews-item-text ${expandedReview !== 1 ? "reviews-item-text-long reviews-item-text-expandable" : ""}`}
                  onClick={() => handleToggleExpand(1)}
                >
                  &quot;Валеріє, дякую за цей прикрасний курс &ldquo;Морфологія
                  в дизайні&rdquo;! Для себе відкрила багато нового у світі
                  дизайну, навчилась тепер якось інакше дивитись на все, що мене
                  оточує. Ознайомилася з різними стилями, з творцями, які змогли
                  вплинути своїми творами на світ та історію дизайну. Тепер
                  знаю, як можна надихатися, не копіювати, а творити щось нове,
                  своє. Отримані знання дуже допомагають мені в роботі, простіше
                  стало побачити в робочих об&apos;єктах, що не так, як зробити
                  краще.&quot;
                </p>
                {expandedReview !== 1 && (
                  <button
                    className="reviews-item-expand-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleExpand(1);
                    }}
                  >
                    Читати повністю
                  </button>
                )}
              </div>
              <div className="reviews-item-info-wrap">
                <div className="reviews-item-author-wrap">
                  <img
                    src="images/author-2.webp"
                    loading="lazy"
                    alt="author-2"
                    className="reviews-item-author"
                  />
                </div>
                <div className="reviews-item-info">
                  <p className="reviews-item-author-name">Студентка курсу</p>
                  <p className="reviews-item-author-info">CMF Design</p>
                </div>
              </div>
            </div>
            <div className="reviews-item-gap"></div>
            <div className="reviews-item-gap"></div>
            <div className="reviews-item">
              <div className="reviews-item-text-wrap">
                <p className="reviews-item-text">
                  &quot;Добрий вечір Валерія! Хочу подякувати Вам за курс CMF
                  DESIGN, який я пройшла. Дякуємо за нову цікаву та потрібну для
                  майбутнього дизайнера інформацію. Нічого зайвого, все на тему.
                  Багато нового та цікавого дізналася.&quot;
                </p>
              </div>
              <div className="reviews-item-info-wrap">
                <div className="reviews-item-author-wrap">
                  <img
                    src="images/author-3.webp"
                    loading="lazy"
                    alt="author-3"
                    className="reviews-item-author"
                  />
                </div>
                <div className="reviews-item-info">
                  <p className="reviews-item-author-name">Студентка курсу</p>
                  <p className="reviews-item-author-info">CMF Design</p>
                </div>
              </div>
            </div>
            <div className="reviews-item">
              <div className="reviews-item-text-wrap">
                <p className="reviews-item-text">
                  &quot;Вдячна Валерії за величезну кількість корисної
                  інформації, якою поділилася! За напрямок у розвитку, за
                  цікавий погляд на світ дизайну! За відповіді на мої запитання!
                  За позитив і легкість!&quot;
                </p>
              </div>
              <div className="reviews-item-info-wrap">
                <div className="reviews-item-author-wrap">
                  <img
                    src="images/author-4.webp"
                    loading="lazy"
                    alt="author-4"
                    className="reviews-item-author"
                  />
                </div>
                <div className="reviews-item-info">
                  <p className="reviews-item-author-name">Студентка курсу</p>
                  <p className="reviews-item-author-info">CMF Design</p>
                </div>
              </div>
            </div>
            <div className="reviews-instagram-block">
              <a
                href="https://instagram.com/designmarket_mzkk"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn w-inline-block"
              >
                <div className="btn-inner">
                  <div>Більше відгуків</div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
