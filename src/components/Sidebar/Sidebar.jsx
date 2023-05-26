import "./Sidebar.scss";
import logo from "../../images/mophonelogo.svg";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TerminalIcon from "@mui/icons-material/Terminal";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StoreIcon from "@mui/icons-material/Store";
import PaymentsIcon from "@mui/icons-material/Payments";
import UploadIcon from "@mui/icons-material/Upload";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="topsidebar">
        <Link to="/">
          <img src={logo} />
        </Link>
        {/* <span className="logo">MoPhones</span> */}
      </div>
      <hr />
      <div className="midsidebar">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <GridViewIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
        </ul>
        <ul>
          <p className="title">APPS</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <TerminalIcon className="icon" />
              <span>Program</span>
            </li>
          </Link>
        </ul>
        <ul>
          <li>
            <AccountCircleIcon className="icon" />
            <span>CRM</span>
          </li>
        </ul>
        <ul>
          <li>
            <AssessmentIcon className="icon" />
            <span>Reporting</span>
          </li>
        </ul>
        <ul>
          <li>
            <StoreIcon className="icon" />
            <span>Marketing</span>
          </li>
        </ul>
        <ul>
          <li>
            <UploadIcon className="icon" />
            <span>Batch Services</span>
          </li>
        </ul>
        <ul>
          <li>
            <PaymentsIcon className="icon" />
            <span>Phone Payment Plan</span>
          </li>
        </ul>
        <ul>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Push Notificaitons</span>
          </li>
        </ul>
        <ul>
          <p className="title">SUPPORT</p>

          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
        <ul>
          <li>
            <QuestionMarkIcon className="icon" />
            <span>Help Centre</span>
          </li>
        </ul>
        <ul>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottomsidebar">Dark Mode</div> */}
    </div>
  );
};

export default Sidebar;
