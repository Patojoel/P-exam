export interface PartnersEntity {
    id: string;
    transactionNo: string;
    paymentCode: string;
    date: string;
    amount: number;
    type: string;
    establishment: string;
    status: string;
    operator?: string;
}