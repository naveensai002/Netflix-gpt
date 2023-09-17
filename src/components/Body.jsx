import { createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;

        /* dispatch the action to store*/
        dispatch(addUser({ uid, email, displayName }));
      } else {
        /* User is signed out */

        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
