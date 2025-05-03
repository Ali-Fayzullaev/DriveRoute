//App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";


const router = createBrowserRouter([
  {
    index: true,
    element: <RootLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />;
}

export default App;