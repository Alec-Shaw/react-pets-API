import React from "react";

const Modal = ({ active, setActive }) => {

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
       
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h2>Would you like to adopt?</h2>
                  
                    <div className="buttons">
                    <button onClick={() => setActive(() => (window.location = "http://bit.ly/pet-adopt"))}>Yes</button>
                      <button onClick={() => setActive(false)}>No</button>
                  </div>
      
      </div> 
    
    </div>
  );
};
export default Modal;