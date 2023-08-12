import "./Featured.scss";
import {
  MoreVert,
  KeyboardArrowUp,
  KeyboardArrowDown
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  // temp value between 10 to 100
  const percentage = Math.floor(Math.random() * 91) + 10;

  return (
    <div className='featured'>
      <div className='top'>
        <div className='title'>Total Revenue</div>
        <MoreVert fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featured-chart'>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={6}
            styles={{
              path: {
                transition: "stroke-dashoffset 0.8s ease 0s"
              }
            }}
          />
        </div>
        <div className='title'>Total sales made today</div>
        <p className='amount'>$ 420</p>
        <p className='desc'>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='item-title'>Target</div>
            <div className='item-result negative'>
              <KeyboardArrowDown />
              <div className='result-amount'>$ 12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='item-title'>Last Week</div>
            <div className='item-result positive'>
              <KeyboardArrowUp />
              <div className='result-amount'>$ 12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='item-title'>Last Month</div>
            <div className='item-result positive'>
              <KeyboardArrowUp />
              <div className='result-amount'>$ 12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
