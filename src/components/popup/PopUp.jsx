import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { GrAddCircle } from 'react-icons/gr';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopUp = ({counter, addToDo}) => {
  const [show, setShow] = useState(false);
  const [counterText, setTextHeading] = useState("");


  const handleChange = (e) =>{
    setTextHeading(e.target.value);
  }

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
    addToDo(counterText, counter);
    console.log(counterText)
    setTextHeading("")
  };
  const handleShow = () => setShow(true);
  

  return (
    <>
      <GrAddCircle className="add-icon"  onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Counter List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter List Name</Form.Label>
              <Form.Control onChange={handleChange} value={counterText}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="number"
                disabled
                value={counter}
                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Save
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;























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