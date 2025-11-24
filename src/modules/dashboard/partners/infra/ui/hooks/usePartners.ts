import { useState, useEffect } from "react";
import type { PartnersEntity } from "../../../models/PartnersEntity";
import { useRouter } from "@/shared/hooks/useRouter";

export interface PartnerStats {
    amountWithCommission: number;
    amountWithoutCommission: number;
    collectCommission: number;
}

export const usePartners = () => {
    const [listPartners, setListPartners] = useState<PartnersEntity[]>([]);
    const [stats, setStats] = useState<PartnerStats | null>(null);
    const router = useRouter();
    // const { id } = router.params as any; 

    // However, the user's useRouter has `params` as URLSearchParams.
    // Let's check `useRouter` implementation again.
    // It uses `new URLSearchParams(window.location.search)`. This is for query params.
    // For route params like /dashboard/:id, we usually need `useParams` from `react-router-dom`.
    // The user's `useRouter` doesn't seem to wrap `useParams`.
    // But `ViewPartners` is rendered at `/dashboard/:id`.
    // I will assume I can use `useParams` directly or just ignore the ID for mock data purposes.
    // Let's just mock data for now.

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
            setListPartners(mockPartners);
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
        listPartners,
        stats,
        handleBack,
        handleCancel
    };
};

export type UsePartnersBehavior = ReturnType<typeof usePartners>;
