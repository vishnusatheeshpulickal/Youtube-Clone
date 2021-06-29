import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import '../styles/Header.css'

function Header() {
  return (
    <div className="header">
        <div className="header_left">
        <MenuIcon />
      <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube logo" />
        </div>
      <div className="header_input">
      <input placeholder="Search" type="text" />
      <SearchIcon className="header_inputbutton" />
      </div>
      <div className="header_right">
      <VideoCallIcon className="header_icon" />
      <AppsIcon className="header_icon" />
      <NotificationsIcon className="header_icon"/>
      <Avatar src="" alt="user" />
      </div>
    </div>
  );
}

export default Header;
