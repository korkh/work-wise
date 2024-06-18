export const calculateAvailableWorkingHours = (year, month, holidays) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let availableDays = 0;
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const isHoliday = holidays.includes(day);
        if (!isWeekend && !isHoliday) {
            availableDays++;
        }
    }
    return availableDays * 8;
};
export const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};
