import {Router} from "./shared/router/router.tsx";
import {RouterProvider} from "react-router";
const App = () => {

    return (
        <RouterProvider
            router={Router()}
        />
    );
};

export default App;


