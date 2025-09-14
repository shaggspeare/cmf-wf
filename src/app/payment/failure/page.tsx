import Link from 'next/link';
import '../payment.css';

export default function PaymentFailure() {
  return (
    <div className="payment-section">
      <div className="section-spacing">
        <div className="container">
          <div className="payment-content">
            <div className="payment-hero-content">
              <div className="payment-hero-title-wrap">
                <h1 className="payment-hero-title failure">
                  Помилка оплати
                </h1>
              </div>
              <div className="payment-subtitle">
                На жаль, оплата не була завершена. Це могло статися з різних причин.
              </div>
            </div>

            <div className="payment-info-section">
              <div className="payment-info-card failure">
                <h3 className="payment-info-title">Можливі причини:</h3>
                <ul className="payment-info-list">
                  <li className="payment-info-item">
                    <div className="payment-info-icon">💳</div>
                    <div className="payment-info-text">
                      Недостатньо коштів на картці
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">🔒</div>
                    <div className="payment-info-text">
                      Платіж було відхилено банком
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">⏰</div>
                    <div className="payment-info-text">
                      Час на оплату закінчився
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">🔄</div>
                    <div className="payment-info-text">
                      Технічна помилка платіжної системи
                    </div>
                  </li>
                </ul>
              </div>

              <div className="payment-info-card">
                <h3 className="payment-info-title">Що робити далі?</h3>
                <ul className="payment-info-list">
                  <li className="payment-info-item">
                    <div className="payment-info-icon">🔄</div>
                    <div className="payment-info-text">
                      Спробуйте ще раз через кілька хвилин
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">💳</div>
                    <div className="payment-info-text">
                      Перевірте дані картки та баланс
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">🏦</div>
                    <div className="payment-info-text">
                      Зв&apos;яжіться зі своїм банком
                    </div>
                  </li>
                  <li className="payment-info-item">
                    <div className="payment-info-icon">📞</div>
                    <div className="payment-info-text">
                      Або зв&apos;яжіться з нашою підтримкою
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="payment-actions">
              <Link href="/#pricing" className="primary-btn w-inline-block">
                <div className="btn-inner">
                  <div>Спробувати ще раз</div>
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

              <Link href="/#contact" className="primary-btn secondary w-inline-block">
                <div className="btn-inner">
                  <div>Зв&apos;язатися з нами</div>
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

              <Link href="/" className="payment-link">
                На головну
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}