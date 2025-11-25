export const maskPhoneNumber = (phoneNumber: string): string => {
    if (!phoneNumber) {
        return "";
    }

    // Remove all non-digit characters to get a clean string of numbers
    let digitsOnly = phoneNumber.replace(/\D/g, '');

    // If the number is not empty and doesn't start with '6', prepend '6'
    if (digitsOnly.length > 0 && !digitsOnly.startsWith('6')) {
        digitsOnly = '6' + digitsOnly;
    }

    // Ensure the number does not exceed 9 digits
    const finalDigits = digitsOnly.slice(0, 9);

    if (finalDigits.length > 0) {
        // Use a regex to insert a space after every 3 digits.
        // The regex looks for groups of 1 to 3 digits.
        const data= (finalDigits.match(/.{1,3}/g) || []).join(' ');
        return data
    }

    return finalDigits;
};

export const removePhoneMask = (phoneNumber: string): string => {
    if (!phoneNumber) {
        return "";
    }

    // First, remove the +237 or 237 country code from the beginning of the string.
    // Then, remove any remaining non-digit characters (like spaces).
    return phoneNumber.trim().replace(/^(?:\+?237)/, '').replace(/\D/g, '');
};