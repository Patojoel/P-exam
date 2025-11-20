import { App_URL } from "./app-urls";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL + App_URL;
export const isDevMode = import.meta.env.MODE === "development"


