import ModuleList from "../Modules/List";
import { HiCalendar } from "react-icons/hi2";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill container">
        <h2>Home</h2>
        <ModuleList />
      </div> 
      <div className="flex-grow-0 me-2 d-none d-lg-block p-4" style={{width: "250px"}}>
        <h5>Course Status</h5>
        <span className="d-flex gap-2">
            <button>Unpublish</button>
            <button className="bg-success text-light">Publish</button>
        </span>
        <hr />
        <ul className="list-group">
            <li className="list-group-item">
                <button>Import Existing Content</button>
            </li>
            <li className="list-group-item">
                <button>Import From Commons</button>
            </li>
            <li className="list-group-item">
                <button>Choose Home Page</button>
            </li>
        </ul>
        <hr />
      <h5> <HiCalendar /> Coming Up</h5>
        <ul className="list-group">
            <li className="list-group-item">
                <button>Lecture Jan 24 at 6:00 pm</button>
            </li>
            <li className="list-group-item">
                <button>Assigntment 1 due Jan 24 at 11:59 pm</button>
            </li>
            <li className="list-group-item">
                <button>Lecture Jan 31 at 6:00 pm</button>
            </li>
        </ul>
        </div>
      </div>
  );
}
export default Home;

