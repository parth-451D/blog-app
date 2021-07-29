import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {Context} from "../../context/Context";

export default function Sidebar() {

  const [cats, setCats] = useState([]);
  const PF = "http://localhost:5000/images/";
  const{user} = useContext(Context)

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT APP</span>
        <img
          src="http://cdn2.hubspot.net/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg"
          alt=""
        />
 
        <p>
        This is MERN stack Project with features of all CRUD operations.
        You can write Blog and make post.
        You can edit and delete your Blog.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link" >
          <li className="sidebarListItem">{c.name} </li>
          </Link>
        ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-linkedin-in"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
