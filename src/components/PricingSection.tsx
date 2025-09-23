"use client";

import "./styles/PricingSection.css";

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  isPremium?: boolean;
  isVip?: boolean;
}

export default function PricingSection() {
  const handleSignUpClick = (plan: PricingPlan) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const pricingPlans: PricingPlan[] = [
    {
      name: "MINI",
      price: "4200 UAH",
      features: [
        "23 заняття",
        "Записи відео",
        "Завдання без зворотного фідбеку",
        "Доступ до лекцій 2 місяці",
      ],
    },
    {
      name: "ACTIVE STANDART",
      price: "7200 UAH",
      originalPrice: "8000 UAH",
      isPopular: true,
      features: [
        "23 заняття",
        "Онлайн живі лекції по розкладу",
        "Підтримка викладача, фідбек",
        "Завдання та їх розбір",
        "Доступ до лекцій 3 місяці",
        "Додаткові матеріали (сайти для дизайнерів, література…)",
        "Сертифікат о проходженні курсу",
      ],
    },
    {
      name: "PREMIUM",
      price: "12500 UAH",
      originalPrice: "13500 UAH",
      features: [
        "23 заняття",
        "Онлайн живі лекції по розкладу",
        "Підтримка викладача, фідбек",
        "Завдання та їх розбір",
        "Доступ до лекцій 5 місяців",
        "Додаткові матеріали (сайти для дизайнерів, література…)",
        "Розбір ваших особистих кейсів",
        "2 індивідуальні online консультації",
        "Список міжнародних дизайн виставок",
        "Сертифікат о проходженні курсу",
      ],
      isPremium: true,
    },
    // VIP option commented out
    // {
    //   name: "VIP",
    //   price: "16500 UAH",
    //   originalPrice: "18500 UAH",
    //   features: [
    //     "23 лекції",
    //     "Старт курсу і заняття у зручний для вас час один на один",
    //     "Живі лекції",
    //     "Розбір та виконання разом завдань",
    //     "Доступ до лекцій та відео матеріалів 6 місяців",
    //     "Індивідуальна зустріч offline",
    //     "Додаткові матеріали (сайти для дизайнерів, література…)",
    //     "Розбір ваших особистих кейсів",
    //     "2 індивідуальні online консультації",
    //     "Доводимо вашу ідею до прототипу",
    //     "Сертифікат о проходженні курсу",
    //   ],
    //   isVip: true,
    // },
  ];

  return (
    <div id="pricing" className="pricing-section">
      <div className="section-spacing">
        <div className="container">
          <div className="pricing-centered-title-wrap">
            <h2 className="pricing-centered-title">Вартість курсу</h2>
            <p className="pricing-subtitle">
              Встигни, поки діє знижка на курс до 07.10.2025
            </p>
          </div>

          <div className="pricing-layout">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.isPopular ? "is-popular" : ""} ${plan.isPremium ? "is-premium" : ""} ${plan.isVip ? "is-vip" : ""}`}
              >
                {plan.isPopular && (
                  <div className="pricing-popular-badge">Популярний</div>
                )}

                <div className="pricing-card-header">
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <div className="pricing-price-wrap">
                    <div className="pricing-price">{plan.price}</div>
                    {plan.originalPrice && (
                      <div className="pricing-original-price">
                        {plan.originalPrice}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pricing-features">
                  <ul className="pricing-features-list">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="pricing-feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-btn-wrap">
                  <button
                    onClick={() => handleSignUpClick(plan)}
                    className="primary-btn w-inline-block"
                  >
                    <div className="btn-inner">
                      <div>Записатись</div>
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
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
