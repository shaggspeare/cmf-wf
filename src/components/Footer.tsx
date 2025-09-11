import Link from 'next/link';
import './styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="section-spacing">
        <div className="container">
          <div className="footer-layout">
            <div className="footer-top">
              <div className="footer-title-wrap">
                <h2 className="footer-title">CMF Design</h2>
                <h2 className="footer-title">Course</h2>
              </div>
              <div className="footer-social-block">
                <div className="footer-social-item">
                  <span className="footer-social-label">Instagram:</span>
                  <a 
                    href="https://instagram.com/valeria_vari_design" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    @valeria_vari_design
                  </a>
                </div>
                <div className="footer-social-item">
                  <span className="footer-social-label">WhatsApp/Telegram:</span>
                  <a 
                    href="https://wa.me/393278445410" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    +393278445410
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-menu-wrap">
                <Link
                  href="/"
                  aria-current="page"
                  className="footer-link w--current"
                >
                  Курс
                </Link>
                <a 
                  href="https://instagram.com/valeria_vari_design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Instagram
                </a>
              </div>
              <div className="footer-bottom-text-wrap">
                <p className="footer-copyright">
                  ©Валерія Варі, All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shape-wrap">
        <div className="common-shape-wrap footer-shape">
          <img
            src="images/c-shape.svg"
            loading="lazy"
            alt="c-shape"
            className="common-shape"
          />
        </div>
      </div>
    </div>
  );
}