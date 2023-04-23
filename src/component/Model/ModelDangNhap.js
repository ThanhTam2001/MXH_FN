import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { postLogin } from '../../services/apiServices';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Password } from 'primereact/password';


const ModelDangNhap = (props) => {
  const { show, setShow } = props

  const handleClose = () => {
    setShow(false)
    setAccount("")
    setPassword("")
  };


  const [account, setAccount] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();



  const handleLogin = async () => {
    let data = await postLogin(account, password);
    console.log(data)
    if (data && data.EC === 0) {

      handleClose()
      dispatch({
        type: 'FETCH_USER_LOGIN_SUCCESS',
        payload: data
      })

    }
    toast.success("Đăng nhập thành công !")
  }
  const handelmat = () => {
    alert("sdad")
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ĐĂNG NHẬP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tài khoản</Form.Label>
              <Form.Control type="email"  value={account} onChange={(event) => setAccount(event.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPass">
              <Form.Label>Mật khẩu</Form.Label>
              <Password value={password} onChange={(event) => setPassword(event.target.value)} feedback={false} toggleMask />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleLogin()}>
            Đăng nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )


}
export default ModelDangNhap;