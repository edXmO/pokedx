import { ReactNode, Ref, useEffect, useState } from "react";
import Dot from "./Dot";

const ScrollIndicator = ({ target, count } : {target: any, count: number}) => {

  // Target es una referencia al contenedor principal en Slider.tsx
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  function renderDots() {
    const selectedDotValue = (scrollProgress * count) / 100;
    return Array.from(Array(count), (_, i) => i).map((index : number) => <Dot key={index} active={selectedDotValue >= index && selectedDotValue <= index + 1} />)
  }
  
  const scrollListener = () => {
    if(!target.current) return;

    const element = target.current;
    const windowScroll = element.scrollLeft;
    const totalWidth = element.scrollWidth - element.clientWidth;
    if(windowScroll === 0){
      return setScrollProgress(0);
    }

    if(windowScroll < totalWidth) return setScrollProgress(100);

    setScrollProgress((windowScroll / totalWidth) * 100);
  }

  // useEffect(() => {
  //   target.current.addEventListener('touchmove', scrollListener);
  //   return () => target.current && target.current.removeEventListener('touchmove', scrollListener); 
  // });

  
  return (
    <div className="flex flex-row w-min">
      {renderDots()}
    </div>
  )
}

export default ScrollIndicator;