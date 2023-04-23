import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Feeling, LiveVideo, Photo } from "../../svg";
import "./Group.scss";

import Headertop from "../Headertop";
const Getgroup = () => {
  const Account = useSelector((state) => state.accountThanh.Account);
  const navigate = useNavigate();

  const img1 = "http://localhost:8080";
  return (
    <>
    <div className="head_gr">
    <Headertop />
    </div>
    
      <Container className="group_head">
        <div className="group_top">
          <img className="bg_img" src={`${img1}${Account.Background}`} />
        </div>
        

        {/* <div className=" group_name">
        <div className="name_left">
          <h1>Nhóm </h1>
          <p>Bạn có thật sự thích nhóm này không ?</p>
        </div>

        <div className="name_left">
          <button>Mời</button>
        </div>
      </div> */}

        <Container className="group_name">
          <Row>
            <Col sm={8}>
              <h3>Tên nhóm</h3>
            </Col>
            <Col sm={4}>
              <Button variant="success">Mời</Button>
            </Col>
          </Row>
        </Container>

      </Container>

      {/* <div className="container">
        <h1>Body</h1>
      </div> */}

      <Container className="Post">
        <Row>
          <Col xs={9}>
            <div className="createPost">
              <div className="createPost_header">
                <img src={`${img1}${Account.Avater}`} />
                <div className="open_post hover2">
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
          </Col>
          <Col xs={3}>
            <h4>Giới thiệu nhóm</h4>
            <div className="pr_group">
              <p>Vào đây các bạn sẽ được giải đáp tất cả các thắc mắc</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 8 }}>Chủ đề nhóm</Col>
        </Row>
      </Container>
    </>
  );
};

export default Getgroup;
