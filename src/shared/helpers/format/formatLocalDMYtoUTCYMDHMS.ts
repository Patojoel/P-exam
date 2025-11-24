export function formatLocalDMYtoUTCYMDHMS(localStr: string): string|null {
    if (typeof localStr !== 'string') throw new Error('Input must be a string');

    // Strict local date format validation
    const localRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    if (!localRegex.test(localStr)) {
        return null
    }

    const [_, day, month, year] = localRegex.exec(localStr)!.map(Number);
    const localDate = new  Date(Date.UTC(year, month - 1, day, 0, 0, 0));

    // Validate local date
    if (isNaN(localDate.getTime())) throw new Error('Invalid local date values');

    return localDate.toISOString().replace('T', ' ').replace(/\..+/, '');
}