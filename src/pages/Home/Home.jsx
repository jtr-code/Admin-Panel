import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import "./Home.scss";
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='home-container'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='orders' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>
      </div>
    </div>
  );
};

export default Home;
