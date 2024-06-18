export const sortValues = (a, b, sortOrder) => {
    if (typeof a === "number" && typeof b === "number") {
        return sortOrder === "asc" ? a - b : b - a;
    }
    else if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return sortOrder === "asc" ? Number(a) - Number(b) : Number(b) - Number(a);
    }
    else {
        return sortOrder === "asc"
            ? String(a).localeCompare(String(b))
            : String(b).localeCompare(String(a));
    }
};
