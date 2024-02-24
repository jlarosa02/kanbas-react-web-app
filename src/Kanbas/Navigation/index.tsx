import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaUserCircle, FaBook, FaRegCalendarAlt, FaInbox, 
    FaClock, FaVideo, FaArrowRight, FaRegQuestionCircle, FaAngleDown} from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaUserCircle className="fs-2 fs-solid wd-icon-account" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 wd-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 wd-icon" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2 wd-icon" /> },
    { label: "History",  icon: <FaClock className="fs-2 wd-icon" /> },
    { label: "Studio",  icon: <FaVideo className="fs-2 wd-icon" /> },
    { label: "Commons",  icon: <FaArrowRight className="fs-2 wd-icon" /> },
    { label: "Help",  icon: <FaRegQuestionCircle className="fs-2 wd-icon" /> },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <ul className="wd-kanbas-navigation">
          <li><a href="http://northeastern.edu"> N </a></li>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> {link.icon} <br /> {link.label} </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default KanbasNavigation;

