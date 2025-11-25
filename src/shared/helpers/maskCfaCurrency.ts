export const maskCfaCurrency = (d: number, withSuffix=true): string => {
    // Use the 'fr-FR' locale which formats numbers with a space as the thousands separator,
    // matching the desired format for CFA currency (e.g., 1 000, 100 000).
    return new Intl.NumberFormat('fr-FR').format(d)+ (withSuffix?" Fcfa":"");
};