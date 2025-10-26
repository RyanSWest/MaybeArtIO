import React, { useState } from "react";
import { Toast, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DisclaimerToast({ showInitially = true, onClose }) {
  const [show, setShow] = useState(showInitially);

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "90%",
        maxWidth: "600px",
      }}
    >
      <Toast
        show={true}
        onClose={handleClose}
        autohide
        delay={10000}
        style={{
          backgroundColor: "grey",
          color: "white",
          border: "1px solid #999",
        }}
      >
        <Toast.Header closeButton>
          <strong className="me-auto" variant='light'>Disclaimer</strong>
        </Toast.Header>
        <Toast.Body>
          By registering or uploading content, you agree to our{" "}
          <Link to="/terms" style={{ color: 'white', textDecoration: "underline" }}>
            Terms of Service
          </Link>.
        </Toast.Body>

        <div style={{ padding: '0.5rem', textAlign: 'right' }}>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            I Understand
          </Button>
        </div>
      </Toast>
    </div>
  );
}
