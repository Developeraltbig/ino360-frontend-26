import React, { useState } from "react";
import "../../assets/css/login.css";
import axios from "axios";
import { Modal, Button, FloatingLabel, Form } from 'react-bootstrap';

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/register", { name, email, password });
      alert("User registered successfully!");
      window.location.href = "/homeTwo"; // Redirect after registration
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred, please try again later.");
      }
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      setLoginErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        email: loginEmail,
        password: loginPassword,
      });

      alert("Login successful!");
      window.location.href = "/homeTwo"; // Redirect after successful login
    } catch (error) {
      if (error.response) {
        setLoginErrorMessage(error.response.data.message);
      } else {
        setLoginErrorMessage("An error occurred, please try again later.");
      }
    }
  };

  return (
    <>
      <Form className="login-form-1" onSubmit={handleRegisterSubmit}>
        <h3 className="login-heading text-left">Create new Account</h3>
        <a className="div-p1 text-left" onClick={() => setModalShow(true)}>
          <span style={{ color: "#000" }}>Already Registered? Log in </span>
          <span style={{ color: "#44B9FF", borderBottom: "1px solid #44B9FF" }}>here</span>
        </a>

        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input
            type="text"
            className="form-control form-input-stl-1"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input
            type="text"
            className="form-control form-input-stl-1"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <input
            type="password"
            className="form-control form-input-stl-1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <a className="div-p" href="#">Forgot your password?</a>

        <div className="text-center btn-stl-1">
          <Button className="btn-stl" variant="primary" type="submit">Sign Up</Button>
        </div>
      </Form>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
        handleLoginSubmit={handleLoginSubmit}
        loginErrorMessage={loginErrorMessage}
      />
    </>
  );
}

// Login Modal Component
export function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.loginErrorMessage && (
          <div className="alert alert-danger" role="alert">{props.loginErrorMessage}</div>
        )}

        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={props.loginEmail}
            onChange={(e) => props.setLoginEmail(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={props.loginPassword}
            onChange={(e) => props.setLoginPassword(e.target.value)}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="primary" onClick={props.handleLoginSubmit}>Login</Button>
      </Modal.Footer>
    </Modal>
  );
}
