import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getUser1 } from "../../services/apiServices";
import Button from "react-bootstrap/Button";
import { Image } from "primereact/image";
import Avatar from "./Avatar";
import Modelavatar from "../Model/Modelavatar";
import Modelback from "../Model/Modeback";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Trangcanhan = () => {
  const Account = useSelector((state) => state.accountThanh.Account);
  const [user, setuser] = useState([]);
  const [avatar1, setavatar1] = useState(false);
  const [avatar2, setavatar2] = useState(false);
  const params = useParams();
  const location = useLocation();
  const quizId = params.id;
  console.log(quizId);
  // console.log('check user demo', user)
  const img1 = "http://localhost:8080";
  console.log(location);
  useEffect(() => {
    fetch();
  }, [quizId]);

  const fetch = async () => {
    let data = await getUser1(quizId);
    if (data && data.EC === 0) {
      // console.log("trang cá nhân", data.content)
      setuser(data.content);
    }
  };

  return (
    <div>
       
      <div className="container User ">
        <div>
          <Avatar user={user} />
          <Modelavatar show={avatar1} setShow={setavatar1} fetch={fetch} />

          <Modelback show={avatar2} setShow={setavatar2} fetch={fetch} />

          <div>
            <div className="bt-bg">
              <Button onClick={() => setavatar2(true)} variant="light">
                Chỉnh sửa ảnh bìa
              </Button>
            </div>
            <div className="bt-bg1">
              <Button onClick={() => setavatar1(true)} variant="primary">
                Chỉnh sửa ảnh đại diện
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="produce">
        <div className="pic_left">
          <div className="pic">
            <h3>Ảnh</h3>
            <div className="pic_me">
              <Image
                src={`${img1}${user.avatar}`}
                alt="Image"
                width="250"
                preview
              />
            </div>
          </div>
        </div>

        <div className="pic_left1">
          <div className="friend">
            <h3>Bạn bè</h3>
            <div className="pic_friends">
              <Image
                src={`${img1}${user.avatar}`}
                alt="Image"
                width="250"
                preview
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="my">
        <Row className="pic_left">
          <div className="pic">
            <h3>Ảnh</h3>
            <div className="pic_me">
              <Image
                src={`${img1}${user.avatar}`}
                alt="Image"
                width="250"
                preview
              />
            </div>
          </div>
        </Row>

        <Row className=" pic_left1 ">
          <div className="friend">
            <h3>Bạn bè</h3>
            <div className="pic_friends">
              <Image 
                src={`${img1}${user.avatar}`}
                alt="Image"
                width="250"
                preview
              />
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Trangcanhan;
