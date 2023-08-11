import "./Widget.scss";
import {
  KeyboardArrowUpOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  AccountBalanceWalletOutlined
} from "@mui/icons-material/";

const Widget = ({ type }) => {
  let data;

  // temp data
  const amount = Math.floor(Math.random() * 100) + 1;
  const difference = Math.floor(Math.random() * 10) + 1;

  switch (type) {
    case "user":
      {
        data = {
          title: "USERS",
          isMoney: false,
          link: "See all users",
          icon: (
            <PersonOutlineOutlined
              className='icon'
              style={{
                color: "crimson",
                backgroundColor: "rgba(220, 20, 60, 0.349)"
              }}
            />
          )
        };
      }
      break;
    case "orders":
      {
        data = {
          title: "ORDERS",
          isMoney: false,
          link: "View all orders",
          icon: (
            <ShoppingCartOutlined
              className='icon'
              style={{
                color: "goldenrod",
                backgroundColor: "rgba(218, 165, 32, 0.338)"
              }}
            />
          )
        };
      }
      break;
    case "earnings":
      {
        data = {
          title: "EARNINGS",
          isMoney: true,
          link: "View net earnings",
          icon: (
            <MonetizationOnOutlined
              className='icon'
              style={{
                color: "green",
                backgroundColor: "rgba(0, 128, 0, 0.298)"
              }}
            />
          )
        };
      }
      break;
    case "balance":
      {
        data = {
          title: "BALANCE",
          isMoney: true,
          link: "See details",
          icon: (
            <AccountBalanceWalletOutlined
              className='icon'
              style={{
                color: "purple",
                backgroundColor: "rgba(128, 0, 128, 0.298)"
              }}
            />
          )
        };
      }
      break;
    default:
      break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <div className='title'>{data.title}</div>
        <div className='counter'>
          {data.isMoney && "$"} {amount}
        </div>
        <div className='link'>{data.link}</div>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpOutlined />
          {difference}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
