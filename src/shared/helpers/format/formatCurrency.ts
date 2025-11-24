     export const formatCurrency = (amount: number) => {
        return amount.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " FCFA";
    };