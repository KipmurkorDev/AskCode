
import React from "react";
import "./modal.css";

const ReactModal = ({ isOpen, closeHandler, modalContent }) => {
  if (!isOpen) return null;

  return (
      <div className="modal__container" onClick={() =>  closeHandler()}>
        <div className="modal__box" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <div className="modal__header-title">Hello</div>
            <div className="modal__header-close" onClick={closeHandler}>X</div>
          </div>
          <div className="modal__content">
            {modalContent}
          </div>
          <div className="modal__footer">
            <button className="modal__footer-button modal__footer-button--close" onClick={closeHandler}>Close</button>
            <button className="modal__footer-button modal__footer-button--accept">Accept</button>
          </div>
        </div>
      </div>
  )
}

export default ReactModal
