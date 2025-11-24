import type { DashboardInfoEntity } from "@/modules/dashboard/models/DashboardInfoEntity";
import { useRouter } from "@/shared/hooks/useRouter";
import type { PaginationData } from "@/shared/interfaces/PaginationData";
import { useEffect, useState } from "react";
import { DashboardRoutes } from "../../router/routes";

export const useDashboard = () => {
    const [listinformation, setListInformation] = useState<DashboardInfoEntity | null>(null);
    const router=useRouter()

    useEffect(() => {
        const mockData: DashboardInfoEntity = {
            totalAmount: 145058000.00,
            totalCommission: 145058000.00,
            partners: [
                {
                    id: "1",
                    partnerName: "Express Union",
                    partnerLogo: "/expressUnion.png",
                    count: 6000,
                    dateStart: "00/00/0000",
                    dateEnd: "00/00/0000",
                    amountWithCommission: 145058000.00,
                    amountWithoutCommission: 145058000.00,
                    techCommission: {
                        total: 145058000.00,
                        ht: 145058000.00,
                        tva: 145058000.00,
                    },
                    collectCommission: 145058000.00,
                },
                {
                    id: "2",
                    partnerName: "Campost",
                    partnerLogo: "/campost.png",
                    count: 6000,
                    dateStart: "00/00/0000",
                    dateEnd: "00/00/0000",
                    amountWithCommission: 145058000.00,
                    amountWithoutCommission: 145058000.00,
                    techCommission: {
                        total: 145058000.00,
                        ht: 145058000.00,
                        tva: 145058000.00,
                    },
                    collectCommission: 145058000.00,
                },
            ]
        };

        const timer = setTimeout(() => {
            setListInformation(mockData);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    const handleViewPartner=(id:string )=>{

        router.navigate(
        `${DashboardRoutes.partners.replace(":id",id)}`,
        )
    }
    return {
        listinformation,
        setListInformation,
        handleViewPartner
    };
};

export type DashboardBehavior = ReturnType<typeof useDashboard>;