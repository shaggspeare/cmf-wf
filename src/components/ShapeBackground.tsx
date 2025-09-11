import './styles/ShapeBackground.css';

interface ShapeBackgroundProps {
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'hero' | 'center' | 'default';
  className?: string;
}

export default function ShapeBackground({ 
  imageSrc = "images/c-shape-2.svg",
  imageAlt = "decorative-shape",
  variant = 'default',
  className = ""
}: ShapeBackgroundProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'hero':
        return 'hero-variant';
      case 'center':
        return 'center-variant';
      default:
        return '';
    }
  };

  const getShapeClasses = () => {
    switch (variant) {
      case 'hero':
        return 'hero-shape';
      case 'center':
        return 'center-shape';
      default:
        return '';
    }
  };

  return (
    <div className={`shape-background-wrap ${getVariantClasses()} ${className}`}>
      <div className={`common-shape-wrap shape-background ${getShapeClasses()}`}>
        <img
          src={imageSrc}
          loading="lazy"
          alt={imageAlt}
          className="common-shape"
        />
      </div>
    </div>
  );
}