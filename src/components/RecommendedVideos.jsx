import React from "react";
import VideoCards from "./VideoCards";
import "../styles/RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_video">
        <VideoCards
          title="June 22 2021 | Vijay Birthday | Whatsapp Status | Vijay | #shorts | BGM Master |"
          views="100k"
          timestamp="3 weeks ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSe95IK0c_kij0nqPUXF1YP-8AWETqTreOCaxY1=s176-c-k-c0x00ffffff-no-rj"
          channel="BGM Master"
          image="https://i.ytimg.com/vi/SdCmfOb-ONY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu4PblHQijScVTngFeJOVr4lzqmw"
        />
        <VideoCards
          title="Samsung Odyssey G9 - 5 Things You Should Know"
          views="30k"
          timestamp="1 weeks ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRXnymDIikEqTtRkWvV5MKrYHsQRVMipS46rUO4UQ=s88-c-k-c0x00ffffff-no-rj"
          channel="littletofu"
          image="https://i.ytimg.com/vi/VG98IQp7o_c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1xXlmBXckfaystqJk0GWyM69uWw" />
        <VideoCards
          title="Here’s How Your Package Ordered Online Gets to Your Doorstep | The Quint"
          views="4M"
          timestamp="4 Weeks ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRKrecSbL351rk1UB3XT2lQcr5z9LjT0H8O91vJPw=s88-c-k-c0x00ffffff-no-rj"
          channel="The Quint"
          image="https://i.ytimg.com/an_webp/AnYrQt2uh_E/mqdefault_6s_480x270.webp?du=3000&sqp=CNO-9YYG&rs=AOn4CLB94xeaNyDC___M9cs7mFUA5xpaYA"
        />
        <VideoCards
          title="Fluid [ Liquid ] Card in UI / Design Tutorial"
          views="800k"
          timestamp="5 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQNTMLgGPhRgD-ElkhFAMuLaoqtnEQsJlrOfMsSlQ=s88-c-k-c0x00ffffff-no-rj"
          channel="Cuberto Design"
          image="https://i.ytimg.com/an_webp/MDRRVHPQlus/mqdefault_6s.webp?du=3000&sqp=CP-Q9YYG&rs=AOn4CLC4Ds3jLtRxgDy5tKoiZJIqQOZxKA"
        />
        <VideoCards
          title="Mr Bean - Red Bull Soapbox Race 2019 London - Full"
          views="14M"
          timestamp="3 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTjkzOqOOdzt76t-h-f-KgaYo4pNXPYj0KduQFx=s88-c-k-c0x00ffffff-no-rj"
          channel="Belly of the Whale"
          image="https://i.ytimg.com/an_webp/CNmLMYmJg1M/mqdefault_6s_480x270.webp?du=3000&sqp=CPKq9YYG&rs=AOn4CLCzmS1ej_NjeSHEAhwg4nRpy40gFw"
        />
        <VideoCards
          title="Base Apparel Coming Soon Page - Design to HTML/CSS"
          views="200k"
          timestamp="3 weeks ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLRMxFq0_oDPmgEOpgfCvoSlZ8_2uS51Ch4_wDFs=s88-c-k-c0x00ffffff-no-rj"
          channel="Florin Pop"
          image="https://i.ytimg.com/an_webp/8A7-0gsbHA0/mqdefault_6s.webp?du=3000&sqp=CM6o9YYG&rs=AOn4CLCM2LaPni3zLc5tCz4sOYEN7ARJMQ"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
