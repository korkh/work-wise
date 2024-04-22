using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Helpers
{
    public class PayrollHelper
    {
        public static async Task<bool> PayrollExistsAsync(
            DataContext context,
            PayrollDto payroll,
            Guid existingPayrollId,
            CancellationToken cancellationToken
        )
        {
            return await context.Payrolls.AnyAsync(
                p =>
                    p.EmployeeId == payroll.EmployeeId
                    && p.Employee.FirstName == payroll.EmployeeFirstName
                    && p.Employee.LastName == payroll.EmployeeLastName
                    && p.Year == payroll.Year
                    && p.Month == payroll.Month
                    && p.WorkingDays == payroll.WorkingDays
                    && p.WorkingHours == payroll.WorkingHours
                    && p.AtlyginimasPagalDS == payroll.AtlyginimasPagalDS
                    && p.DarboDienu == payroll.DarboDienu
                    && p.DarboValandu == payroll.DarboValandu
                    && p.Virsvalandziai == payroll.Virsvalandziai
                    && p.SventinesIrPoilsioValandos == payroll.SventinesIrPoilsioValandos
                    && p.PirmaEilesPareigosTaikomasNPD == payroll.PirmaEilesPareigosTaikomasNPD
                    && p.NPD == payroll.NPD
                    && p.Atlyginimas == payroll.Atlyginimas
                    && p.Atostogos == payroll.Atostogos
                    && p.VirsvalandziaiPriskaityta == payroll.VirsvalandziaiPriskaityta
                    && p.Priedas == payroll.Priedas
                    && p.PriedasUzPoilsioIrSventines == payroll.PriedasUzPoilsioIrSventines
                    && p.Liga2d == payroll.Liga2d
                    && p.IsVisoPriskaityta == payroll.IsVisoPriskaityta
                    && p.PajamuMokestis20 == payroll.PajamuMokestis20
                    && p.PajamuMokestis15 == payroll.PajamuMokestis15
                    && p.PajamuMokestisOlandija == payroll.PajamuMokestisOlandija
                    && p.Sodra_19 == payroll.Sodra_19
                    && p.Sodra_3 == payroll.Sodra_3
                    && p.IsVisoIsskaityta == payroll.IsVisoIsskaityta
                    && p.Ismoketi == payroll.Ismoketi
                    && p.Bankas == payroll.Bankas
                    && p.Baudos == payroll.Baudos
                    && p.Likutis == payroll.Likutis
                    && p.Sodra_1 == payroll.Sodra_1
                    && p.SodraIsViso == payroll.SodraIsViso
                    && p.Dienpinigai == payroll.Dienpinigai
                    && p.AdditionalCalculation == payroll.AdditionalCalculation
                    && p.KiekTuriGauti == payroll.KiekTuriGauti
                    && p.Id != existingPayrollId,
                cancellationToken
            );
        }
    }
}
