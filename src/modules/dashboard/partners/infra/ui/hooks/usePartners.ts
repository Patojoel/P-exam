import { useState, useEffect } from "react";
import type { PartnersEntity } from "../../../models/PartnersEntity";
import { useRouter } from "@/shared/hooks/useRouter";

export interface PartnerStats {
    amountWithCommission: number;
    amountWithoutCommission: number;
    collectCommission: number;
}

export const usePartners = () => {
    const [PartnerInfo, setPartnerInfo] = useState<PartnersEntity[]>([]);
    const [stats, setStats] = useState<PartnerStats | null>(null);
    const router = useRouter();
    useEffect(() => {
        const mockPartners: PartnersEntity[] = Array(10).fill(null).map((_, index) => ({
            id: `id-${index}`,
            transactionNo: "1010E23687",
            paymentCode: "PAY-638794130231-2025",
            date: "10/09/2023",
            amount: 995000,
            type: "Groupé",
            establishment: "INSTITUT POLYVALENT MITANYOU",
            status: "active"
        }));

        const mockStats: PartnerStats = {
            amountWithCommission: 145058000.00,
            amountWithoutCommission: 145058000.00,
            collectCommission: 145058000.00
        };

        const timer = setTimeout(() => {
            setPartnerInfo(mockPartners);
            setStats(mockStats);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleBack = () => {
        router.handleBackToPreviousPage();
    };

    const handleCancel = (id: string) => {
        console.log("Cancel transaction", id);
    };

    return {
        listPartners: PartnerInfo,
        stats,
        handleBack,
        handleCancel
    };
};

export type UsePartnersBehavior = ReturnType<typeof usePartners>;
