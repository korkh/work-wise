namespace Domain
{
    public class PayrollDto
    {
        public Guid Id { get; set; }
        public byte[] RowVersion { get; set; }
        public Guid EmployeeId { get; set; }
        public string EmployeeFirstName { get; set; }
        public string EmployeeLastName { get; set; }
        public int Year { get; set; }
        public int Month { get; set; }
        public int WorkingDays { get; set; }
        public int WorkingHours { get; set; }
        public decimal AtlyginimasPagalDS { get; set; }
        public int DarboDienu { get; set; }
        public int DarboValandu { get; set; }
        public int Virsvalandziai { get; set; }
        public int SventinesIrPoilsioValandos { get; set; }
        public decimal PirmaEilesPareigosTaikomasNPD { get; set; }
        public decimal NPD { get; set; }

        //----------PRISKAITYTA
        public decimal Atlyginimas { get; set; }
        public decimal Atostogos { get; set; }
        public decimal VirsvalandziaiPriskaityta { get; set; }
        public decimal Priedas { get; set; }
        public decimal PriedasUzPoilsioIrSventines { get; set; }
        public decimal Liga2d { get; set; }
        public decimal IsVisoPriskaityta { get; set; }

        // --- ISSAKITYTA
        public decimal PajamuMokestis20 { get; set; }
        public decimal PajamuMokestis15 { get; set; }
        public decimal PajamuMokestisOlandija { get; set; }
        public decimal Sodra_19 { get; set; }
        public decimal Sodra_3 { get; set; }
        public decimal IsVisoIsskaityta { get; set; }
        public decimal Ismoketi { get; set; }
        public decimal Bankas { get; set; }
        public decimal Baudos { get; set; }
        public decimal Likutis { get; set; }
        public decimal Sodra_1 { get; set; }
        public decimal SodraIsViso { get; set; }
        public decimal Dienpinigai { get; set; }
        public decimal AdditionalCalculation { get; set; }
        public decimal KiekTuriGauti { get; set; }
    }
}
