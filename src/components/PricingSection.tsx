'use client';

import './styles/PricingSection.css';
import { useState } from 'react';

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
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const extractPrice = (priceString: string): number => {
    return parseInt(priceString.replace(/[^\d]/g, ''));
  };

  const handlePayment = async (plan: PricingPlan) => {
    setLoadingPlan(plan.name);
    
    try {
      const response = await fetch('/api/wayforpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName: plan.name,
          price: extractPrice(plan.price),
          currency: 'UAH'
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Create and submit form to WayForPay
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = data.paymentUrl;
        form.style.display = 'none';

        // Add all payment data as hidden inputs
        Object.entries(data.paymentData).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = Array.isArray(value) ? value.join(',') : String(value);
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
      } else {
        alert('Помилка при створенні платежу. Спробуйте пізніше.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Помилка при створенні платежу. Спробуйте пізніше.');
    } finally {
      setLoadingPlan(null);
    }
  };
  const pricingPlans: PricingPlan[] = [
    {
      name: "MINI",
      price: "1 UAH",
      features: [
        "Записи відео",
        "Завдання без зворотного фідбеку",
        "Доступ до лекцій 2 місяці"
      ]
    },
    {
      name: "ACTIVE STANDART",
      price: "1 UAH",
      originalPrice: "8000 UAH",
      features: [
        "Онлайн живі лекції по розкладу",
        "Підтримка викладача, фідбек",
        "Завдання та їх розбір",
        "Доступ до лекцій 3 місяці",
        "Додаткові матеріали (сайти для дизайнерів, література…)",
        "Сертифікат о проходженні курсу"
      ]
    },
    {
      name: "PREMIUM",
      price: "1 UAH",
      originalPrice: "13500 UAH",
      features: [
        "Онлайн живі лекції по розкладу",
        "Підтримка викладача, фідбек",
        "Завдання та їх розбір",
        "Доступ до лекцій 5 місяців",
        "Додаткові матеріали (сайти для дизайнерів, література…)",
        "Розбір ваших особистих кейсів",
        "2 індивідуальні online консультації",
        "Список міжнародних дизайн виставок",
        "Сертифікат о проходженні курсу"
      ],
      isPremium: true,
      isPopular: true
    },
    {
      name: "VIP",
      price: "1 UAH",
      originalPrice: "18500 UAH",
      features: [
        "Старт курсу і заняття у зручний для вас час один на один",
        "Живі лекції",
        "Розбір та виконання разом завдань",
        "Доступ до лекцій та відео матеріалів 6 місяців",
        "Індивідуальна зустріч offline",
        "Додаткові матеріали (сайти для дизайнерів, література…)",
        "Розбір ваших особистих кейсів",
        "2 індивідуальні online консультації",
        "Доводимо вашу ідею до прототипу",
        "Сертифікат о проходженні курсу"
      ],
      isVip: true
    }
  ];

  return (
    <div id="pricing" className="pricing-section">
      <div className="section-spacing">
        <div className="container">
          <div className="pricing-centered-title-wrap">
            <h2 className="pricing-centered-title">Вартість курсу</h2>
            <p className="pricing-subtitle">Встигни, поки діє знижка на курс до 20.09.2025</p>
          </div>
          
          <div className="pricing-layout">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.isPopular ? 'is-popular' : ''} ${plan.isPremium ? 'is-premium' : ''} ${plan.isVip ? 'is-vip' : ''}`}>
                {plan.isPopular && (
                  <div className="pricing-popular-badge">Популярний</div>
                )}
                
                <div className="pricing-card-header">
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <div className="pricing-price-wrap">
                    <div className="pricing-price">{plan.price}</div>
                    {plan.originalPrice && (
                      <div className="pricing-original-price">{plan.originalPrice}</div>
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
                    onClick={() => handlePayment(plan)}
                    disabled={loadingPlan === plan.name}
                    className="primary-btn w-inline-block"
                  >
                    <div className="btn-inner">
                      <div>
                        {loadingPlan === plan.name ? 'Обробка...' : 'Купити'}
                      </div>
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