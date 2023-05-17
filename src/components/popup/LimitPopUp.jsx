import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import neuEdit from "../../assets/neuEdit.svg";
import close from "../../assets/close.svg";

import "./popup.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const LimitPopUp = ({finalLimit, setFinalLimit}) => {
  const [show, setShow] = useState(false);

  const handleChange = (e) =>{
    setFinalLimit(e.target.value);
  }

  const handleClose = () => {
    setShow(false);

  };
  const handleShow = () => setShow(true);
  

  return (
    <>
      <img src={neuEdit} className="w-5 h-5 drop-shadow"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Limit</Modal.Title>
          <img src={close} alt="close-icon" onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
          <Form>

           

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Limit</Form.Label>
              <Form.Control
                type="number"
                value={finalLimit}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-black' onClick={handleClose}>
            Save
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LimitPopUp;























// import "./modal.css";
// import { useState } from "react";
// import { GrAddCircle } from 'react-icons/gr';

// const Modal = () => {

//     const [modal, setModal] = useState(false);

//     const toggleModal = ()=>{
//         setModal(!modal);
//     }


//   return (
//     <>
    
//     <div>
//       <GrAddCircle className="add-icon" onClick={toggleModal}/>
//     </div>

//     {modal && (
//         <div className="modal">
//         <div className="overlay"></div>
//         <div className="modal-content">
//             <h2>Praise Jesus!</h2>
//             <button className="close-btn" onClick={toggleModal}>Close</button>
//             <input type="text" className="counter-heading" />
//         </div>
//     </div>
//     )}
 
//     </>
//   )
// }

// export default Modal;