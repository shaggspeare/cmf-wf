import './styles/ImageTextSection.css';

interface ImageTextSectionProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageOnRight?: boolean;
  className?: string;
}

export default function ImageTextSection({ 
  title, 
  text, 
  imageSrc, 
  imageAlt, 
  imageOnRight = false,
  className = ""
}: ImageTextSectionProps) {
  return (
    <div className={`image-text-section ${className}`}>
      <div className="section-spacing">
        <div className="container">
          <div className={`image-text-layout ${imageOnRight ? 'image-right' : 'image-left'}`}>
            <div className="image-text-content">
              <div className="image-text-title-wrap">
                <h2 className="image-text-title">{title}</h2>
              </div>
              <div className="image-text-text-wrap">
                <p className="image-text-text">{text}</p>
              </div>
            </div>
            <div className="image-text-image-wrap">
              <img
                src={imageSrc}
                loading="lazy"
                alt={imageAlt}
                className="image-text-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}