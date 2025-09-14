"use client";

import { useState } from "react";
import "./styles/Contact.css";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullname: formData.get('fullname') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      telegram: formData.get('telegram') as string,
      tariff: formData.get('tariff') as string,
      expectations: formData.get('expectations') as string || '',
    };

    try {
      console.log('Submitting form with data:', data);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);

      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        console.log('Form submitted successfully');
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error('Form submission failed:', responseData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div id="contact" className="contact-section">
      <div className="section-spacing">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-title-wrap">
              <h2 className="contact-hero-title">Записатись на курс</h2>
            </div>
          </div>
          <div className="contact-layout">
            <div className="contact-content">
              <div className="contact-title-wrap">
                <h3 className="contact-title">Зв&apos;яжіться з нами</h3>
              </div>
              <div className="contact-text-wrap">
                <p className="contact-text">
                  Заповніть контактну форму або зв&apos;яжіться через соціальні мережі.
                  Я відповім Bам протягом 24 годин.
                </p>
              </div>
              <div className="contact-image-wrap">
                <img
                  src="/images/cmf/contact-moodboard.PNG"
                  loading="lazy"
                  alt="CMF Design Course Cover"
                  className="contact-image"
                />
              </div>
            </div>
            <div className="contact-form">
              <div className="contact-us-wrap w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="post"
                  className="contact-us"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-input-wrap">
                    <label htmlFor="fullname" className="contact-input-label">
                      Твоє ім&apos;я та прізвище*
                    </label>
                    <input
                      className="contact-input w-input"
                      maxLength={256}
                      name="fullname"
                      data-name="FullName"
                      placeholder="Введіть ваше повне ім'я"
                      type="text"
                      id="fullname"
                      required
                    />
                  </div>
                  <div className="contact-input-wrap">
                    <label htmlFor="email" className="contact-input-label">
                      Email*
                    </label>
                    <input
                      className="contact-input w-input"
                      maxLength={256}
                      name="email"
                      data-name="Email"
                      placeholder="Введіть вашу email адресу"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="contact-input-wrap">
                    <label htmlFor="phone" className="contact-input-label">
                      Контактний номер телефону*
                    </label>
                    <input
                      className="contact-input w-input"
                      maxLength={256}
                      name="phone"
                      data-name="Phone"
                      placeholder="Введіть ваш номер телефону"
                      type="tel"
                      id="phone"
                      required
                    />
                  </div>
                  <div className="contact-input-wrap">
                    <label htmlFor="telegram" className="contact-input-label">
                      Нік в телеграмі*
                    </label>
                    <input
                      className="contact-input w-input"
                      maxLength={256}
                      name="telegram"
                      data-name="Telegram"
                      placeholder="@ваш_нік_в_телеграмі"
                      type="text"
                      id="telegram"
                      required
                    />
                  </div>
                  <div className="contact-radio-wrap">
                    <label className="contact-input-label">
                      Який з тарифів тебе зацікавив?*
                      <a href="#pricing" className="contact-pricing-link">Тарифи</a>
                    </label>
                    <div className="contact-radio-group">
                      <label className="contact-radio-item">
                        <input
                          type="radio"
                          name="tariff"
                          value="mini"
                          className="contact-radio-input"
                          required
                        />
                        <span className="contact-radio-label">Тариф MINI</span>
                      </label>
                      <label className="contact-radio-item">
                        <input
                          type="radio"
                          name="tariff"
                          value="standard"
                          className="contact-radio-input"
                          required
                        />
                        <span className="contact-radio-label">Тариф ACTIVE STANDART</span>
                      </label>
                      <label className="contact-radio-item">
                        <input
                          type="radio"
                          name="tariff"
                          value="premium"
                          className="contact-radio-input"
                          required
                        />
                        <span className="contact-radio-label">Тариф PREMIUM</span>
                      </label>
                      <label className="contact-radio-item">
                        <input
                          type="radio"
                          name="tariff"
                          value="vip"
                          className="contact-radio-input"
                          required
                        />
                        <span className="contact-radio-label">Тариф VIP</span>
                      </label>
                      <label className="contact-radio-item">
                        <input
                          type="radio"
                          name="tariff"
                          value="undecided"
                          className="contact-radio-input"
                          required
                        />
                        <span className="contact-radio-label">Хочу консультацію</span>
                      </label>
                    </div>
                  </div>
                  <div className="contact-textarea-wrap">
                    <label htmlFor="expectations" className="contact-input-label">
                      Чого ти очікуєш від курсу?
                    </label>
                    <textarea
                      placeholder="Напишіть ваші очікування від курсу"
                      maxLength={5000}
                      id="expectations"
                      name="expectations"
                      data-name="Expectations"
                      className="contact-textarea w-input"
                    ></textarea>
                  </div>
                  <div className="contact-btn-wrap">
                    <button
                      type="submit"
                      className="primary-btn contact-btn-wrap"
                      disabled={isSubmitting}
                    >
                      <div className="btn-inner">
                        <div>{isSubmitting ? 'Відправка...' : 'Записатись'}</div>
                        <div className="btn-icon-wrap contact">
                          <div className="btn-icon contact w-embed">
                            <svg
                              width="100%"
                              height="100%"
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
                          <div className="btn-icon contact w-embed">
                            <svg
                              width="100%"
                              height="100%"
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
                </form>
                <div className={`success-message w-form-done ${submitStatus === 'success' ? 'w-form-done-visible' : ''}`}>
                  <div>Дякуємо! Ваше повідомлення було отримано!</div>
                </div>
                <div className={`error-message w-form-fail ${submitStatus === 'error' ? 'w-form-fail-visible' : ''}`}>
                  <div>
                    Упс! Щось пішло не так при надсиланні форми.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}