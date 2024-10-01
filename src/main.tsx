import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './pages/Blog.tsx';
import Home from './pages/Home.tsx';
import client from './apollo/apolloClient.js';
import { ApolloProvider } from '@apollo/client';
import './index.css'

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
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
