import Generic from "../pages/Generic";
import HomePage from "../pages/Home";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <HomePage />,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    element: (
      <h1>
        <Generic />
      </h1>
    ),
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    element: (
      <h1>
        <Generic />
      </h1>
    ),
  },
];
