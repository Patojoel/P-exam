import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="p-8 max-w-[1300px] h-[100vh]  gap-8 flex justify-around   items-center ">
      <div className="flex  items-center flex-col gap-5 bg-[#18227B] min-w-[472px] min-h-[676px] rounded-[12px] ">
        <div>
          <img
            src={"/Groupe de masques 18.svg"}
            alt="header image"
            className=" h-auto"
          />
        </div>
        <div className="py-12">
          <img src={"/Groupe 19630.svg"} alt="logo" className="h-auto" />
        </div>
        <div className="px-8 py-4 flex flex-col gap-2">
          <div>
            <img src={"/Groupe 19651.png"} alt="" className=" h-auto" />
          </div>
          <div className="text-white text-center text-sm">
            Power by Crina Studio
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
