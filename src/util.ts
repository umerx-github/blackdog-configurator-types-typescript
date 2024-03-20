export function getPrecisionValidator(precision: number) {
    return function (value: number): boolean {
        // Make sure the scale of the number is correct
        let maxLength = precision;
        const stringVal = value.toString();
        const decimalIndex = stringVal.indexOf('.');
        if (decimalIndex !== -1) {
            maxLength++;
        }
        if (stringVal.length > maxLength) {
            return false;
        }
        return true;
    };
}
