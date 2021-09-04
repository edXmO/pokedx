import { ReactNode, RefObject } from "react";

const SliderContainer = ({ children, ref } :  { children : ReactNode[], ref: RefObject<HTMLDivElement> }) => {

  return (
    <div className="flex flex-row w-full overflow-x: auto"> 
      {children}
    </div>
  )
}

export default SliderContainer;