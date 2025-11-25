export const PExamViewStatusEnum ={
    AUTH:"AUTH",
    DASHBOARD:"DASHBOARD",
} as const
export type PExamViewStatusEnum = (typeof PExamViewStatusEnum)[keyof typeof PExamViewStatusEnum];