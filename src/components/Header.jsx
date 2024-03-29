import React,{useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom'
import '../styles/Header.css'


function Header() {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
        <div className="header_left">
        <MenuIcon />
        <Link to='/'>
      <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="youtube logo" />
        </Link>
        </div>
      <div className="header_input">
      <input onChange={e => setInputSearch(e.target.value)} value = {inputSearch} placeholder="Search" type="text"/>
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon className="header_inputbutton" />
      </Link>
      </div>
      <div className="header_right">
      <VideoCallIcon className="header_icon" />
      <AppsIcon className="header_icon" />
      <NotificationsIcon className="header_icon"/>
      <Avatar src="https://yt3.ggpht.com/yti/APfAmoE9PM9FhCK3pECq0NvlW1CYkAoAaOL26v3xoF_ZnQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="user" />
      </div>
    </div>
  );
}

export default Header;
