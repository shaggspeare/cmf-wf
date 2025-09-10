import './styles/Projects.css';

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="section-spacing">
        <div className="container">
          <div className="section-heading projects-heading">
            <div className="section-title-wrap">
              <h2 className="section-title">Recent Projects</h2>
            </div>
            <div className="section-text-wrap">
              <p className="section-text">
                From concept to completion, these projects highlight my
                expertise in creating innovative solutions that drive
                results. Take a closer look at the stories behind the work.
              </p>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="projects-layout-1 w-dyn-items">
              <div
                role="listitem"
                className="projects-item-wrap w-dyn-item"
              >
                <div className="projects-item">
                  <a
                    href="/src/app/projects/boldstream"
                    className="projects-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-1.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-1-p-500.webp   500w,
                        images/thumb-1-p-800.webp   800w,
                        images/thumb-1-p-1080.webp 1080w,
                        images/thumb-1-p-1600.webp 1600w,
                        images/thumb-1.webp        1620w
                      "
                      className="projects-item-thumb"
                    />
                  </a>
                  <div className="projects-item-content">
                    <a
                      aria-label="projects"
                      href="/src/app/projects/boldstream"
                      className="projects-item-title-wrap w-inline-block"
                    >
                      <h2 className="projects-item-title">Boldstream</h2>
                    </a>
                    <div className="projects-item-category-layout">
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/branding"
                          className="projects-item-category"
                        >
                          Branding
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/web-design"
                          className="projects-item-category"
                        >
                          Web design
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/devolopment"
                          className="projects-item-category"
                        >
                          Devolopment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                className="projects-item-wrap w-dyn-item"
              >
                <div className="projects-item">
                  <a
                    href="/src/app/projects/innovatex"
                    className="projects-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-2.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-2-p-500.webp   500w,
                        images/thumb-2-p-800.webp   800w,
                        images/thumb-2-p-1080.webp 1080w,
                        images/thumb-2-p-1600.webp 1600w,
                        images/thumb-2.webp        1620w
                      "
                      className="projects-item-thumb"
                    />
                  </a>
                  <div className="projects-item-content">
                    <a
                      aria-label="projects"
                      href="/src/app/projects/innovatex"
                      className="projects-item-title-wrap w-inline-block"
                    >
                      <h2 className="projects-item-title">InnovateX</h2>
                    </a>
                    <div className="projects-item-category-layout">
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/marketing"
                          className="projects-item-category"
                        >
                          Marketing
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/devolopment"
                          className="projects-item-category"
                        >
                          Devolopment
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/motion"
                          className="projects-item-category"
                        >
                          Motion
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="projects-layout-2 w-dyn-items">
              <div
                role="listitem"
                className="projects-item-wrap w-dyn-item"
              >
                <div className="projects-item">
                  <a
                    href="/src/app/projects/pixelforge"
                    className="projects-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-3.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-3-p-500.webp   500w,
                        images/thumb-3-p-800.webp   800w,
                        images/thumb-3-p-1080.webp 1080w,
                        images/thumb-3-p-1600.webp 1600w,
                        images/thumb-3.webp        1620w
                      "
                      className="projects-item-thumb"
                    />
                  </a>
                  <div className="projects-item-content">
                    <a
                      aria-label="projects"
                      href="/src/app/projects/pixelforge"
                      className="projects-item-title-wrap w-inline-block"
                    >
                      <h2 className="projects-item-title">PixelForge</h2>
                    </a>
                    <div className="projects-item-category-layout">
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/branding"
                          className="projects-item-category"
                        >
                          Branding
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/web-design"
                          className="projects-item-category"
                        >
                          Web design
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/marketing"
                          className="projects-item-category"
                        >
                          Marketing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                className="projects-item-wrap w-dyn-item"
              >
                <div className="projects-item">
                  <a
                    href="/src/app/projects/synccraft"
                    className="projects-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-4.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-4-p-500.webp   500w,
                        images/thumb-4-p-800.webp   800w,
                        images/thumb-4-p-1080.webp 1080w,
                        images/thumb-4-p-1600.webp 1600w,
                        images/thumb-4.webp        1620w
                      "
                      className="projects-item-thumb"
                    />
                  </a>
                  <div className="projects-item-content">
                    <a
                      aria-label="projects"
                      href="/src/app/projects/synccraft"
                      className="projects-item-title-wrap w-inline-block"
                    >
                      <h2 className="projects-item-title">SyncCraft</h2>
                    </a>
                    <div className="projects-item-category-layout">
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/web-design"
                          className="projects-item-category"
                        >
                          Web design
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/motion"
                          className="projects-item-category"
                        >
                          Motion
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/devolopment"
                          className="projects-item-category"
                        >
                          Devolopment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="projects-layout-3 w-dyn-items">
              <div
                role="listitem"
                className="projects-item-wrap w-dyn-item"
              >
                <div className="projects-item">
                  <a
                    href="/src/app/projects/cipherworks"
                    className="projects-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-5.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-5-p-500.webp   500w,
                        images/thumb-5-p-800.webp   800w,
                        images/thumb-5-p-1080.webp 1080w,
                        images/thumb-5-p-1600.webp 1600w,
                        images/thumb-5.webp        1620w
                      "
                      className="projects-item-thumb"
                    />
                  </a>
                  <div className="projects-item-content">
                    <a
                      aria-label="projects"
                      href="/src/app/projects/cipherworks"
                      className="projects-item-title-wrap w-inline-block"
                    >
                      <h2 className="projects-item-title">Cipherworks</h2>
                    </a>
                    <div className="projects-item-category-layout">
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/motion"
                          className="projects-item-category"
                        >
                          Motion
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/web-design"
                          className="projects-item-category"
                        >
                          Web design
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/devolopment"
                          className="projects-item-category"
                        >
                          Devolopment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="listitem"
                className="projects-item-wrap w-dyn-item"
              >
                <div className="projects-item">
                  <a
                    href="/src/app/projects/spectrashift"
                    className="projects-item-thumb-wrap w-inline-block"
                  >
                    <img
                      src="images/thumb-6.webp"
                      loading="lazy"
                      alt=""
                      sizes="100vw"
                      srcSet="
                        images/thumb-6-p-500.webp   500w,
                        images/thumb-6-p-800.webp   800w,
                        images/thumb-6-p-1080.webp 1080w,
                        images/thumb-6-p-1600.webp 1600w,
                        images/thumb-6.webp        1620w
                      "
                      className="projects-item-thumb"
                    />
                  </a>
                  <div className="projects-item-content">
                    <a
                      aria-label="projects"
                      href="/src/app/projects/spectrashift"
                      className="projects-item-title-wrap w-inline-block"
                    >
                      <h2 className="projects-item-title">SpectraShift</h2>
                    </a>
                    <div className="projects-item-category-layout">
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/marketing"
                          className="projects-item-category"
                        >
                          Marketing
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/branding"
                          className="projects-item-category"
                        >
                          Branding
                        </a>
                      </div>
                      <div className="projects-item-category-gap"></div>
                      <div className="projects-item-category-wrap">
                        <a
                          href="/projects-categories/devolopment"
                          className="projects-item-category"
                        >
                          Devolopment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-shape-wrap">
        <div className="common-shape-wrap project-shape">
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