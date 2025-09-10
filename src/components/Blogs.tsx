export default function Blogs() {
  return (
    <div className="blogs-section">
      <div className="section-spacing">
        <div className="container">
          <div className="section-heading blogs-heading">
            <div className="section-title-wrap">
              <h2 className="section-title">Blog &amp; Articles</h2>
            </div>
            <div className="section-text-wrap">
              <p className="section-text">
                Vinco animadverto depono spectaculum amaritudo avaritia.
                Suadeo concido defetiscor sodalitas utor tracto cuius thema
                aer. Atqui occaecati placeat arceo delego claudeo tametsi.
              </p>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="blogs-layout w-dyn-items">
              <div role="listitem" className="w-dyn-item">
                <div className="blogs-item">
                  <a
                    href="/blogs/understanding-the-basics-of-responsive-web-design"
                    className="blogs-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-1-1.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-1-p-500-1.webp   500w,
                        images/thumb-1-p-800-1.webp   800w,
                        images/thumb-1-p-1080-1.webp 1080w,
                        images/thumb-1-1.webp        1215w
                      "
                      className="blogs-item-thumb"
                    />
                  </a>
                  <div className="blogs-item-content">
                    <a
                      aria-label="projects"
                      href="/blogs/understanding-the-basics-of-responsive-web-design"
                      className="blogs-item-title-wrap w-inline-block"
                    >
                      <h2 className="blogs-item-title">
                        Understanding the basics of responsive web design
                      </h2>
                    </a>
                    <div className="blogs-item-info-wrap">
                      <div className="blogs-item-category-wrap">
                        <a
                          href="/blogs-categories/startups"
                          className="blogs-item-category"
                        >
                          Startups
                        </a>
                      </div>
                      <div className="blogs-item-border"></div>
                      <div className="blogs-item-date-wrap">
                        <p className="blogs-item-date">April 27, 2025</p>
                      </div>
                      <div className="blogs-item-border"></div>
                      <div className="blogs-item-time-wrap">
                        <p className="blogs-item-time">3 Mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="blogs-item">
                  <a
                    href="/blogs/how-to-choose-the-right-color-palette-for-your-brand"
                    className="blogs-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-2-1.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-2-p-500-1.webp   500w,
                        images/thumb-2-p-800-1.webp   800w,
                        images/thumb-2-p-1080-1.webp 1080w,
                        images/thumb-2-p-1600-1.webp 1600w,
                        images/thumb-2-1.webp        1620w
                      "
                      className="blogs-item-thumb"
                    />
                  </a>
                  <div className="blogs-item-content">
                    <a
                      aria-label="projects"
                      href="/blogs/how-to-choose-the-right-color-palette-for-your-brand"
                      className="blogs-item-title-wrap w-inline-block"
                    >
                      <h2 className="blogs-item-title">
                        How to choose the right color palette for your brand
                      </h2>
                    </a>
                    <div className="blogs-item-info-wrap">
                      <div className="blogs-item-category-wrap">
                        <a
                          href="/blogs-categories/news-events"
                          className="blogs-item-category"
                        >
                          News &amp; Events
                        </a>
                      </div>
                      <div className="blogs-item-border"></div>
                      <div className="blogs-item-date-wrap">
                        <p className="blogs-item-date">April 27, 2025</p>
                      </div>
                      <div className="blogs-item-border"></div>
                      <div className="blogs-item-time-wrap">
                        <p className="blogs-item-time">9 Mins</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="w-dyn-item">
                <div className="blogs-item">
                  <a
                    href="/blogs/how-to-use-data-driven-design-for-better-user-outcomes"
                    className="blogs-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-3-1.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-3-p-500-1.webp   500w,
                        images/thumb-3-p-800-1.webp   800w,
                        images/thumb-3-p-1080-1.webp 1080w,
                        images/thumb-3-p-1600-1.webp 1600w,
                        images/thumb-3-1.webp        1620w
                      "
                      className="blogs-item-thumb"
                    />
                  </a>
                  <div className="blogs-item-content">
                    <a
                      aria-label="projects"
                      href="/blogs/how-to-use-data-driven-design-for-better-user-outcomes"
                      className="blogs-item-title-wrap w-inline-block"
                    >
                      <h2 className="blogs-item-title">
                        How to use data-driven design for better user
                        outcomes
                      </h2>
                    </a>
                    <div className="blogs-item-info-wrap">
                      <div className="blogs-item-category-wrap">
                        <a
                          href="/blogs-categories/business"
                          className="blogs-item-category"
                        >
                          Business
                        </a>
                      </div>
                      <div className="blogs-item-border"></div>
                      <div className="blogs-item-date-wrap">
                        <p className="blogs-item-date">April 27, 2025</p>
                      </div>
                      <div className="blogs-item-border"></div>
                      <div className="blogs-item-time-wrap">
                        <p className="blogs-item-time">5 Mins</p>
                      </div>
                    </div>
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