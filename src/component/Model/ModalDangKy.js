import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { Loginsinup, postLogin } from "../../services/apiServices";

import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { Calendar } from "primereact/calendar";
//icons
// import "primeicons/primeicons.css";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { compose } from "redux";
const ModelDangKy = (props) => {
  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );

  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setaccount("");
    setpassword("");
    setfirst_name("");
    setlast_name("");
    setdob("");
    setemail("");
    setemail("");
  };
  const [date, setDate] = useState(null);

  const [account, setaccount] = useState("");
  const [password, setpassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [dob, setdob] = useState("");
  const [email, setemail] = useState("");
  const handledangky = async () => {
    // await axios.post(`http://localhost:8080/api/login/v1/signup`, { account, password, first_name, last_name, dob, email })
    //   .then(res => {
    //     console.log(res);
    //     // console.log(res.message)
    //     // console.log(res.data);
    //   });

    //  handleClose();

    // const data = new FormData();
    // data.append('account', account);
    // data.append('password', password)
    // data.append('first_name', first_name);
    // data.append('last_name', last_name)
    // data.append('dob', dob);
    // data.append('email', email)

    let res = await Loginsinup(
      account,
      password,
      first_name,
      last_name,
      dob,
      email
    );
    console.log("Check res:", res);
    handleClose()
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ĐĂNG KÝ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-4">
              <Form.Group as={Col}>
                <Form.Label>Tài khoản</Form.Label>

                <InputText
                  keyfilter="text"
                  placeholder="Tài khoản"
                  value={account}
                  onChange={(event) => setaccount(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                {/* {<Form.Control type="password" placeholder="Password"
                  value={password}
                  onChange={(event) => setpassword(event.target.value)}
                /> } */}
                <Form.Label>Mật khẩu</Form.Label>

                <Password
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  header={header}
                  footer={footer}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <InputText
                  keyfilter="text"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(event) => setfirst_name(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <InputText
                  keyfilter="text"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={(event) => setlast_name(event.target.value)}
                />
              </Form.Group>

              <Form.Label>Ngày sinh</Form.Label>

              <Calendar
                down
                arrow
                value={dob}
                onChange={(e) => setdob(e.target.value)}
                showIcon
              />
            </Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setemail(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handledangky}>
            Đăng ký
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModelDangKy;
