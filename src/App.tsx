
import { RouterProvider } from "react-router";
import { useSelector } from "react-redux";
import type { AppStore } from "@/lib/store/store.ts";
import { Router } from "./shared/router/router";

function App({ store }: { store: AppStore }) {
    const isRehydrated = useSelector((state: any) => state._persist?.rehydrated);
    if (!isRehydrated) return <div></div>
    return (
        <RouterProvider
            router={Router(store)}
        />
    );
}

export default App
