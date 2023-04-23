import { Container } from "react-bootstrap";

import { Overlay } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
const User = () => {
  const Account = useSelector((state) => state.accountThanh.Account);
  const navigate = useNavigate();

  const img1 = "http://localhost:8080";
  return (
    <div className="container User ">
      <div className="bg_user">
        <img className="bg_img" src={`${img1}${Account.Background}`} />
        <div className="bt-bg">
          <Button variant="light">Chỉnh sửa ảnh bìa</Button>
        </div>
      </div>
      <div>
        <div className="img_acatar">
          <img className="bg_img" src={`${img1}${Account.Avater}`} />
          <span>
            {Account.First_Name} {Account.Last_Name}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default User;
