import { createRef, ReactNode } from "react";
import ScrollIndicator from "./ScrollIndicator";
import SliderContainer from "./SliderContainer";

const Slider = ({ children, count } : { children: ReactNode[], count: number}) => {

  const target = createRef<HTMLDivElement>();

  return (
    <div className="flex flex-col items-center justify-center h-32 w-48 bg-gray-500">
      <SliderContainer ref={target}>
        {children}
      </SliderContainer>
      <ScrollIndicator count={count} target={target} />
    </div>
    )
}

export default Slider;