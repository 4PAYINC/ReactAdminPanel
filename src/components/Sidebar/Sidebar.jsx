import "./Sidebar.scss";
import logo from "../../images/mophonelogo.svg";
import GridViewIcon from "@mui/icons-material/GridView";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="topsidebar">
        <img src={logo} />

        {/* <span className="logo">MoPhones</span> */}
      </div>
      <hr />
      <div className="midsidebar">
        <ul>
          <li>
            <GridViewIcon />
            <span>Dashboard</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Program</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>CRM</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Reporting</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Marketing</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Batch Services</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Phone Payment Plan</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Push Notificaitons</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Settings</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Help Centre</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottomsidebar">Dark Mode</div>
    </div>
  );
};

export default Sidebar;
