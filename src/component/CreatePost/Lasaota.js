import { useEffect, useState } from "react";
import { Feeling, LiveVideo, Photo } from "../../svg";
import "./style.css";
import { useSelector } from "react-redux";
import { getstatus } from "../../services/apiServices";
import Composeuser from "../Admin/Composeuser";
import Createstatus from "../Model/Createstatus";
import Getstatus from "../Home/Getstatus";

const Lasaota = () => {
  const Account = useSelector((state) => state.accountThanh.Account);
  const img1 = "http://localhost:8080";

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
  return (
    <div className="body_post">
       <div className="createPost">
      <div className="createPost_header">
        <img src={`${img1}${Account.Avater}`} />
        <div onClick={() => setshowstatus(true)} className="open_post hover2">
          What's on your mind, {Account?.First_Name}?
        </div>
      </div>

      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <LiveVideo color="#f3425f" />
          Trực tiếp
        </div>
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Hình ảnh/Video
        </div>
        <div className="createPost_icon hover1">
          <Feeling color="#f7b928" />
          Cảm xúc/Hoạt động
        </div>
      </div>
      
      
    </div>
    
    <Createstatus show={showstatus} setShow={setshowstatus} fetchListdangtin={fetchListdangtin} />
    <Getstatus listdangtin={listdangtin}/>
    </div>
   
  );
};

export default Lasaota;
