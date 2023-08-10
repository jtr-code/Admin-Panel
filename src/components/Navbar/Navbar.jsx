import "./Navbar.scss";
import {
  Search,
  Language,
  DarkModeOutlined,
  ChatBubbleOutlineOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ListOutlined
} from "@mui/icons-material";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <Search />
        </div>
        <div className='items'>
          <div className='item'>
            <Language className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeOutlined className='icon' />
          </div>
          <div className='item'>
            <FullscreenExitOutlined className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlined className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlined className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlined className='icon' />
          </div>
          <div className='item'>
            <img
              src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png'
              alt='avatar'
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
