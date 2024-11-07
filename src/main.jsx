import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import BookPage from "./pages/BookPage";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp";
import ErrorPage from "./pages/Error";
import { AuthWrapper } from "./components/context/AuthContext";
import PrivateRoute from "./pages/PrivateRoute";
import "nprogress/nprogress.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodoApp /> },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <BookPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>

  // </React.StrictMode>
);
