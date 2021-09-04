import { ReactNode } from "react";

type CenterProps = {
  children: ReactNode | ReactNode[];
}

const Center = ({children} : CenterProps) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      {children}
    </div>
  )
}

export default Center;