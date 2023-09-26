import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddChannelModal = ({ show, onHide, onSubmit }) => {
  const [channelName, setChannelName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(channelName);
    setChannelName('');
    console.log('Submitted');
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="channelName">
            <Form.Control
              type="text"
              placeholder=""
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onHide}>
              Отменить
            </Button>
            <Button variant="primary" type="submit">
              Отправить
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddChannelModal;
