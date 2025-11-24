import { EyesIcon } from "@/components/icons/EyesIcon";
import { GenericCard } from "@/components/generics/GenericCard";
import { CalendarIcon } from "@/components/icons/CalendarIcon";
import type { DashboardBehavior } from "../hooks/useDashbooard";
import { formatCurrency } from "@/shared/helpers/format/formatCurrency";

export const DashboardInfo = ({ data }: { data: DashboardBehavior }) => {
    const { listinformation, handleViewPartner} = data;


    if (!listinformation) {
        return <div>Loading...</div>; // Or a skeleton loader
    }

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="relative bg-primary rounded-[12px] w-full">
                    <img src="/Groupe 20319.svg" className="w-full min-h-[178px] object-cover" alt="firstImgCard" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[14px] text-white/60 font-normal">Montant total</span>
                            <span className="text-[28px] font-bold">{formatCurrency(listinformation.totalAmount)}</span>
                            <div className="flex items-center gap-2 mt-1 cursor-pointer hover:opacity-80 transition-opacity">
                                <EyesIcon size={16} color="#0370EE"/>
                                <span className="text-[#0370EE] text-[12px] font-normal">Cacher le montant</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative bg-[#8DBFF7] rounded-[12px] w-full">
                    <img src="/Groupe 20320.svg" className="w-full min-h-[178px] object-cover" alt="secondImgCard" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[14px] text-white/60 font-normal">Montant total de commission</span>
                            <span className="text-[28px] font-bold">{formatCurrency(listinformation.totalCommission)}</span>
                            <div className=" text-[#0370EE] flex items-center gap-2 mt-1 cursor-pointer hover:opacity-80 transition-opacity">
                                <EyesIcon  size={16} color="#0370EE" />
                                <span className=" text-[12px] font-normal">Cacher le montant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-[18px] font-bold text-[#1E1F25]">Partenaires</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {listinformation.partners.map((item) => (
                        <GenericCard
                            key={item.id}
                            className="border border-[#E6EAEFBD]"
                            header={
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-2">
                                    <div className="flex items-center gap-3">
                                        <img src={item.partnerLogo} alt={item.partnerName} className="h-9  w-9 " />
                                        <span className="font-bold text-sm text-[#1E1F25]">{item.partnerName}</span>
                                        <span className="bg-[#E8F2FD] text-[#0370EE] min-h-[24px] text-xs font-bold px-3 py-1 rounded-full  border border-[#0370EE]">{item.count}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm ">
                                        <span className="font-bold text-[14px]">De</span>
                                        <div className="flex items-center h-[44px] gap-2 border min-w-[135px] border-[#1E1F2533] rounded px-2 py-1 bg-white">
                                            <CalendarIcon size={24} />
                                            <span className="text-[14px] text-[#1E1F2566]">{item.dateStart}</span>
                                        </div>
                                        <span className="font-bold text-[14px]">À</span>
                                        <div className="flex items-center h-[44px] gap-2 border min-w-[135px]  border-[#1E1F2533] rounded px-2 py-1 bg-white">
                                            <CalendarIcon size={24} />
                                            <span className="text-[14px] text-[#1E1F2566]">{item.dateEnd}</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            footer={
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="border-2 border-[#E6EAEFBD] rounded-[8px] p-4">
                                            <span className="text-[#A5A5A7] text-[12px] block mb-2">Commission partenaires technique</span>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-[#1E1F25]">{formatCurrency(item.techCommission.total)}</span>
                                                    <div className="flex items-center bg-[#DDEEF0] p-1 rounded  min-w-[26px]">
                                                        <span className="  text-[#448B96] text-[10px] font-bold ">TTC</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-[#1E1F25]">{formatCurrency(item.techCommission.ht)}</span>
                                                    <div className="flex items-center justify-center bg-[#DDEEF0] p-1  rounded  min-w-[28px]">
                                                        <span className="  text-[#448B96] text-[10px] font-bold ">HT</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-[#1E1F25]">{formatCurrency(item.techCommission.tva)}</span>
                                                    <div className="flex items-center bg-[#DDEEF0] p-1 rounded  min-w-[26px]">
                                                        <span className="  text-[#448B96] text-[10px] font-bold ">TVA</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" border-[#E6EAEFBD] rounded-[8px] border-2 p-4">
                                            <span className="text-[#A5A5A7] text-xs block mb-2">Commission partenaires de collecte</span>
                                            <span className="font-bold text-[#1E1F25] block">{formatCurrency(item.collectCommission)}</span>
                                        </div>
                                    </div>
                                    <button onClick={()=>handleViewPartner(item.id)} className="w-full text-[14px]  py-2 h-[44px] mb-4 text-[#0370EE] border border-[#0370EE] rounded-[4px] font-medium hover:bg-[#E8F2FD] transition-colors">
                                        Détails
                                    </button>
                                </div>
                            }
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                <div className="bg-[#E8F2FD] rounded-[8px] p-4 flex flex-col justify-center">
                                    <span className="text-[#A5A5A7] text-xs mb-1">Montant total avec commission</span>
                                    <span className="text-[#1E1F25] font-bold text-lg">{formatCurrency(item.amountWithCommission)}</span>
                                </div>
                                <div className="bg-[#E8F2FD] rounded-[8px] p-4 flex flex-col justify-center">
                                    <span className="text-[#A5A5A7] text-xs mb-1">Montant total sans commission</span>
                                    <span className="text-[#1E1F25] font-bold text-lg">{formatCurrency(item.amountWithoutCommission)}</span>
                                </div>
                            </div>
                        </GenericCard>
                    ))}
                </div>
            </div>
        </div>
    );
};
