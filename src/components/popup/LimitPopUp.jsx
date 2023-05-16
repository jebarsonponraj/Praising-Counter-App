import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TbEdit } from "react-icons/tb";

import "./popup.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const LimitPopUp = ({finalLimit, setFinalLimit}) => {
  const [show, setShow] = useState(false);
//   const [editLimit, setEditLimit] = useState("");


  const handleChange = (e) =>{
    setFinalLimit(e.target.value);
  }

  const handleClose = () => {
    setShow(false);
    // addToDo(counterText, counter);
    // console.log(counterText)
    // setTextHeading("")
  };
  const handleShow = () => setShow(true);
  

  return (
    <>
      <TbEdit className="add-icon edit"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Limit</Modal.Title>
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