import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },

      {
        path: "createFaculty",
        element: <CreateFaculty />,
      },
      {
        path: "createAdmin",
        element: <CreateAdmin />,
      },
      {
        path: "createStudent",
        element: <CreateStudent />,
      },
    ],
  },
]);

export default router;
