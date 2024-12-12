import React, { useEffect, useRef, useState } from 'react';
import './ScrollSVG.css';

interface ScrollSVGProps {
  svgPath: string;
  alt: string;
}

const ScrollSVG: React.FC<ScrollSVGProps> = ({ svgPath, alt }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log('handleScroll', containerRef.current);
      if (!containerRef.current || !svgRef.current) return;

      const scrollProgress = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calcula el progreso del scroll
      const scrollPercentage = 
        scrollProgress / (documentHeight - windowHeight);
      
      // Actualiza el trazo del SVG
      if (svgRef.current) {
        svgRef.current.style.strokeDashoffset = 
          `${pathLength - (pathLength * scrollPercentage)}px`;
      }
    };

    // Obtener la longitud del path
    if (svgRef.current) {
      const path = svgRef.current.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        setPathLength(length);
        path.style.strokeDasharray = `${length}px`;
        path.style.strokeDashoffset = `${length}px`;
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathLength]);

  return (
    <div ref={containerRef} className="scroll-svg-container">
      <img 
        src={svgPath} 
        alt={alt} 
        ref={svgRef as React.RefObject<HTMLImageElement>} 
        className="scroll-svg" 
      />
    </div>
  );
};

export default ScrollSVG;