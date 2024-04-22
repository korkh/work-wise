using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Domain.Helpers;

namespace Domain.Entities
{
    public class Payroll
    {
        [Key]
        public Guid Id { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }
        public Employee Employee { get; set; }
        public Guid EmployeeId { get; set; }

        [Required(ErrorMessage = "Year is required")]
        public int Year { get; set; }

        [Required(ErrorMessage = "Month is required")]
        public int Month { get; set; }

        [Required(ErrorMessage = "Working days are required")]
        public int WorkingDays { get; set; }

        [Required(ErrorMessage = "Working hours are required")]
        public int WorkingHours { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal AtlyginimasPagalDS { get; set; }
        public int DarboDienu { get; set; }
        public int DarboValandu { get; set; }
        public int Virsvalandziai { get; set; }
        public int SventinesIrPoilsioValandos { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal PirmaEilesPareigosTaikomasNPD { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal NPD { get; set; }

        //----------PRISKAITYTA
        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Atlyginimas { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Atostogos { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal VirsvalandziaiPriskaityta { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Priedas { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal PriedasUzPoilsioIrSventines { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Liga2d { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal IsVisoPriskaityta { get; set; }

        // --- ISSAKITYTA
        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal PajamuMokestis20 { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal PajamuMokestis15 { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal PajamuMokestisOlandija { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Sodra_19 { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Sodra_3 { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal IsVisoIsskaityta { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Ismoketi { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Bankas { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Baudos { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Likutis { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Sodra_1 { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal SodraIsViso { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal Dienpinigai { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal AdditionalCalculation { get; set; }

        [JsonConverter(typeof(DecimalFormatConverter))]
        public decimal KiekTuriGauti { get; set; }
    }
}
