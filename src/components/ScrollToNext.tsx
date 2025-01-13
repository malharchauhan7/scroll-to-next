import * as React  from "react";
import  { useState } from "react";
// Define the props interface
interface ScrollToNextProps {
  sections: React.RefObject<HTMLElement>[];
  style?:React.CSSProperties
}

const ScrollToNext: React.FC<ScrollToNextProps> = ({ sections , style}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);

  // Scroll to the next section or back to the first section
  const scrollToNextSection = () => {
    let nextSectionIndex = currentSectionIndex + 1;

    // If it's the last section, loop back to the first
    if (nextSectionIndex >= sections.length) {
      nextSectionIndex = 0;
    }

    const nextSection = sections[nextSectionIndex];
    if (nextSection && nextSection.current) {
      nextSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Move to the next section or back to the first section
      setCurrentSectionIndex(nextSectionIndex); 
    }
  };

  return (
    <button
      onClick={scrollToNextSection}
      style={{
        position: "fixed",
          bottom: "20px",
          right: "20px",
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
