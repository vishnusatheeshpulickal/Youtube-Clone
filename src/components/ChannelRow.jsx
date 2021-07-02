import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import '../styles/ChannelRow.css'

function ChannelRow({image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
           <Avatar className="channelRow_logo" alt={channel} src={image}/>
           <div className="channelRow_text">
               <div className="channelRow_title">
               <h4>{channel} {verified && <VerifiedIcon className="channelRow_verified"/>}</h4>
               </div>
               <p>{subs} subscribers · {noOfVideos} videos</p>
               <p>{description}</p>
           </div>
        </div>
    )
}

export default ChannelRow
