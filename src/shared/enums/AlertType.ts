export const AlertType ={
    SUCCESS : "SUCCESS",
    ERROR : "ERROR",
    WARNING : "WARNING",
    DEFAULT : "DEFAULT",
    INFOS : "INFOS",
} as const
export type AlertType = (typeof AlertType)[keyof typeof AlertType];