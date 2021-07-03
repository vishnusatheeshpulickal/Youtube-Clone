import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "../styles/SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLQybyN1mVv2t2XhNQKweDRXwqdf6t6sAHZWwh19Zdw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Google"
        verified
        subs="10M"
        noOfVideos="2599"
        description="Experience the world of Google on our official YouTube channel. Watch videos about our products,  technology, company..."
      />
      <hr />
      <h3 className="searchPage_result">Latest from Google</h3>
      <VideoRow
        views="241M"
        subs="10.1M"
        description="In times of uncertainty, people seek understanding and meaning."
        timestamp="8 months ago"
        channel="Google"
        title="Google — Year in Search 2020"
        image={require("../images/yearinsearch2020.jpg").default}
      />
      <VideoRow
        views="10M"
        subs="10.1M"
        description="Google Wave Developer Preview presentation at the Day 2 Keynote of Google I/O. To learn more visit http://wave.google.com"
        timestamp="12 years ago"
        channel="Google"
        title=""
        image={require("../images/googlewave.jpg").default}
      />
      <VideoRow
        views="934K"
        subs="10.1M"
        description="Say hello to Google Workspace. Whether you’re planning a wedding"
        timestamp="1 years ago "
        channel="Google Workspace"
        title="Google Workspace - How it’s done."
        image={require("../images/googleworkspace.jpg").default}
      />
      <VideoRow
        views="19M"
        subs="10.1M"
        description="A short video about how Google Search works, including how Google’s software ..."
        timestamp="1 year ago"
        channel="Google"
        title="How Google Search Works (in 5 minutes)"
        image={require("../images/googlesearch.jpg").default}
      />
      <VideoRow
        views="22M"
        subs="10.1M"
        description="The whole world is now in your browser. Fly through landmarks and cities like London..."
        timestamp="4 years ago"
        channel="Google"
        title="This is the new Google Earth"
        image={require("../images/googleearth.jpg").default}
      />
      <VideoRow
        views="155M"
        subs="10.1M"
        description="Throughout history, when times are challenging, the world goes looking for heroes..."
        timestamp="2 years ago "
        channel="Google"
        title="Google — Year in Search 2019"
        image={require("../images/yearinsearch2019.jpg").default}
      />
      <VideoRow
        views="116M"
        subs="10.1M"
        description="In a year of ups and downs, the world searched for 'good' more than ever before — according to Google Trends."
        timestamp="3 years ago "
        channel="Google"
        title="Google — Year in Search 2018"
        image={require("../images/yearinsearch2018.jpg").default}
      />
      <VideoRow
        views="854K"
        subs=""
        description="Finding what to watch just got easier. Welcome to Google TV... "
        timestamp="10 months ago "
        channel="Google"
        title="Welcome to Google TV"
        image={require("../images/googletv.jpg").default}
      />
      <VideoRow
        views="4M"
        subs="10.1M"
        description="Files can now clean your phone inside and out. Give it a try at http://g.co/getfiles."
        timestamp="2 years ago "
        channel="Google"
        title="Introducing Screen Cleaner in the Files app"
        image={require("../images/filesapp.jpg").default}
      />
      <VideoRow
        views="30K"
        subs="10.1M"
        description="Google Fi is a different kind of phone plan. "
        timestamp="2 days ago "
        channel="Google"
        title="Privacy and security on Google Fi"
        image={require("../images/googlefi.jpg").default}
      />
    </div>
  );
}

export default SearchPage;
