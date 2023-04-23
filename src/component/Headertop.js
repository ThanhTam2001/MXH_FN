import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown';
import ModelDangNhap from './Model/ModelDangNhap';
import { useEffect, useState } from 'react';
import ModelDangKy from './Model/ModalDangKy';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiFillBell, AiFillMessage, AiOutlineSearch, AiOutlineVideoCamera, AiFillFileImage, AiOutlineSmile } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom';
import { getstatus } from '../services/apiServices';
import Getstatus from './Home/Getstatus';
import Createstatus from './Model/Createstatus';

import { logout } from '../services/apiServices';

const Headertop = () =>{
    const nomal = useSelector(state => state.accountThanh.nomal);
  const Account = useSelector(state => state.accountThanh.Account)
  const dispatch = useDispatch();
  const img1 = 'http://localhost:8080'
  const navigate = useNavigate();
  const [showdangnhap, setshowdangnhap] = useState(false);
  const [showdangky, setshowdangky] = useState(false);


  const [showstatus, setshowstatus] = useState(false)

  const [listdangtin, setlistdangtin] = useState([]);

  useEffect(() => {
    fetchListdangtin();
  }, [])

  const fetchListdangtin = async () => {
    let data = await getstatus();

    if (data && data.EC === 0) {
      // console.log(data)
      setlistdangtin(data.content)
    }

  }

  console.log("check account",Account)

  const handleLoOut =async () =>{
       let data = await logout(Account.Email)

       if (data && data.EC === 0) {

        
        dispatch({
          type: 'FETCH_USER_LOGOUT_SUCCESS',
          payload: data
        })
  
      }
  }

    return (
       
        <div className='shadow p-3 mb-5 bg-white rounded header_top'>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7TeUniRfG9ePwNo70fk_m5ha4Ahf6e93yDWtfOrfuUcqHP7PWlHMRUl_f4df883STvY&usqp=CAU'></img></Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Tìm kiếm người dùng"
                className="me-2"
                aria-label="Search"
              />
              <Button className='btn_search' variant="outline-success"><AiOutlineSearch /></Button>
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              {
                nomal === false ?
                  <>

                    <Nav className='btn_signin'>

                      <Button className='btn_dn' onClick={() => setshowdangnhap(true)} variant="primary">Đăng nhập</Button>
                      <ModelDangNhap show={showdangnhap} setShow={setshowdangnhap}
                      />
                      <Button variant="warning" onClick={() => setshowdangky(true)}>Đăng ký</Button>
                      <ModelDangKy show={showdangky} setShow={setshowdangky} />
                    </Nav>
                  </> :
                  <div className='tt'>
                    <div className='icon'>
                      <span className='icon_item'>
                        <AiFillBell />

                      </span>
                      <span className='icon_item'><AiFillMessage /></span>
                    </div>

                    <NavDropdown title="" >

                      <NavDropdown.Item eventKey="4.1"> <img src={`${img1}${Account.Avater}`} /> <span> {Account.Last_Name}</span></NavDropdown.Item>
                      {/* <Link to='user' className='nav-link'> Trang cá nhân </Link>
                      <Link to='profiles' className='nav-link'> Profile</Link>
                      <NavDropdown.Item eventKey="4.2">Thông tin cá nhân</NavDropdown.Item> */}
                      <NavDropdown.Item eventKey="4.3" onClick={() => navigate(`/${Account.User_id}`)} >
                      {/* , { state: { user: Account } } */}
                        Trang cá nhân</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={() => handleLoOut()}>Đăng suất</NavDropdown.Item>

                    </NavDropdown>
                  </div>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
}

export default Headertop