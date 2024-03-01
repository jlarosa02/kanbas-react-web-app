import Assignment3 from "./A3";
import Assignment4 from "./A4";
import ExamPrep from "./ExamPrep";
import Nav from "../Nav";
import { Routes, Route, Link } from "react-router-dom";

function Labs() {
    return (
      <div className="container-fluid">
        <Nav />
        <h1>Labs</h1>
        <Link to="/Labs/a3">Assignment 3</Link> |
        <Link to="/Labs/a4">Assignment 4</Link> | 
        <Link to="/Labs/ExamPrep">Exam</Link>
        <Routes>
          <Route path="/a3/*" element={<Assignment3 />} />
          <Route path="/a4" element={<Assignment4 />} />
          <Route path="/ExamPrep" element={<ExamPrep />} />
        </Routes>
      </div>
    );
  }
  export default Labs;
  
  