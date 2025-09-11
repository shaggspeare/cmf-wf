import './styles/Marquee.css';

export default function Marquee() {
  const marqueeText = "Старт курсу: 25 вересня 2025";
  
  // Repeat the text multiple times to ensure continuous scroll with no gaps
  const repeatedText = Array(20).fill(marqueeText).join(' • ');

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {repeatedText}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {repeatedText}
        </div>
      </div>
    </div>
  );
}