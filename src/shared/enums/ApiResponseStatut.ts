export const ApiResponseStatut ={
    OK : "OK",
    ERROR : "ERROR",
} as const
export type ApiResponseStatut = (typeof ApiResponseStatut)[keyof typeof ApiResponseStatut];