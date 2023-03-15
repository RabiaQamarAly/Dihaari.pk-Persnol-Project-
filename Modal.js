import React, { useState } from "react";


const Modal= () => {
  const [showModal, setShowModal] = useState(false);

  const MyModal = () =>{
    return(
      <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
      <h2>Form</h2>
      <p>Hello EveryOne</p>
      <button className="btn-modal" onClick={() => setShowModal (false)}>Close</button>
      </div>
      </>
    )
  }
  return<>
  <button className="btn-modal" onClick={() => setShowModal(true)}>Get This Service</button>
  {showModal && <MyModal/>}
  </>
}



export default Modal; 