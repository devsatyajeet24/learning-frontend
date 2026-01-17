import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/public/Home";
import Courses from "./pages/public/Courses";
import CourseDetails from "./pages/public/CourseDetails";
import LoginSelect from "./pages/auth/LoginSelect";
import StudentLogin from "./pages/auth/StudentLogin";
import InstructorLogin from "./pages/auth/InstructorLogin";
import StudentDashboard from "./pages/student/Dashboard";
import InstructorDashboard from "./pages/instructor/Dashboard";

import CreateCourse from "./pages/instructor/CreateCourse";
import Navbar from "./components/Navbar";
import RegisterSelect from "./pages/auth/RegisterSelect";
import StudentRegister from "./pages/auth/StudentRegister";
import InstructorRegister from "./pages/auth/InstructorRegister";


<Route
  path="/instructor/create-course"
  element={<CreateCourse />}
/>


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/login" element={<LoginSelect />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/instructor" element={<InstructorLogin />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/register" element={<RegisterSelect />} />
<Route path="/register/student" element={<StudentRegister />} />
<Route path="/register/instructor" element={<InstructorRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
