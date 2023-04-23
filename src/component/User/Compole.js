import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getUser1 } from "../../services/apiServices";
import Button from "react-bootstrap/Button";
import { AiOutlineGlobal } from "react-icons/ai";
import Demo from "./Demo";

import Trangcanhan from "./Trangcanhan";
import Header from "../Header";
import Headertop from "../Headertop";

//

import { getUser } from "../../services/apiServices";
import {
  AiOutlineVideoCamera,
  AiFillFileImage,
  AiOutlineSmile,
} from "react-icons/ai";
import Createstatus from "../Model/Createstatus";
import { MultiStateCheckbox } from "primereact/multistatecheckbox";
import Dropdown from "react-bootstrap/Dropdown";
import ModelDelateStart from "../Model/ModelDelateStart";
import ModelUpdaStart from "../Model/ModelUpdaStart";
import ModelAddStartUser from "../Model/ModelAddStartUser";
import { useSelector } from "react-redux";
const Compole = () => {
  // const [user, setuser] = useState([])
  // const params = useParams()
  // const location = useLocation()
  // const quizId = params.id;
  // console.log(quizId)
  // console.log('check user demo', user)
  // const img1 = 'http://localhost:8080'
  // console.log(location)
  // useEffect(() => {
  //     fetch();
  // }, [quizId])

  // const fetch = async () => {
  //     let data = await getUser1(quizId);
  //     if (data && data.EC === 0) {
  //         console.log("trang cá nhân", data.content)
  //         setuser(data.content)
  //     }
  // }

  //
  const [showdelete, setshowdelete] = useState(false);
  const [showUp, setshowUp] = useState(false);
  const [showdangky, setshowdangky] = useState(false);
  const [shoModalDelete, setshoModalDelete] = useState({});

  const [shoModalUpda, setshoModalUpda] = useState({});

  const [user, setuser] = useState([]);
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;
  console.log(quizId);
  // console.log('check user âaaaaaaaaabbbbbb', user)
  const img1 = "http://localhost:8080";
  console.log(location);
  useEffect(() => {
    fetch();
  }, [quizId]);
  const fetch = async () => {
    let data = await getUser(quizId);
    if (data && data.EC === 0) {
      // console.log("get aaaaa", data.content)
      setuser(data.content);
    }
  };

  const handleClickBtnDelete = (start) => {
    setshowdelete(true);
    setshoModalDelete(start);
  };
  const handleClickBtnUpda = (start) => {
    setshowUp(true);
    setshoModalUpda(start);
  };
  const Account = useSelector((state) => state.accountThanh.Account);

  return (
    <div>
      <Headertop />
      <Trangcanhan />
      <div className="home-tile">
        <div onClick={() => setshowdangky(true)} className="home-span">
          <span>Bạn đang nghĩ gì ?</span>
        </div>
        <hr />
        <div className="home-icon">
          <span className="icon1">
            {" "}
            <AiOutlineVideoCamera />
            Video trực tiếp
          </span>
          <span className="icon2">
            <AiFillFileImage />
            Hình ảnh/Video
          </span>
          <span className="icon3">
            {" "}
            <AiOutlineSmile />
            Cảm xúc/Hoạt động
          </span>
        </div>
      </div>

      <div className="container status_user">
        <Demo
          user={user}
          handleClickBtnDelete={handleClickBtnDelete}
          handleClickBtnUpda={handleClickBtnUpda}
        />
      </div>

      <ModelDelateStart
        show={showdelete}
        setShow={setshowdelete}
        shoModalDelete={shoModalDelete}
        fetch={fetch}
      />

      <ModelUpdaStart
        show={showUp}
        setShow={setshowUp}
        shoModalUpda={shoModalUpda}
      />

      <ModelAddStartUser
        show={showdangky}
        setShow={setshowdangky}
        fetch={fetch}
      />
    </div>
  );
};

export default Compole;
