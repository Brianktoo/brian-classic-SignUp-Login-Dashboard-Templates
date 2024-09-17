import { createBrowserRouter } from "react-router-dom";
import SignUp from "./Page/Signup";
import NotFound from "./Page/NotFound";
import SignIn from "./Page/SignIn";

export const AppRouter = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
