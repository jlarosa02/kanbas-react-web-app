import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import { HiMiniBars3, HiChevronRight } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const { pathname }= useLocation();
  let breadCrumbs = ["Modules", "Home", "Assignments", "Piazza", "Grades", "Quizzes"];
  const currentBC = breadCrumbs.filter((bc) => pathname.includes(bc));
  return (
    <>
      <div className="pt-2">
        <p className="wd-breadcrumbs">
            <HiMiniBars3 /> {course?.number} {course?.name} <HiChevronRight /> {currentBC}
        </p>
      </div>
      <hr />
      <div className="d-flex">
            <div className="d-none d-md-block mr-3">
                <CourseNavigation />
            </div>
            <div
            className="container overflow-y-scroll mt-2 ml-4 mr-4"
            style={{ left: "320px", top: "50px" }} >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                <Route path="Grades" element={<h1>Grades</h1>} />
                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                <Route path="People" element={<h1>People</h1>} />
                <Route path="Discussions" element={<h1>Disscussions</h1>} />
                <Route path="Announcements" element={<h1>Announcements</h1>} />
                <Route path="Pages" element={<h1>Pages</h1>} />
                <Route path="Files" element={<h1>Files</h1>} />
            </Routes>
            </div>
        </div>
    </>
  );
}
export default Courses;