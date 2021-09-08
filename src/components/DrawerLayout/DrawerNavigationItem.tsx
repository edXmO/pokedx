import React from "react";
import { ReactNode } from "react";
import Label from "../../librarycomponents/Label";

// Props de selected para diferenciar los estilos

type DrawerNavigationProps ={ 
  label?: string;
  onClick: Function;
  children: ReactNode;
  style?: Object
}

const DrawerNavigationItem = ({ label, onClick, children, style = ''} : DrawerNavigationProps) => {
  return (
    <button 
      onClick={() => onClick()}
      className={`w-full h-20 bg-white hover:bg-gray-200 border-b-2 border-solid border-gray-100 flex items-center justify-center ${style} focus: outline-none`}>
      {children}
      <Label>{label}</Label>
    </button>
  )
}

export default DrawerNavigationItem;