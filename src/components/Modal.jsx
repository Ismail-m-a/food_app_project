// Modal.js

//Öppnar för att visa detalj maträtter

const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={close}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
          <button className="close-btn" onClick={close}>Close</button>
          
        </div>
      </div>
      
    );
  };
  
  export default Modal;
  