export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="nav-section">
        <div className="section-spacing">
          <div className="container">
            <div className="nav-layout">
              <div className="nav-left">
                <a
                  href="/public"
                  aria-current="page"
                  className="logo-wrap w-inline-block w--current"
                >
                  <img
                    loading="lazy"
                    src="images/logo.svg"
                    alt="logo"
                    className="logo"
                  />
                </a>
              </div>
              <div className="nav-middle">
                <div className="nav-menu">
                  <a
                    href="/public"
                    aria-current="page"
                    className="nav-link w--current"
                  >
                    Home
                  </a>
                  <a href="/about" className="nav-link">
                    About Me
                  </a>
                  <a href="/services" className="nav-link">
                    Services
                  </a>
                  <a href="/src/app/projectsprojects" className="nav-link">
                    Projects
                  </a>
                  <div
                    data-delay="0"
                    data-hover="true"
                    className="nav-dropdown w-dropdown"
                  >
                    <div className="nav-dropdown-toggle w-dropdown-toggle">
                      <div>Pages</div>
                      <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                    </div>
                    <nav className="nav-dropdown-list w-dropdown-list">
                      <div className="nav-dropdown-inner">
                        <a
                          href="/shop"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Shop
                        </a>
                        <a
                          href="https://mphilips.webflow.io/product/dashboard-ui-design-kit"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Shop Single
                        </a>
                        <a
                          href="/blogs/how-to-balance-creativity-and-functionality-in-web-design"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Blog Single
                        </a>
                        <a
                          href="/src/app/template-info/style-guide"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Style guide
                        </a>
                        <a
                          href="/src/app/template-info/licenses"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Licenses
                        </a>
                        <a
                          href="/src/app/template-info/changelog"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Changelog
                        </a>
                        <a
                          href="/404"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          404 Page
                        </a>
                        <a
                          href="/401"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Password Protected
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div className="show-mobile">
                    <a href="#" className="primary-btn w-inline-block">
                      <div className="btn-inner">
                        <div>Contact</div>
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
              </div>
              <div className="nav-right">
                <div className="hide-mobile">
                  <a
                    href="/contact"
                    className="primary-btn-dark w-inline-block"
                  >
                    <div className="btn-inner">
                      <div>Contact</div>
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
                <div className="nav-open">
                  <div className="nav-bar _1"></div>
                  <div className="nav-bar _2"></div>
                  <div className="nav-bar _3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="hero-section">
          <div className="section-spacing">
            <div className="container">
              <div className="hero-content">
                <div className="hero-title-wrap">
                  <h1 className="hero-title home">Michael</h1>
                  <h1 className="hero-title home">Philips</h1>
                </div>
                <div className="hero-sub-title-wrap">
                  <h2 className="hero-sub-title">
                    Creative Designer,
                    <br />
                    Based in London
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
                      digital experiences that resonate with audiences. With a
                      knack for transforming ideas into visually compelling
                      interfaces.
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
                    src="images/hero-thumb.webp"
                    loading="lazy"
                    sizes="(max-width: 1701px) 100vw, 1701px"
                    srcSet="
                      images/hero-thumb-p-500.webp   500w,
                      images/hero-thumb-p-800.webp   800w,
                      images/hero-thumb-p-1080.webp 1080w,
                      images/hero-thumb-p-1600.webp 1600w,
                      images/hero-thumb.webp        1701w
                    "
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
        <div className="services-section">
          <div className="section-spacing">
            <div className="container">
              <div className="section-heading projects-heading">
                <div className="section-title-wrap">
                  <h2 className="section-title">Best Services</h2>
                </div>
                <div className="section-text-wrap">
                  <p className="section-text">
                    With a deep understanding of design principles and industry
                    trends, I provide services that empower clients to achieve
                    their unique objectives.
                  </p>
                </div>
              </div>
              <div className="services-layout">
                <div className="services-item-gap"></div>
                <div className="services-item">
                  <div className="services-item-icon-wrap">
                    <img
                      src="images/icon-1.svg"
                      loading="lazy"
                      alt="icon-1"
                      className="services-item-icon"
                    />
                  </div>
                  <div className="services-item-title-wrap">
                    <h2 className="services-item-title">Website Design</h2>
                  </div>
                  <div className="services-item-text-wrap">
                    <p className="services-item-text">
                      Crafting visually stunning, user-centered websites
                      tailored to your brand and business goals. Ongoing support
                      and updates to ensure your website remains secure, fast,
                      and up-to-date.
                    </p>
                  </div>
                  <div className="services-item-bg"></div>
                  <div className="services-item-shape-wrap">
                    <div className="common-shape-wrap services-item-shape">
                      <img
                        src="images/s-shape-1.svg"
                        loading="lazy"
                        alt="s-shape-1"
                        className="common-shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-item-icon-wrap">
                    <img
                      src="images/icon-2.svg"
                      loading="lazy"
                      alt="icon-2"
                      className="services-item-icon"
                    />
                  </div>
                  <div className="services-item-title-wrap">
                    <h2 className="services-item-title">Web Development</h2>
                  </div>
                  <div className="services-item-text-wrap">
                    <p className="services-item-text">
                      Building websites optimized for all devices, from desktop
                      to mobile. Ongoing support and updates to ensure your
                      website remains secure, fast, and up-to-date.
                    </p>
                  </div>
                  <div className="services-item-bg"></div>
                  <div className="services-item-shape-wrap">
                    <div className="common-shape-wrap services-item-shape">
                      <img
                        src="images/s-shape-1.svg"
                        loading="lazy"
                        alt="s-shape-1"
                        className="common-shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-item-icon-wrap">
                    <img
                      src="images/icon-3.svg"
                      loading="lazy"
                      alt="icon-3"
                      className="services-item-icon"
                    />
                  </div>
                  <div className="services-item-title-wrap">
                    <h2 className="services-item-title">Brand Identity</h2>
                  </div>
                  <div className="services-item-text-wrap">
                    <p className="services-item-text">
                      Developing impactful logos and cohesive visual identities
                      that resonate with your target audience. Designing
                      business cards, brochures, and digital assets that align
                      with your brand identity.
                    </p>
                  </div>
                  <div className="services-item-bg"></div>
                  <div className="services-item-shape-wrap">
                    <div className="common-shape-wrap services-item-shape">
                      <img
                        src="images/s-shape-1.svg"
                        loading="lazy"
                        alt="s-shape-1"
                        className="common-shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="services-item">
                  <div className="services-item-icon-wrap">
                    <img
                      src="images/icon-4.svg"
                      loading="lazy"
                      alt="icon-4"
                      className="services-item-icon"
                    />
                  </div>
                  <div className="services-item-title-wrap">
                    <h2 className="services-item-title">Digital Marketing</h2>
                  </div>
                  <div className="services-item-text-wrap">
                    <p className="services-item-text">
                      Optimizing your website and content to rank higher on
                      search engines and attract organic traffic. Designing and
                      executing personalized email campaigns to conversions.
                    </p>
                  </div>
                  <div className="services-item-bg"></div>
                  <div className="services-item-shape-wrap">
                    <div className="common-shape-wrap services-item-shape">
                      <img
                        src="images/s-shape-1.svg"
                        loading="lazy"
                        alt="s-shape-1"
                        className="common-shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="services-item-gap"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="clients-section">
          <div className="section-spacing">
            <div className="container">
              <div className="section-heading projects-heading">
                <div className="section-title-wrap">
                  <h2 className="section-title">Latest Clients</h2>
                </div>
                <div className="section-text-wrap">
                  <p className="section-text">
                    Read firsthand accounts from clients who have experienced
                    the value and impact of my work. Their stories reflect the
                    quality and dedication I bring to every project.
                  </p>
                </div>
              </div>
              <div className="clients-layout">
                <div className="clients-item">
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-1.svg"
                      loading="lazy"
                      alt="brand-1"
                      className="clients-item-brand"
                    />
                  </div>
                  <div className="clients-item-gap"></div>
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-2.svg"
                      loading="lazy"
                      alt="brand-2"
                      className="clients-item-brand"
                    />
                  </div>
                  <div className="clients-item-gap"></div>
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-3.svg"
                      loading="lazy"
                      alt="brand-3"
                      className="clients-item-brand"
                    />
                  </div>
                  <div className="clients-item-gap"></div>
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-4.svg"
                      loading="lazy"
                      alt="brand-4"
                      className="clients-item-brand"
                    />
                  </div>
                  <div className="clients-item-gap"></div>
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-5.svg"
                      loading="lazy"
                      alt="brand-5"
                      className="clients-item-brand"
                    />
                  </div>
                  <div className="clients-item-gap"></div>
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-6.svg"
                      loading="lazy"
                      alt="brand-6"
                      className="clients-item-brand"
                    />
                  </div>
                  <div className="clients-item-gap"></div>
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-7.svg"
                      loading="lazy"
                      alt="brand-7"
                      className="clients-item-brand"
                    />
                  </div>
                  <div className="clients-item-gap"></div>
                  <div className="clients-item-brand-wrap">
                    <img
                      src="images/brand-8.svg"
                      loading="lazy"
                      alt="brand-8"
                      className="clients-item-brand"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-section">
          <div className="section-spacing">
            <div className="container">
              <div className="section-heading projects-heading">
                <div className="section-title-wrap">
                  <h2 className="section-title">Clients Reviews</h2>
                </div>
                <div className="section-text-wrap">
                  <p className="section-text">
                    With a deep understanding of design principles and industry
                    trends, I provide services that empower clients to achieve
                    their unique objectives.
                  </p>
                </div>
              </div>
              <div className="reviews-layout">
                <div className="reviews-item">
                  <div className="reviews-item-text-wrap">
                    <p className="reviews-item-text">
                      “Working with Philips was game-changer. His attention to
                      detail and creativity took our project to a new level. The
                      final product was beyond our expectations, and the
                      process.”
                    </p>
                  </div>
                  <div className="reviews-item-info-wrap">
                    <div className="reviews-item-author-wrap">
                      <img
                        src="images/author-1.webp"
                        loading="lazy"
                        alt="author-1"
                        className="reviews-item-author"
                      />
                    </div>
                    <div className="reviews-item-info">
                      <p className="reviews-item-author-name">Ron Pagac</p>
                      <p className="reviews-item-author-info">
                        Project Manager
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reviews-item">
                  <div className="reviews-item-thumb-wrap">
                    <div className="reviews-item-video w-embed">
                      <video
                        className="top-video"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="images/video-full-1-poster-00001.jpg"
                      >
                        <source
                          src="images/video-full-1-transcode.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="images/video-full-1-transcode.webm"
                          type="video/webm"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="reviews-item-info-wrap">
                    <div className="reviews-item-author-wrap">
                      <img
                        src="images/author-2.webp"
                        loading="lazy"
                        alt="author-2"
                        className="reviews-item-author"
                      />
                    </div>
                    <div className="reviews-item-info">
                      <p className="reviews-item-author-name">
                        Desiree Langosh
                      </p>
                      <p className="reviews-item-author-info">
                        Creative Director
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reviews-item-gap"></div>
                <div className="reviews-item-gap"></div>
                <div className="reviews-item">
                  <div className="reviews-item-text-wrap">
                    <p className="reviews-item-text">
                      “I can&#x27;t recommend Philips enough. He turned our
                      vague ideas into a cohesive, beautiful design that
                      perfectly captured our brand. His ability understand
                      vision was impressive.”
                    </p>
                  </div>
                  <div className="reviews-item-info-wrap">
                    <div className="reviews-item-author-wrap">
                      <img
                        src="images/author-3.webp"
                        loading="lazy"
                        alt="author-3"
                        className="reviews-item-author"
                      />
                    </div>
                    <div className="reviews-item-info">
                      <p className="reviews-item-author-name">
                        Christina Bogan
                      </p>
                      <p className="reviews-item-author-info">
                        Founder &amp; CEO
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reviews-item">
                  <div className="reviews-item-thumb-wrap">
                    <div className="reviews-item-video w-embed">
                      <video
                        className="top-video"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="images/video-full-2-poster-00001.jpg"
                      >
                        <source
                          src="images/video-full-2-transcode.mp4"
                          type="video/mp4"
                        />
                        <source
                          src="images/video-full-2-transcode.webm"
                          type="video/webm"
                        />
                      </video>
                    </div>
                  </div>
                  <div className="reviews-item-info-wrap">
                    <div className="reviews-item-author-wrap">
                      <img
                        src="images/author-4.webp"
                        loading="lazy"
                        alt="author-4"
                        className="reviews-item-author"
                      />
                    </div>
                    <div className="reviews-item-info">
                      <p className="reviews-item-author-name">Pablo Schmidt</p>
                      <p className="reviews-item-author-info">
                        Senior Product Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-section">
          <div className="section-spacing">
            <div className="container">
              <div className="faq-layout">
                <div className="section-heading faq-heading">
                  <div className="section-title-wrap">
                    <h2 className="section-title">FAQ</h2>
                  </div>
                  <div className="section-text-wrap faq-section-text">
                    <p className="section-text">
                      Got questions? Check out the frequently asked questions
                      below for answers to common inquiries about my process,
                      services, and how we can collaborate effectively.
                    </p>
                  </div>
                </div>
                <div className="faq-right">
                  <div
                    data-w-id="71f12e27-b803-1936-93b5-06c6f8be0a19"
                    className="faq"
                  >
                    <div className="faq-title-wrap">
                      <h2 className="faq-title">
                        What information do you need to get started?
                      </h2>
                      <div className="faq-icon">
                        <div className="faq-icon-plus"></div>
                        <div className="faq-icon-minus"></div>
                      </div>
                    </div>
                    <div className="faq-text-wrap">
                      <p className="faq-text">
                        To begin, I’ll need a clear understanding of your goals,
                        target audience, brand guidelines (if available), and
                        any specific features or design preferences you have in
                        mind. I’ll guide you through the details during our
                        initial consultation.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="71f12e27-b803-1936-93b5-06c6f8be0a23"
                    className="faq"
                  >
                    <div className="faq-title-wrap">
                      <h2 className="faq-title">
                        What do you charge for your services?
                      </h2>
                      <div className="faq-icon">
                        <div className="faq-icon-plus"></div>
                        <div className="faq-icon-minus"></div>
                      </div>
                    </div>
                    <div className="faq-text-wrap">
                      <p className="faq-text">
                        To begin, I’ll need a clear understanding of your goals,
                        target audience, brand guidelines (if available), and
                        any specific features or design preferences you have in
                        mind. I’ll guide you through the details during our
                        initial consultation.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="71f12e27-b803-1936-93b5-06c6f8be0a2d"
                    className="faq"
                  >
                    <div className="faq-title-wrap">
                      <h2 className="faq-title">
                        Can you work within our brand guidelines?
                      </h2>
                      <div className="faq-icon">
                        <div className="faq-icon-plus"></div>
                        <div className="faq-icon-minus"></div>
                      </div>
                    </div>
                    <div className="faq-text-wrap">
                      <p className="faq-text">
                        To begin, I’ll need a clear understanding of your goals,
                        target audience, brand guidelines (if available), and
                        any specific features or design preferences you have in
                        mind. I’ll guide you through the details during our
                        initial consultation.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="71f12e27-b803-1936-93b5-06c6f8be0a37"
                    className="faq"
                  >
                    <div className="faq-title-wrap">
                      <h2 className="faq-title">
                        Do you offer ongoing support after project completion?
                      </h2>
                      <div className="faq-icon">
                        <div className="faq-icon-plus"></div>
                        <div className="faq-icon-minus"></div>
                      </div>
                    </div>
                    <div className="faq-text-wrap">
                      <p className="faq-text">
                        To begin, I’ll need a clear understanding of your goals,
                        target audience, brand guidelines (if available), and
                        any specific features or design preferences you have in
                        mind. I’ll guide you through the details during our
                        initial consultation.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="71f12e27-b803-1936-93b5-06c6f8be0a41"
                    className="faq"
                  >
                    <div className="faq-title-wrap">
                      <h2 className="faq-title">How do we get started?</h2>
                      <div className="faq-icon">
                        <div className="faq-icon-plus"></div>
                        <div className="faq-icon-minus"></div>
                      </div>
                    </div>
                    <div className="faq-text-wrap">
                      <p className="faq-text">
                        To begin, I’ll need a clear understanding of your goals,
                        target audience, brand guidelines (if available), and
                        any specific features or design preferences you have in
                        mind. I’ll guide you through the details during our
                        initial consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="images/c-shape.svg"
              loading="lazy"
              alt="c-shape"
              className="common-shape"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
