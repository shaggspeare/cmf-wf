export default function Navigation() {
  return (
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
                  src="images/cmf/logo.png"
                  alt="logo"
                  className="logo"
                />
              </a>
            </div>
            {/*<div className="nav-middle">*/}
            {/*  <div className="nav-menu">*/}
            {/*    <a*/}
            {/*      href="/public"*/}
            {/*      aria-current="page"*/}
            {/*      className="nav-link w--current"*/}
            {/*    >*/}
            {/*      Home*/}
            {/*    </a>*/}
            {/*    <a href="/about" className="nav-link">*/}
            {/*      About Me*/}
            {/*    </a>*/}
            {/*    <a href="/services" className="nav-link">*/}
            {/*      Services*/}
            {/*    </a>*/}
            {/*    <a href="/src/app/projectsprojects" className="nav-link">*/}
            {/*      Projects*/}
            {/*    </a>*/}
            {/*    <div*/}
            {/*      data-delay="0"*/}
            {/*      data-hover="true"*/}
            {/*      className="nav-dropdown w-dropdown"*/}
            {/*    >*/}
            {/*      <div className="nav-dropdown-toggle w-dropdown-toggle">*/}
            {/*        <div>Pages</div>*/}
            {/*        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>*/}
            {/*      </div>*/}
            {/*      <nav className="nav-dropdown-list w-dropdown-list">*/}
            {/*        <div className="nav-dropdown-inner">*/}
            {/*          <a*/}
            {/*            href="/shop"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            Shop*/}
            {/*          </a>*/}
            {/*          <a*/}
            {/*            href="https://mphilips.webflow.io/product/dashboard-ui-design-kit"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            Shop Single*/}
            {/*          </a>*/}
            {/*          <a*/}
            {/*            href="/blogs/how-to-balance-creativity-and-functionality-in-web-design"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            Blog Single*/}
            {/*          </a>*/}
            {/*          <a*/}
            {/*            href="/src/app/template-info/style-guide"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            Style guide*/}
            {/*          </a>*/}
            {/*          <a*/}
            {/*            href="/src/app/template-info/licenses"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            Licenses*/}
            {/*          </a>*/}
            {/*          <a*/}
            {/*            href="/src/app/template-info/changelog"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            Changelog*/}
            {/*          </a>*/}
            {/*          <a*/}
            {/*            href="/404"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            404 Page*/}
            {/*          </a>*/}
            {/*          <a*/}
            {/*            href="/401"*/}
            {/*            className="nav-dropdown-link w-dropdown-link"*/}
            {/*          >*/}
            {/*            Password Protected*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*      </nav>*/}
            {/*    </div>*/}
            {/*    <div className="show-mobile">*/}
            {/*      <a href="#" className="primary-btn w-inline-block">*/}
            {/*        <div className="btn-inner">*/}
            {/*          <div>Contact</div>*/}
            {/*          <div className="btn-icon-wrap">*/}
            {/*            <div className="btn-icon w-embed">*/}
            {/*              <svg*/}
            {/*                width=" 100%"*/}
            {/*                height=" 100%"*/}
            {/*                viewBox="0 0 14 14"*/}
            {/*                fill="none"*/}
            {/*                xmlns="http://www.w3.org/2000/svg"*/}
            {/*              >*/}
            {/*                <path*/}
            {/*                  d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"*/}
            {/*                  fill="currentColor"*/}
            {/*                />*/}
            {/*              </svg>*/}
            {/*            </div>*/}
            {/*            <div className="btn-icon w-embed">*/}
            {/*              <svg*/}
            {/*                width=" 100%"*/}
            {/*                height=" 100%"*/}
            {/*                viewBox="0 0 14 14"*/}
            {/*                fill="none"*/}
            {/*                xmlns="http://www.w3.org/2000/svg"*/}
            {/*              >*/}
            {/*                <path*/}
            {/*                  d="M10.4767 6.1664L6.00668 1.6964L7.18501 0.518066L13.6667 6.99973L7.18501 13.4814L6.00668 12.3031L10.4767 7.83307H0.333344V6.1664H10.4767Z"*/}
            {/*                  fill="currentColor"*/}
            {/*                />*/}
            {/*              </svg>*/}
            {/*            </div>*/}
            {/*          </div>*/}
            {/*        </div>*/}
            {/*        <div className="btn-shape"></div>*/}
            {/*      </a>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="nav-right">
              <div className="hide-mobile">
                <a
                  href="#contact"
                  className="primary-btn-dark w-inline-block"
                >
                  <div className="btn-inner">
                    <div>Записатись</div>
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
              {/*<div className="nav-open">*/}
              {/*  <div className="nav-bar _1"></div>*/}
              {/*  <div className="nav-bar _2"></div>*/}
              {/*  <div className="nav-bar _3"></div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}