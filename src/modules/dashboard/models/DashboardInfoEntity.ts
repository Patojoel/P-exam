export interface PartnerInfoEntity {
    id: string;
    partnerName: string;
    partnerLogo: string;
    count: number;
    dateStart: string;
    dateEnd: string;
    amountWithCommission: number;
    amountWithoutCommission: number;
    techCommission: {
        total: number;
        ht: number;
        tva: number;
    };
    collectCommission: number;
}

export interface DashboardInfoEntity {
    totalAmount: number;
    totalCommission: number;
    partners: PartnerInfoEntity[];
}