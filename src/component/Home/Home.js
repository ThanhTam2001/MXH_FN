import Getstatus from "./Getstatus";
import {
  AiOutlineVideoCamera,
  AiFillFileImage,
  AiOutlineSmile,
} from "react-icons/ai";
import Createstatus from "../Model/Createstatus";
import { useState, useEffect } from "react";
import { getstatus } from "../../services/apiServices";
const Home = () => {
  const [showstatus, setshowstatus] = useState(false);

  const [listdangtin, setlistdangtin] = useState([]);

  useEffect(() => {
    fetchListdangtin();
  }, []);

  const fetchListdangtin = async () => {
    let data = await getstatus();

    if (data && data.EC === 0) {
      console.log(data);
      setlistdangtin(data.content);
    }
  };
  return (
    <div className=" home">
      <div className="home-tile">
        <div onClick={() => setshowstatus(true)} className="home-span">
          <span>Bạn dang nghĩ gì ?</span>
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
            Ảnh/Video
          </span>
          <span className="icon3">
            {" "}
            <AiOutlineSmile />
            Cảm súc/hoạt động
          </span>
        </div>
      </div>
      <Getstatus listdangtin={listdangtin} />
      <Createstatus
        show={showstatus}
        setShow={setshowstatus}
        fetchListdangtin={fetchListdangtin}
      />
    </div>
  );
};

export default Home;
