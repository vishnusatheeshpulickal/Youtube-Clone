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
            <ChannelRow image="https://yt3.ggpht.com/ytc/AKedOLQybyN1mVv2t2XhNQKweDRXwqdf6t6sAHZWwh19Zdw=s176-c-k-c0x00ffffff-no-rj-mo" channel="Google" verified subs="10M" noOfVideos="2599" description="Experience the world of Google on our official YouTube channel. Watch videos about our products,  technology, company..." />
            <hr />
            <h3 className="searchPage_result">Latest from Google</h3>
            <VideoRow views="1.2M" subs="10M" description="Google Fi is a different kind of phone plan. Learn how you can get smarter coverage and helpful features." timestamp="10 Months ago" channel="Google" title="Privacy and security on Google Fi" image="https://i.ytimg.com/an_webp/5fcHpUsX4Ig/mqdefault_6s.webp?du=3000&sqp=CMD59oYG&rs=AOn4CLDEK0upUfP5JPpUd1ZahkGIPDqBrA" />
            <VideoRow views="10.2M" subs="10M" description="A short video about how Google Search works, including how Google’s software indexes the web, ranks sites, flags spam, and serves up results." timestamp="3 years ago" channel="Google" title="How Google Search Works (in 5 minutes)" image="https://i.ytimg.com/an_webp/0eKVizvYSUQ/mqdefault_6s.webp?du=3000&sqp=CJSj94YG&rs=AOn4CLBXU2L-C1WmOIL9PJhi1NwTSY1E7w" />
            <VideoRow views="5.8M" subs="10M" description="Learn about the latest product and platform innovations at Google in a Keynote led by Sundar Pichai." timestamp="2 years ago" channel="Google" title="Google Keynote (Google I/O'19)" image="https://i.ytimg.com/an_webp/lyRPyRKHO8M/mqdefault_6s.webp?du=3000&sqp=CNL99oYG&rs=AOn4CLB61tCBuWXHYer_9aO66X1IijPExQ" />
            <VideoRow views="8.2M" subs="10M" description="From engineering and product management to sales and program management, Googlers from across the company share what makes working at Google so exciting and meaningful to them." timestamp="6 months ago" channel="Google" title="What's it like to work at Google?" image="https://i.ytimg.com/an_webp/n_Cn8eFo7u8/mqdefault_6s.webp?du=3000&sqp=COin94YG&rs=AOn4CLB8hRurnOqIqeygAC2tQRxIE6CFgw" />
            <VideoRow views="104.2M" subs="10M" description="Song Written, Composed & Produced by Krsna Solo. A Funny Funzoa Mimi Teddy Song on Google Search Engine." timestamp="1 years ago" channel="Google" title="Google My Bulbul | Funny Google Song | Krsna Solo | English Search Engine Song | Funzoa Funny Videos" image="https://i.ytimg.com/an_webp/p0ysH2Glw5w/mqdefault_6s.webp?du=3000&sqp=CICF94YG&rs=AOn4CLBJxmnrBSXCJNuMSKuP6K3xKg-9vQ" />
        </div>
    )
}

export default SearchPage
