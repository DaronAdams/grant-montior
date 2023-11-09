import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Grants from './pages/Grants';
import Login from './pages/Login';
import Register from './pages/Register';
import Employees from './pages/Employees';
import Settings from './pages/Settings';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/grants',
    element: <Grants />,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
}

export default App;
