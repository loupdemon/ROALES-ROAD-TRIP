import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";



// Route Public
import Home from './views/home/index'
import Auth from './views/auth/index'
import Register from './views/register/index'
import Error from './views/error/index'
// Route Private
import Profil from '../src/components/main/profil/index'
import Stats from '../src/components/main/stats/index'
import List from '../src/components/main/list/index'
import Favoris from '../src/components/main/favoris/index'
import Admin from '../src/components/main/Admin/index'

import './global.css';

function RequireAuth() {
  let auth = sessionStorage.getItem('token');
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Auth />} />
        <Route path="register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route path="dash">
            <Route index element={<Stats />} />
            <Route path="profil" element={<Profil />} />
            <Route path="favoris" element={<Favoris />} />
            <Route path="list" element={<List />} />
            <Route path="admin" element={<Admin />} />

          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);