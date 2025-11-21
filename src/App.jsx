import { RouterProvider } from "react-router";
import { Router } from "./shared/router/router.tsx";  // Modifiez cette ligne

const App = () => {
  return <RouterProvider router={Router()} />;
};

export default App;