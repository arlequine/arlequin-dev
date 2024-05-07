import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './views/Blog.tsx';
import Home from './views/Home.tsx';

const router = createBrowserRouter([
  {
	path: "/",
    element:  <App />,
	children: [
		{
			path:'/',
			element: <Home />
		},
		{
			path:'/blog',
			element: <Blog />
		}
	]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
