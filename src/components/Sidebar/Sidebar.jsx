import "./Sidebar.scss";
import {
  DashboardOutlined,
  PeopleOutlineOutlined,
  LocalShippingOutlined,
  InsertChartOutlinedRounded,
  NotificationsNoneOutlined,
  PsychologyAltOutlined,
  SettingsOutlined,
  AccountCircleOutlined,
  LogoutOutlined,
  CreditCardOutlined,
  Inventory2Outlined,
  SettingsSystemDaydreamOutlined
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>React admin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>main</p>
          <li>
            <span>
              <DashboardOutlined className='icon' /> Dashboard
            </span>
          </li>
          <p className='title'>list</p>
          <li>
            <span>
              <PeopleOutlineOutlined className='icon' />
              Users
            </span>
          </li>
          <li>
            <span>
              <Inventory2Outlined className='icon' />
              Products
            </span>
          </li>
          <li>
            <span>
              <CreditCardOutlined className='icon' />
              Orders
            </span>
          </li>
          <li>
            <span>
              <LocalShippingOutlined className='icon' />
              Delivery
            </span>
          </li>
          <p className='title'>useful</p>
          <li>
            <span>
              <InsertChartOutlinedRounded className='icon' />
              Stats
            </span>
          </li>
          <li>
            <span>
              <NotificationsNoneOutlined className='icon' />
              Notification
            </span>
          </li>
          <p className='title'>service</p>
          <li>
            <span>
              <SettingsSystemDaydreamOutlined className='icon' />
              System Health
            </span>
          </li>
          <li>
            <span>
              <PsychologyAltOutlined className='icon' />
              Logs
            </span>
          </li>
          <li>
            <span>
              <SettingsOutlined className='icon' />
              Settings
            </span>
          </li>
          <p className='title'>user</p>
          <li>
            <span>
              <AccountCircleOutlined className='icon' />
              Profiles
            </span>
          </li>
          <li>
            <span>
              <LogoutOutlined className='icon' />
              Logout
            </span>
          </li>
        </ul>
      </div>

      <div className='bottom'>
        <p className='title'>Themes</p>
        <div className='theme-wrapper'>
          <div className='theme-option'></div>
          <div className='theme-option'></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
