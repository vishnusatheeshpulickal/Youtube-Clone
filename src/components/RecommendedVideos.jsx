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
          image="https://i.ytimg.com/vi/VG98IQp7o_c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1xXlmBXckfaystqJk0GWyM69uWw"
        />
        <VideoCards
          views="403M"
          description="Diana and Dad - favorite children's stories about new toys and pretend play."
          timestamp="2 years ago"
          channel="Kids Diana Show"
          title="Diana and Dad - Funny Stories for Kids"
          image={require('../images/diana.jpg').default}
          channelImage={require('../images/diana logo.jpg').default}
        />
        <VideoCards
          views="14M"
          description="Welcome to the official Mr Bean Channel. Here you will find all of your favourite Mr Bean moments from the classic series"
          timestamp="1 year ago"
          channel="Mr Bean"
          title="AIRPLANE Bean | Bean Movie | Funny Clips | Mr Bean Official "
          image={require('../images/mr.bean.jpg').default}
          channelImage={require('../images/mr.bean logo.jpg').default}
        />
        <VideoCards
          views="2.1M"
          description="Join the 3-part epic masterclass that shows you how to become a 6-figure devolper.."
          timestamp="1 year ago"
          channel="Clever Programmer"
          title="Python Tutorial for Beginners  - Full Course in 11 hours [2020]"
          image={require('../images/maxresdefault.jpg').default}
          channelImage={require('../images/clever programmer.jpg').default}
        />
        <VideoCards
          views="14M"
          description="Bahubali Movie Making Video | VFX | Kamal Concepts"
          timestamp="1 year ago"
          channel="Kamal Concepts"
          title="Bahubali Movie Making Video | VFX | Kamal Concepts"
          image={require('../images/kamal concepts.jpg').default}
          channelImage={require('../images/kamal concept.jpg').default}
        />
        <VideoCards
          views="1.3B"
          description="Diana - LIKE IT - Kids Song (Official Video). "
          timestamp="2 years ago "
          channel="Kids Diana Show"
          title="Diana - LIKE IT - Kids Song (Official Video)"
          image={require('../images/diana-2.jpg').default}
          channelImage={require('../images/diana logo.jpg').default}
        />
        <VideoCards
          views="7.4B"
          description="Despacito” disponible ya en todas las plataformas digitales. "
          timestamp="4 years ago "
          channel="Luis Fonsi"
          title="Luis Fonsi - Despacito ft. Daddy Yankee"
          image={require('../images/luis fonsi despecito.jpg').default}
          channelImage={require('../images/luis fonsi.jpg').default}
        />
        <VideoCards
          views="2.1B"
          subs="29.7M"
          description="“Échame La Culpa” disponible ya en todas las plataformas digitales"
          timestamp="3 years ago "
          channel="Luis Fonsi"
          title="Luis Fonsi, Demi Lovato - Échame La Culpa (Video Oficial)"
          image={require('../images/luis fonci demi.jpg').default}
          channelImage={require('../images/luis fonsi.jpg').default}
        />
         
        <VideoCards
          views="69M"
          subs="1.61M"
          description="Dangal is an extraordinary true story based on the life of Mahavir Singh and his two daughters, Geeta and Babita Phogat."
          timestamp="5 years ago "
          channel="UTV Motion Pictures"
          title="Dangal | Official Trailer | Aamir Khan | In Cinemas Dec 23, 2016"
          image={require('../images/dangul.jpg').default}
          channelImage={require('../images/utv logo.jpg').default}
        />

        <VideoCards
          views="120M"
          subs="8.87M"
          description="The most awaited trailer of the year is finally here... "
          timestamp="4 years ago "
          channel="Dharma Productions"
          title="Baahubali 2 - The Conclusion | Official Trailer (Hindi) | S.S. Rajamouli | Prabhas | Rana Daggubati"
          image={require('../images/bahubali.jpg').default}
          channelImage={require('../images/dharma.jpg').default}
        />

        <VideoCards
          views="8M"
          subs="4.23M"
          description="AVATAR takes us to a spectacular world beyond imagination"
          timestamp="11 years"
          channel="20th Century Studios"
          title="Avatar | Official Trailer (HD) | 20th Century FOX"
          image={require('../images/avatar.jpg').default}
          channelImage={require('../images/screen culture.jpg').default}
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
