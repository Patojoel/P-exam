import IMAGES from "@/assets/images";
import {useRouter} from "@/shared/hooks/useRouter.ts";
import { AuthRoutes } from "@/modules/auth/infra/router/routes";
import { Button } from "@/components/ui/button";


export const NotFound404 =()=>{
    const {handleNavigate}= useRouter()
    return <div className={"flex px-2 overflow-hidden  bg-not-found relative h-screen w-screen flex-col text-center items-center justify-center"}>
        <div className="absolute bg-circleLeft top-0 left-0 max-w-[80px] max-h-[136px]  xl:max-w-[180px] xl:max-h-[236px] w-full h-full">
        </div>
        <div className="absolute bottom-0 right-0 bg-circleRight max-w-[90px] max-h-[100px]  xl:max-w-[180px] xl:max-h-[236px] w-full h-full ">
        </div>
        <div className="absolute h-full w-full max-w-[1280px] z-0 bg-circle404  ">
        </div>
        <div className="absolute top-12 left-1/2 -translate-x-1/2  flex xl:block items-center justify-center">
            <img className="xl:block" src={IMAGES.logo} alt="logo.png"/>
        </div>
        <div className={"z-10 mt-96 flex flex-col text-center items-center justify-center"}>
            <span className={"text-[36px]   leading-[36px] font-bold text-title"}><Translate  id="shared.error404.title"/></span>
            <p className={"max-w-lg lg:max-w-xl mt-6 font-bold  mb-10 text-black text-md"}><Translate  id="shared.error404.description"/></p>
            <Button
                    type={'button'}
                    className="" onClick={()=>handleNavigate(AuthRoutes.login)} >
            </Button>
        </div>

    </div>
}