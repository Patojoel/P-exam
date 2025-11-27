import { useState, useEffect } from "react";
import type { PartnersEntity } from "../../../models/PartnersEntity";
import { useRouter } from "@/shared/hooks/useRouter";

export interface PartnerStats {
    amountWithCommission: number;
    amountWithoutCommission: number;
    collectCommission: number;
}

export interface ChartData {
    year: string;
    requests: number;
    visits: number;
}

export interface RecoursData {
    total: number;
    percentage: number;
    label: string;
}

export interface SecteurData {
    total: number;
    series: { name: string; value: number; color: string }[];
}

export const usePartners = () => {
    const [listPartners, setListPartners] = useState<PartnersEntity[]>([]);
    const [stats, setStats] = useState<PartnerStats | null>(null);
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const [recoursData, setRecoursData] = useState<RecoursData | null>(null);
    const [secteurData, setSecteurData] = useState<SecteurData | null>(null);
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

        const mockChartData: ChartData[] = [
            { year: "2019", requests: 100, visits: 40 },
            { year: "2020", requests: 70, visits: 30 },
            { year: "2021", requests: 190, visits: 150 },
            { year: "2022", requests: 125, visits: 50 },
            { year: "2023", requests: 95, visits: 40 },
            { year: "2024", requests: 140, visits: 60 },
            { year: "2025", requests: 130, visits: 55 },
        ];

        const mockRecoursData: RecoursData = {
            total: 108,
            percentage: 25,
            label: "Recours gracieux"
        };

        const mockSecteurData: SecteurData = {
            total: 374,
            series: [
                { name: "Centre-ville", value: 100, color: "#3B82F6" },
                { name: "Pavillonnaire", value: 80, color: "#0F3880" },
                { name: "Hors périmètre", value: 50, color: "#94A3B8" },
                { name: "La Plaine | Pleyel", value: 90, color: "#CBD5E1" },
                { name: "Pierrefitte", value: 54, color: "#0EA5E9" }
            ]
        };

        const timer = setTimeout(() => {
            setListPartners(mockPartners);
            setStats(mockStats);
            setChartData(mockChartData);
            setRecoursData(mockRecoursData);
            setSecteurData(mockSecteurData);
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
        chartData,
        recoursData,
        secteurData,
        handleBack,
        handleCancel
    };
};

export type UsePartnersBehavior = ReturnType<typeof usePartners>;
