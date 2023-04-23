import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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
const Demo = (props) => {
  const [showdangky, setshowdangky] = useState(false);

  const img1 = "http://localhost:8080";
  const { user } = props;
  return (
    <>
      {user &&
        user.length > 0 &&
        user.map((item, index) => {
          // console.log('check item aaaaa', index)
          return (
            <div key={`table',${index}`} className="status-all">
              <div className="content_status" key={item.id}>
                <div className=" container status">
                  <div className="status-title">
                    <div className="status-tilte1">
                      <img src={`${img1}${item.user.avatar}`} />
                      <h2>
                        {item.user.last_name} {item.user.first_name}
                        <br />
                        {/* <AiOutlineGlobal /><span>{item.Status_Type}</span> */}
                      </h2>
                      <div className="drop_setting">
                        <Dropdown>
                          <Dropdown.Toggle variant="link"></Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => props.handleClickBtnUpda(item)}
                            >
                              Sửa bài đăng{" "}
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => props.handleClickBtnDelete(item)}
                            >
                              Xóa
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="status__conten">
                    <h2>{item.content}</h2>
                  </div>
                  <div className="status__icon">
                    <div className="status--icon1">
                      <span>Thích</span>
                    </div>
                    <div className="status--icon1">
                      <span>Bình Luận</span>
                    </div>
                    <div className="status--icon1">
                      <span>Chia sẻ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Demo;
