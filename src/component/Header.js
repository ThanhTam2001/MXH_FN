import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";
import ModelDangNhap from "./Model/ModelDangNhap";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  AiFillBell,
  AiFillMessage,
  AiOutlineSearch,
  AiOutlineVideoCamera,
  AiFillFileImage,
  AiOutlineSmile,
} from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { getstatus } from "../services/apiServices";
import Getstatus from "./Home/Getstatus";
import Createstatus from "./Model/Createstatus";

import Headertop from "./Headertop";
import Left_Home from "./Home/Left_Home/Left_Home";
import Right_Home from "./Home/Right_Home/Right_Home";

import Lasaota from "./CreatePost/Lasaota";
import Trangcanhan from "./User/Trangcanhan";
const Header = () => {
  const nomal = useSelector((state) => state.accountThanh.nomal);
  const Account = useSelector((state) => state.accountThanh.Account);
  const dispatch = useDispatch();
  const img1 = "http://localhost:8080";
  const navigate = useNavigate();
  const [showdangnhap, setshowdangnhap] = useState(false);
  const [showdangky, setshowdangky] = useState(false);

  const [showstatus, setshowstatus] = useState(false);

  const [listdangtin, setlistdangtin] = useState([]);

  useEffect(() => {
    fetchListdangtin();
  }, []);

  const fetchListdangtin = async () => {
    let data = await getstatus();

    if (data && data.EC === 0) {
      // console.log(data)
      setlistdangtin(data.content);
    }
  };

  console.log("check account", Account);

  return (
    <div>
      
      <Headertop />
      <Left_Home></Left_Home>
      <div className="container home">
        {/* <div className='home-tile'>
          <div onClick={() => setshowstatus(true)} className='home-span'>
            <span  >Bạn dang nghĩ gì ?</span>
          </div>
          <hr />
          <div className='home-icon'>
            <span className='icon1'> <AiOutlineVideoCamera />Video trực tiếp</span>
            <span className='icon2'><AiFillFileImage />Ảnh/Video</span>
            <span className='icon3'> <AiOutlineSmile />Cảm súc/hoạt động</span>
          </div>
        </div> */}
        {/* <Getstatus listdangtin={listdangtin} />

         <Createstatus
          show={showstatus} setShow={setshowstatus}
          fetchListdangtin={fetchListdangtin}
         /> */}
        
        <Lasaota />
        
      </div>

      <Right_Home></Right_Home>
      <Getstatus />
    </div>
  );
};
export default Header;
