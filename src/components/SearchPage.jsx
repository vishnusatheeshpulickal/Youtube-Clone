import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import '../styles/SearchPage.css'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow image channel verified subs noOfVideos description />
            <hr />
            <VideoRow />
        </div>
    )
}

export default SearchPage
