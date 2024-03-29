import React from 'react'
import '../styles/VideoRow.css'

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image} alt={channel} />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel} · <span className="videoRow_subs"><span className="videoRow_subsNumber"> {subs} Subscribers</span></span>  {views} Views · {timestamp}
               </p>
                <p className="videoRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
