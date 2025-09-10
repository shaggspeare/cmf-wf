export default function Hero() {
  return (
    <div className="hero-section">
      <div className="section-spacing">
        <div className="container">
          <div className="hero-content">
            <div className="hero-title-wrap">
              <h1 className="hero-title home">CMF Design<br />Course</h1>
            </div>
            <div className="hero-sub-title-wrap">
              <h2 className="hero-sub-title">
                Авторський курс з <br />
                проєктування меблів
                <br />
                та CMF Design
              </h2>
            </div>
          </div>
          <div className="hero-about-layout">
            <div className="hero-about-content">
              <div className="hero-about-thumb-layout">
                <img
                  src="images/h-thumb-1.webp"
                  loading="lazy"
                  id="w-node-d10dc31e-9d01-79ed-1a57-d041684826d6-4ce1e319"
                  alt="image"
                  className="hero-about-thumb"
                />
                <img
                  src="images/h-thumb-2.webp"
                  loading="lazy"
                  alt="image"
                  className="hero-about-thumb"
                />
                <img
                  src="images/h-thumb-3.webp"
                  loading="lazy"
                  alt="image"
                  className="hero-about-thumb"
                />
              </div>
              <div className="hero-about-title-wrap">
                <h3 className="hero-about-title">About Me</h3>
              </div>
              <div className="hero-about-text-wrap">
                <p className="hero-about-text">
                  A seasoned UI/UX designer dedicated to bridging creativity
                  with user-centric design principles, sculpting intuitive
                  digital experiences that resonate with audiences. With a knack
                  for transforming ideas into visually compelling interfaces.
                </p>
              </div>
              <div className="hero-about-btn-wrap">
                <a href="/about" className="primary-btn w-inline-block">
                  <div className="btn-inner">
                    <div>View More</div>
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
            <div className="hero-about-thumb-wrap">
              <img
                src="images/cmf/hero.jpg"
                loading="lazy"

                alt="hero-thumb"
                className="hero-about-thumb"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape-wrap">
        <div className="common-shape-wrap hero-shape">
          <img
            src="images/c-shape-2.svg"
            loading="lazy"
            alt="c-shape-2"
            className="common-shape"
          />
        </div>
      </div>
    </div>
  );
}
