import { Outlet } from "react-router";
import { Navbar } from "@/shared/components/navbar/Navbar";

export const DashboardLayout = () => {
    return (
        <div className="flex flex-col px-8   items-center gap-6 h-screen bg-[#F6F6FA]">
            <div className="flex flex-col mt-4  px-5 md:flex-row justify-between items-center gap-4 min-h-[84px] w-full bg-white  rounded-[12px] ">
                <div>
                    <img src="/logoCrina.svg" alt="logoCrina" />                </div>
                <Navbar />
                <div>
                    <div className="flex items-center gap-2 min-h-[44px] p-4 bg-[#E8F2FD] rounded-[12px]">
                        <img src="/logout.svg" alt="logout" />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
};