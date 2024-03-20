export const MySQLDoubleMaxPrecision = 15;
export function validateMySQLDoublePrecision(value: number): boolean {
    // Make sure the scale of the number is correct
    let maxLength = MySQLDoubleMaxPrecision;
    const stringVal = value.toString();
    const decimalIndex = stringVal.indexOf('.');
    if (decimalIndex !== -1) {
        maxLength++;
    }
    if (stringVal.length > maxLength) {
        return false;
    }
    return true;
}
