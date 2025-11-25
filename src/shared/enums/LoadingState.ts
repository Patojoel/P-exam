export const LoadingState = {
    idle:"idle",
    pending:"pending",
    success:"success",
    failed:"failed",
} as const
export type LoadingState = (typeof LoadingState)[keyof typeof LoadingState];


export const LoadingStates ={
    idle:"idle",
    pending:"pending",
    success:"success",
    failed:"failed",
} as const

export type LoadingStatesType = (typeof LoadingStates)[keyof typeof LoadingStates];
