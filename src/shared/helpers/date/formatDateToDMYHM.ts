export function formatDateToDMYHM(dateInput: unknown, locale = "fr-FR"): string {
    const date = new Date(dateInput as any);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date input");
    }

    return date.toLocaleString(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).replace(",", " à").replace(/\s+/g, " ");
}
