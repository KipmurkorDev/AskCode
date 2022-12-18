import React from "react";
import "./modal.css";

const Modal = ({ isOpen, closeHandler, modalContent }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__container" onClick={() => closeHandler()}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__header-close" onClick={closeHandler}>
            X
          </div>
        </div>
        <div className="modal__content">{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
