import {twMerge} from "tailwind-merge";
import { Loader } from "./Loader";

export const LoaderComponent =({className}:{className?:string})=>{
    return <>
        <div className={twMerge(" z-100 absolute top-0 left-0 bg-black/10 w-full h-full  flex items-center justify-center blur", className)}>
        </div>
        <div className={"absolute z-100 top-0 left-0 w-full h-full flex items-center justify-center"}>
            <Loader />
        </div>
    </>

}