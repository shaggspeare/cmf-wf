import './styles/Reviews.css';

export default function Reviews() {
  return (
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
                  "Working with Philips was game-changer. His attention to
                  detail and creativity took our project to a new level. The
                  final product was beyond our expectations, and the
                  process."
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
                  "I can&#x27;t recommend Philips enough. He turned our
                  vague ideas into a cohesive, beautiful design that
                  perfectly captured our brand. His ability understand
                  vision was impressive."
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
  );
}