
export const APP_RESOURCE = {
    AUTH:"AUTH",
    DASHBOARD:"DASHBOARD"
}as const;

export type APP_RESOURCE = typeof APP_RESOURCE[keyof typeof APP_RESOURCE];
