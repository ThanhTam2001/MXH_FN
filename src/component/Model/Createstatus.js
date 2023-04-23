import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import '../Model/ModalAddstatus.scss'
const Createstatus = (props) => {
  const { show, setShow } = props;
  const Account = useSelector((state) => state.accountThanh.Account);
  console.log("aaaaaaaaa", Account.User_id);
  const handleClose = () => {
    setShow(false);
    setContent("");
    setUser_id(Account.User_id);
  };

  const [content, setContent] = useState("");
  const [user_id, setUser_id] = useState("");

  const handlecereatstat = async () => {
    await axios
      .post(`http://localhost:8080/api/status/v1/statuspost`, {
        user_id,
        content,
      })
      .then((res) => {
        console.log(res);
        console.log(res.message);
        console.log(res.data);
      });
    handleClose();
    toast.success("Đăng bài thành công !");

    await props.fetchListdangtin();
  };

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
                   
            <div className="add_statusid">
            <Form.Group className="mb-3 " controlId="formGridAddress2">
              <Form.Label> ID</Form.Label>
              <Form.Control
                placeholder="id"
                value={user_id}
                // onChange={(event) => setUser_id(event.target.value)}
              />
            </Form.Group>

            </div>
            
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

export default Createstatus;
