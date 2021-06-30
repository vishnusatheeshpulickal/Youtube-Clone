import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import './App.css';

function App() {
  return (
    <div className="app">
     <Header />
     <div className="app_page">
       <Sidebar />
       <RecommendedVideos />
     </div>
    </div>
  );
}

export default App;
