import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Navbar />
        Home -- container
      </div>
    </div>
  );
};

export default Home;
