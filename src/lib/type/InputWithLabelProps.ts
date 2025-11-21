import type {Control} from "react-hook-form";

export interface InputWithLabelProps {
    label?: string
    subLabel?: string
    name?: string
    type?: "email" | "text" | "number"
    size?:"sm" |"default"
    placeholder?: string
    value?: string | number;
    max?: number;
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    required?: boolean
    suffix?:React.ReactNode
    prefix?:React.ReactNode
    control?:Control<any, any, any>
    clearErrors?: (name?: any | any[]) => void, 
    labelClassName?:string; 
    className?:string;      
    disabled?:boolean, 
    mask?:(value:string) =>string

}