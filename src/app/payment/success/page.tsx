'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../payment.css';

export default function PaymentSuccess() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Only check URL parameters after component mounts on client
    if (typeof window !== 'undefined') {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const transactionStatus = urlParams.get('transactionStatus');
        const reasonCode = urlParams.get('reasonCode');
        
        console.log('Success page params:', { transactionStatus, reasonCode });
        
        // If we detect failure parameters, redirect to failure page
        // reasonCode 1100 = Success
        // reasonCode 1134 = Transaction in progress (Pending) - should stay on success
        // reasonCode 1101+ = Various failure reasons (except 1134)
        if (transactionStatus === 'Declined' || (reasonCode && reasonCode !== '1100' && reasonCode !== '1134' && parseInt(reasonCode) >= 1101)) {
          console.log('Redirecting to failure page');
          window.location.href = '/payment/failure';
          return;
        }
        
        // Log successful case
        if (transactionStatus === 'Approved' || reasonCode === '1100' || reasonCode === '1134' || !transactionStatus) {
          console.log('Payment success confirmed');
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
        // On error, assume success since we're already on success page
      }
    }
  }, []);

  if (!isClient) {
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
    <div className="payment-section">
      <div className="section-spacing">
        <div className="container">
          <div className="payment-content">
            <div className="payment-hero-content">
              <div className="payment-hero-title-wrap">
                <h1 className="payment-hero-title success">
                  Оплата успішна!
                </h1>
              </div>
              <div className="payment-subtitle">
                Дякуємо за покупку курсу CMF Design! Ваш платіж успішно оброблено.
              </div>
            </div>

            <div className="payment-info-section">
              <div className="payment-info-card">
                <h3 className="payment-info-title">Що далі?</h3>
                <ul className="payment-info-list">
                  <li className="payment-info-item">
                    <div className="payment-info-icon">📧</div>
                    <div className="payment-info-text">
                      Перевірте свою електронну пошту для отримання деталей курсу
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">🎓</div>
                    <div className="payment-info-text">
                      Доступ до матеріалів курсу буде надано найближчим часом
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">📞</div>
                    <div className="payment-info-text">
                      З вами зв&apos;яжуться найближчим часом для уточнення деталей
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="payment-actions">
              <Link href="/" className="primary-btn w-inline-block">
                <div className="btn-inner">
                  <div>Повернутися на головну</div>
                  <div className="btn-icon-wrap">
                    <div className="btn-icon w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="btn-shape"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}