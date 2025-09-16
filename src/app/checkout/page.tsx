"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "../payment/payment.css";
import "../../components/styles/Contact.css";

interface PricingPlan {
  name: string;
  price: string;
}

function CheckoutContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Get plan data from URL parameters
    const planName = searchParams.get('plan');
    const planPrice = searchParams.get('price');

    if (planName && planPrice) {
      setSelectedPlan({ name: planName, price: planPrice });
    } else {
      // Redirect to pricing if no plan selected
      router.push('/#pricing');
    }
  }, [searchParams, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPlan) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      fullname: formData.get('fullname') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      telegram: formData.get('telegram') as string,
      expectations: formData.get('expectations') as string || '',
      planName: selectedPlan.name,
      planPrice: selectedPlan.price,
    };

    try {
      console.log('Submitting checkout form with data:', data);

      // Store user info before payment
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log('User info stored successfully');
        // Redirect to WayForPay with the stored user ID
        window.location.href = `/api/wayforpay?userId=${responseData.userId}&planName=${selectedPlan.name}&price=${selectedPlan.price}`;
      } else {
        console.error('Checkout submission failed:', responseData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Checkout submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!selectedPlan) {
    return (
      <div className="payment-section">
        <div className="section-spacing">
          <div className="container">
            <div className="payment-content">
              <div style={{
                fontSize: 'var(--_font-size---fz-20)',
                textAlign: 'center',
                color: 'var(--dark)'
              }}>
                Завантаження...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-section">
      <div className="section-spacing">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-title-wrap">
              <h2 className="contact-hero-title">Оформлення замовлення</h2>
            </div>
            <div className="payment-subtitle">
              Тариф: <strong>{selectedPlan.name}</strong> - {selectedPlan.price}
            </div>
          </div>
          <div className="contact-layout">
            <div className="contact-content">
              <div className="contact-title-wrap">
                <h3 className="contact-title">Ваші контактні дані</h3>
              </div>
              <div className="contact-text-wrap">
                <p className="contact-text">
                  Заповніть форму для завершення оплати курсу. Після заповнення ви будете перенаправлені на сторінку оплати.
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
                  id="checkout-form"
                  name="checkout-form"
                  data-name="Checkout Form"
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
                        <div>{isSubmitting ? 'Обробка...' : 'Перейти до оплати'}</div>
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
                <div className={`error-message w-form-fail ${submitStatus === 'error' ? 'w-form-fail-visible' : ''}`}>
                  <div>
                    Упс! Щось пішло не так при обробці замовлення.
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

export default function Checkout() {
  return (
    <Suspense fallback={
      <div className="payment-section">
        <div className="section-spacing">
          <div className="container">
            <div className="payment-content">
              <div style={{
                fontSize: 'var(--_font-size---fz-20)',
                textAlign: 'center',
                color: 'var(--dark)'
              }}>
                Завантаження...
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}