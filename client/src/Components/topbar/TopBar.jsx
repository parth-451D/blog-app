import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Context } from '../../context/Context';
import "./TopBar.css";

export default function TopBar() {
  const {user , dispatch} = useContext(Context);
  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
  };
  const PF = "http://localhost:5000/images/"
    return (
        <div className="top">
      <div className="topLeft">
        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
      {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={user.profilepic ? PF+user.profilepic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkWrK6FhDuNa-QZwqJe71dE7xYVGV1ZVEb9usTCA5NRT8FlyheMHseMYYnXKLsKQoiBw&usqp=CAU" }
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
    );
}
