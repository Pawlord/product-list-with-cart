export function formatCurrency(number, currency = 'USD', locale = 'en-US') {
    return number.toLocaleString(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}