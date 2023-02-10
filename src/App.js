import { createBrowserRouter } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Error from './pages/error/index'
import Social from "./pages/Networks";
import Private from "./routes/Private";
import PrivateLogin from "./routes/PrivateLogin";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <PrivateLogin> <Login /> </PrivateLogin>
  },
  {
    path: '/admin',
    element: <Private> <Admin /> </Private>
  },
  {
    path: '/admin/social',
    element: <Private> <Social /> </Private>
  },
  {
    path: '*',
    element: <Error />,
  }
]);

export { router };

