const Creabackground = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ĐĂNG NHẬP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group  className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tên tài khoản</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={Account}
                onChange={(event) => setAccount(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
              />
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
    </div>
  );
};
