import React, { ReactNode } from 'react'

type LabelTypes = {
  children: string | number | undefined | ReactNode;
  className?: string; 
}

const Label = ({ children, className } : LabelTypes) => {
  return (
    <p className={className}>
      {children}
    </p>
  )
}


export default Label;