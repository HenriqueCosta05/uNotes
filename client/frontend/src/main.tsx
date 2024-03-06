import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from './ui/pages/auth/Auth.tsx';
import Home from './ui/pages/app/home/Home.tsx';
import { Provider } from 'react-redux';
import store from './domain/redux/store.ts';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/auth/login', element: <Auth isLoginPage={true} />},
  { path: '/auth/register', element: <Auth isLoginPage={false} /> },
  {path: '/app/home', element: <Home />},
  { path: '*', element: <h1 className='text-center font-black text-violet-900 m-auto'>404 - Page Not Found</h1> }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
)
