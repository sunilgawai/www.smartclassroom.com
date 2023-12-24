import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Classroom from "../pages/Classroom";
import Login from "../pages/auth/Login";
import MainLayout from "../layout/MainLayout";
import Schedule from "../pages/Schedule";
import Announcement from "../pages/Announcement";
import AdminLayout from "../layout/adminLayout";
import AdminPage from "../pages/admin/Index";
import Classrooms from "../pages/admin/classrooms";
import Students from "../pages/admin/students";
import Teachers from "../pages/admin/teachers";
import Announcements from "../pages/admin/announcements";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/classroom",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Classroom />,
      },
      {
        path: "schedules",
        element: <Schedule />,
      },
      {
        path: "announcements",
        element: <Announcement />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: "classrooms",
        element: <Classrooms />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "teachers",
        element: <Teachers />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
    ],
  },
]);

export default router;
