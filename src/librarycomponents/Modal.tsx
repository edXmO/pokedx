import React from "react";

type ModalTypes = {
  children?: React.ReactNode;
  closeCallback: Function
}

const Modal = ({ children, closeCallback } : ModalTypes) => {
  return (
    <div>
      {children}
      <button
        className="absolute h-full"
        onClick={() => closeCallback(false)}
      />
    </div>
  )
}

export default Modal;