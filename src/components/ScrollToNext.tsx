import * as React  from "react";
import  { useState } from "react";

interface ScrollToNextProps {
  sections: React.RefObject<HTMLElement>[];
  style?:React.CSSProperties,
  x ?: React.CSSProperties,
  y ?: React.CSSProperties
}

const ScrollToNext: React.FC<ScrollToNextProps> = ({ sections , style, x="20px", y="20px"}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  
  const scrollToNextSection = () => {
    let nextSectionIndex = currentSectionIndex + 1;

   
    if (nextSectionIndex >= sections.length) {
      nextSectionIndex = 0;
    }

    const nextSection = sections[nextSectionIndex];
    if (nextSection && nextSection.current) {
      nextSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    
      setCurrentSectionIndex(nextSectionIndex); 
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      style={{
        position: "fixed",
          bottom: y,
          right: x,
          width: "60px",
          height: "60px",
          backgroundColor: "black",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          zIndex: 9999,
        ...style
      }}
    >
      ➤
    </button>
  );
};

export default ScrollToNext;
