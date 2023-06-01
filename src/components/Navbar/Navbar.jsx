import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.scss";

function Navbar({ hide }) {
  return (
    <div className={`${hide ? "hide" : "navbar"}`}>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <div className="navitems">
          <div className="navicons">
            <LanguageOutlinedIcon className="icons" />
            English
          </div>
          <div className="navicons">
            <FullscreenExitOutlinedIcon className="icons" />
          </div>
          <div className="navicons">
            <NotificationsNoneOutlinedIcon className="icons" />
            <div className="counter">1</div>
          </div>
          <div className="navicons">
            <ListOutlinedIcon className="icons" />
          </div>
          <div className="navicons">
            <img
              className="avatar"
              src="https://www.slashfilm.com/img/gallery/darth-vaders-helmet-design-solved-a-practical-problem-with-the-star-wars-script/l-intro-1651519988.jpg"
            />
          </div>
          <div className="navicons"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
