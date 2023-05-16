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
    counterText&& setShow(false);
    counterText && addToDo(counterText, counter);
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
              <Form.Control onChange={handleChange} required value={counterText}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
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
          <Button variant="secondary" onClick={handleClose}>
            Save
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;






















