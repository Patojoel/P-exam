import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { PExamStore } from './lib/store/PExamStore.ts';
const persist = persistStore(PExamStore);
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={PExamStore}>
            <ToastContainer
                aria-label={"true"}
                style={{ width: "450px" }}
                toastStyle={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                }}
            />
            <PersistGate persistor={persist} loading={null}>
                <App store={PExamStore} />
            </PersistGate>
        </Provider>
    </StrictMode>,
)