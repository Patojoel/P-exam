export function formatUtcYMDHMSToDate(ymdHmsString: string): Date {
    // Validate format
    const utcRegex = /^(\d{4})-(\d{2})-(\d{2}) 00:00:00$/;
    if (!utcRegex.test(ymdHmsString)) {
        return new Date()
    }

    // Extract components
    const [_, year, month, day] = utcRegex.exec(ymdHmsString)!;

    // Create date in UTC (midnight)
    const utcDate = new Date(Date.UTC(
        parseInt(year, 10),
        parseInt(month, 10) - 1, // Months are 0-indexed
        parseInt(day, 10),
        0, 0, 0
    ));

    // Validate the date
    if (isNaN(utcDate.getTime())) {
        throw new Error('Invalid date values');
    }

    return utcDate;
}