import React from 'react';
import ReactDOM from 'react-dom';
import UserRegistratoin from './UserRegistration';
import { Modal, Button } from "react-bootstrap";

class LoginModel extends React.Component {
    state = {
        isOpen: false
      };
    
      openModal = () => this.setState({ isOpen: true,registration:true });
      closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <>
            <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "-10vh" }}
      >
        <Button variant="primary" onClick={this.openModal}>
          Sign In
        </Button>
      </div>
          <Modal show={this.state.isOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>User Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body><UserRegistratoin color="signin"/></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
          </>
        );
      }
}

export default LoginModel;