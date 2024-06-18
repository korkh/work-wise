import { ValidateBusinessTripError } from "../consts/validate_businessTrips";
export const validateBusinessTripData = (bTrip) => {
    if (!bTrip) {
        return [ValidateBusinessTripError.NO_DATA];
    }
    const { laikotarpis, alga, dienpinigai, bankas, baudos, likutis } = bTrip;
    const errors = [];
    const nowDate = new Date();
    if (!laikotarpis || laikotarpis >= nowDate) {
        errors.push(ValidateBusinessTripError.INCORRECT_DOCUMENT_DATA);
    }
    if (typeof alga !== "number") {
        errors.push(ValidateBusinessTripError.INCORRECT_DOCUMENT_DATA);
    }
    if (typeof dienpinigai !== "number") {
        errors.push(ValidateBusinessTripError.INCORRECT_DOCUMENT_DATA);
    }
    if (typeof bankas !== "number") {
        errors.push(ValidateBusinessTripError.INCORRECT_DOCUMENT_DATA);
    }
    if (typeof baudos !== "number") {
        errors.push(ValidateBusinessTripError.INCORRECT_DOCUMENT_DATA);
    }
    if (typeof likutis !== "number") {
        errors.push(ValidateBusinessTripError.INCORRECT_DOCUMENT_DATA);
    }
    return errors;
};
