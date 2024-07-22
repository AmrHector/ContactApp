import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewContact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = {
			name: name,
			email: email,
			address: address,
			phone: phone
		};
		actions.addContact(newContact);
		console.log("Contact added", newContact);
	};
  return (
    <Form>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="name"onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="adress"onChange={(e) => setAddress(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="phone" onChange={(e) => setPhone(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
}

export default NewContact;