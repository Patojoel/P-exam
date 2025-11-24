export function formatUtcYmdHmsToLocalDMY(utcStr: string): string|null {
    if (typeof utcStr !== 'string') return  ""

    // Strict UTC format validation
    const utcRegex = /^(\d{4})-(\d{2})-(\d{2}) 00:00:00$/;
    if (!utcRegex.test(utcStr)) {
        return  null
    }

    const [_, year, month, day] = utcRegex.exec(utcStr)!;
    const utcDate = new Date(Date.UTC(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
    ));

    // Validate UTC date
    if (isNaN(utcDate.getTime())) throw new Error('Invalid UTC date values');

    // Convert to local DD/MM/YYYY
    return [
        String(utcDate.getDate()).padStart(2, '0'),
        String(utcDate.getMonth() + 1).padStart(2, '0'),
        utcDate.getFullYear()
    ].join('/');
}