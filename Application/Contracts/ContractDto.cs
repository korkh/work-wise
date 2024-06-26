namespace Application.Contracts
{
    public class ContractDto
    {
        public string Position { get; set; }
        public string ContractNumber { get; set; }
        private DateTime acceptationDate;
        public DateTime AcceptionDate
        {
            get => acceptationDate;
            set => acceptationDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }
        private DateTime dismissalDate;
        public DateTime DismissalDate
        {
            get => dismissalDate;
            set => dismissalDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }
        public int EmploymentDays => (DismissalDate - AcceptionDate).Days;
        public int AnnualHolidays { get; set; }
        public int FatherHolidays { get; set; }
        public int UnpaidHolidays { get; set; }
        public int TruancyDays { get; set; }
        public int AllowedAbsenceDays { get; set; }
        public int UnusedHolidays =>
            ((EmploymentDays + 1 - TruancyDays - UnpaidHolidays) * 20 / 365) - AnnualHolidays;
    }
}
