import axios from "axios";

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import _ from "lodash";
const ModelUpdaStart = (props) => {
  const { show, setShow, shoModalUpda } = props;

  const handleClose = () => {
    setShow(false);
  };

  const [content, setContent] = useState("");
  const [user_id, setUser_id] = useState("");

  useEffect(() => {
    console.log("Run esdreawe", shoModalUpda);

    if (!_.isEmpty(shoModalUpda)) {
      setContent(shoModalUpda.content);
      setUser_id(shoModalUpda.user_id);
    }
  }, [props.shoModalUpda]);

  const handlecereatstat = async () => {};

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label> ID</Form.Label>
              <Form.Control
                placeholder="id"
                value={user_id}
                // onChange={(event) => setUser_id(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                value={content}
                as="textarea"
                rows={3}
                onChange={(event) => setContent(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handlecereatstat}>
            Đăng bài
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelUpdaStart;
