import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import './index.css';
// import App from './App';
import SimpleWelcome from './components/SimpleWelcome';
// import reportWebVitals from './reportWebVitals';
// import { FlashDataProvider } from './contexts/flashDataContext';

// OLD WAY
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <FlashDataProvider>
//       <App />
//     </FlashDataProvider>
//   </React.StrictMode>
// );

//React Router v6
const router = createBrowserRouter([
  {
    path: "/",
    element: <SimpleWelcome />,
    // loader: rootLoader,
    children: [
      {
        path: "*",
        element: <Navigate to="/" replace />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
