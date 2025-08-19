import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRouter from "./PrivateRouter";
import CourseDetails from "../pages/CourseDetails";
import AddCourse from "../pages/AddCourse";
import UpdateCourse from "../pages/UpdateCourse";
import AllCourses from "../pages/AllCourses";

import EnrolledCourses from "../pages/EnrolledCourses";
import LearnCourse from "../pages/LearnCourse";
import ShowModules from "../pages/ShowModules";

import MyProfile from "../pages/MyProfile";

// import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://edufy-server.vercel.app/courses"),
      },
       {
        path: "/allCourses",
        element: <AllCourses></AllCourses>,
      },
      {
        path: "/addCourse",
        element: (
          <PrivateRouter>
            <AddCourse></AddCourse>
          </PrivateRouter>
        ),
      },
      {
        path: "updateCourse/:id",
        element: (
          <PrivateRouter>
            <UpdateCourse></UpdateCourse>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://edufy-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/courseDetails/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://edufy-server.vercel.app/courses/${params.id}`),
      },
      
            {
        path: "/enrolled-courses",
        element: (
          <PrivateRouter>
            <EnrolledCourses></EnrolledCourses>
          </PrivateRouter>
        ),
      },
      {
        path: "/showMoudules/:id",
        element: (
          <PrivateRouter>
            <ShowModules></ShowModules>
          </PrivateRouter>
        ),
      },
      {
        path: "/learn-course/:id",
        element: (
          <PrivateRouter>
            <LearnCourse></LearnCourse>,
          </PrivateRouter>
        ),
      },
       {
        path: "/myProfile/",
        element: (
          <PrivateRouter>
            <MyProfile></MyProfile>
          </PrivateRouter>
        ),
      },
    

      
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
