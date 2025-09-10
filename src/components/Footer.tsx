export default function Footer() {
  return (
    <div className="footer-section">
      <div className="section-spacing">
        <div className="container">
          <div className="footer-layout">
            <div className="footer-top">
              <div className="footer-title-wrap">
                <h2 className="footer-title">Have any</h2>
                <h2 className="footer-title">project idea in</h2>
                <h2 className="footer-title">your mind</h2>
              </div>
              <div className="footer-btn-wrap">
                <a
                  href="/contact"
                  className="primary-btn-dark w-inline-block"
                >
                  <div className="btn-inner">
                    <div>Contact Now</div>
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
                  <div className="btn-shape is-dark-2"></div>
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-text-wrap">
                <p className="footer-bottom-text">
                  Designed by
                  <a
                    href="https://webflow.com/templates/designers/maven-flow"
                    target="_blank"
                    className="footer-bottom-text-link"
                  >
                    Mavenflow
                  </a>
                  |
                  <a
                    href="/src/app/template-info/licenses"
                    className="footer-bottom-text-link"
                  >
                    License
                  </a>
                </p>
              </div>
              <div className="footer-menu-wrap">
                <a
                  href="/public"
                  aria-current="page"
                  className="footer-link w--current"
                >
                  Home
                </a>
                <a href="/about" className="footer-link">
                  About us
                </a>
                <a href="/services" className="footer-link">
                  Services
                </a>
                <a href="/src/app/projectsprojects" className="footer-link">
                  Projects
                </a>
                <a href="/blogs" className="footer-link">
                  Blog
                </a>
              </div>
              <div className="footer-bottom-text-wrap">
                <p className="footer-copyright">
                  ©M.Philips., All rights reserved
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