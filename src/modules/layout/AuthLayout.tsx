import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="max-w-[1300px] flex justify-around items-center p-8 h-screen ">
      <div className=" rounded-[12px] max-w-[464px] max-h-[676px] flex items-center justify-center flex-col gap-8 bg-[#18227B]  ">
        <div>
          <img src="/Groupe de masques 18 (1).svg" alt="headerLayout" />
        </div>
        <div className="py-10">
          <img src="/Groupe 19630 (1).svg" alt="logoCrina" />
        </div>
        <div className="flex flex-col px-8 gap-1 pb-8 items-center">
          <div className="">
            <img src="/Groupe 19651.png" alt="image" />
          </div>
          <div className="text-center font-normal text-[12px] tracking-normal text-white opacity-90 ">
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
