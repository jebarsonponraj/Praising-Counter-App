import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import neuAdd from "../../assets/neuAdd.svg"
import close from "../../assets/close.svg";

import 'bootstrap/dist/css/bootstrap.min.css';

const PopUp = ({counter, addToDo}) => {
  const [show, setShow] = useState(false);
  const [counterText, setTextHeading] = useState("");


  const handleChange = (e) =>{
    setTextHeading(e.target.value);
  }

  const handleClose = (event) => {
    setShow(!show);
    console.log(counterText)
  };
  const handleShow = () => setShow(!show);

  const handleSaveClose = () =>{
    counterText && setShow(!show);
    counterText && addToDo(counterText, counter);
    setTextHeading(" ");
  }
  

  return (
    <>
      <img src={neuAdd} onClick={handleShow}/>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='text-black'>
          <Modal.Title>Counter List</Modal.Title>
        <img src={close} alt="close-icon" onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
          <Form>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter List Name</Form.Label>
              <Form.Control onChange={handleChange} required value={counterText}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Count Number</Form.Label>
              <Form.Control
                type="number"
                disabled
                required
                value={counter}
                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-black' onClick={handleSaveClose}>
            Save
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;






















