import LeftLink from "./LeftLink";
import { useSelector } from 'react-redux';
import { left } from "./home";
import { ArrowDown1 } from "../../../svg";
import { useState } from "react";
import Shortcut from "./Shortcut";
import { Link } from "react-router-dom";
import Trangcanhan from "../../User/Trangcanhan";
const Left_Home = () => {
    const [visible, setVisible] = useState(false);
    const Account = useSelector(state => state.accountThanh.Account)
    const img1 = 'http://localhost:8080'
    return (
        <div className="left_home scrollbar ">
            <div className="left_link hover1">
                <img src={`${img1}${Account?.Avater}`} />
                <span>
                <Link to="/7">{Account?.First_Name}  {Account?.Last_Name}</Link>  
                </span>
                
            </div>
            {left.slice(0, 8).map((link, i) => (
                
                <LeftLink
                    key={i}
                    img={link.img}
                    text={link.text}
                    notification={link.notification}
                />
                
            ))}
            {!visible && (
                <div className="left_link" onClick={() => setVisible(true)}>
                    <div className="small_circle">
                        <ArrowDown1 />
                    </div>
                    <span>Show less</span>
                </div>
            )}
            {visible && (
                <div className="more_left">
                    {left.slice(8, left.length).map((link, i) => (
                        <LeftLink
                            key={i}
                            img={link.img}
                            text={link.text}
                            notification={link.notification}
                        />
                    ))}
                    <div className="left_link" onClick={() => setVisible(false)}>
                        <div className="small_circle rotate360">
                            <ArrowDown1 />
                        </div>
                    </div>
                    <span>Show less</span>
                </div>)}
            <div className="splitter">   </div>
            <div className="shortcut">
                <div className="heading"> Your Shotcuts</div>
                <div className="edit_shortcut">Edit</div>
            </div>
            <div className="shortcut_list">
                <Shortcut
                    link="https://www.youtube.com/c/MohamedHaJJi1/featured"
                    img="../../images/ytb.png"
                    name="My Youtube channel"
                />

                <Shortcut
                    link="https://www.instagram.com/med_hajji7/"
                    img="../../images/insta.png"
                    name="My Instagram "
                />
            </div>
        </div>
    )
}
export default Left_Home