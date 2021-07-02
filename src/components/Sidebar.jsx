import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/Sidebar.css'
import TheatersOutlined from '@material-ui/icons/TheatersOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import OutlinedFlagSharpIcon from '@material-ui/icons/OutlinedFlagSharp';
import SmsFailedOutlinedIcon from '@material-ui/icons/SmsFailedOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
             <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
            <hr />
            <h3 className="sidebar_heading">MORE FROM YOUTUBE</h3>
            <SidebarRow Icon={TheatersOutlined} title="Movies" />
            <SidebarRow Icon={SportsEsportsOutlinedIcon} title="Gaming" />
            <SidebarRow Icon={ImportContactsOutlinedIcon} title="Learning" />
            <hr/>
            <SidebarRow Icon={SettingsOutlinedIcon} title="Setting" />
            <SidebarRow Icon={OutlinedFlagSharpIcon} title="Report history" />
             <SidebarRow Icon={HelpOutlineOutlinedIcon} title="Help" />
            <SidebarRow Icon={SmsFailedOutlinedIcon} title="Send feedback" />
          
        </div>
    )
}

export default Sidebar
