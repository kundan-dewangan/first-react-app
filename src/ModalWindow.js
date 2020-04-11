
import React, { useState } from 'react'
import { render } from '@testing-library/react';
import { Modal, Button, Form } from 'react-bootstrap';
function ModalWindow(props) {
    const [show, setShow] = useState(false);

    const state={
        title:"",
        about:'',
        unit:''
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contactHandler = (props) => console.log("it's contact working click");

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" value={state.title} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Unit</Form.Label>
                            <Form.Control as="select" value={state.unit}>
                                <option>HQ</option>
                                <option>INVERT</option>
                                <option>NOIBING</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write the new post here</Form.Label>
                            <Form.Control as="textarea" rows="3"  value={state.title}/>
                        </Form.Group>
                    </Form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={props.contactClick}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalWindow
