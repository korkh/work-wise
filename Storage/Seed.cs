using Domain;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace Storage
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var manager = new User
                {
                    DisplayName = "Evaldas",
                    UserName = "evaldas",
                    Email = "evaldas@test.com",
                };
                await userManager.CreateAsync(manager, "Pa$$w0rd");
                await userManager.AddToRoleAsync(manager, "Manager");
                var accountant = new User
                {
                    DisplayName = "Zivile",
                    UserName = "zivile",
                    Email = "zivile@test.com",
                };
                await userManager.CreateAsync(accountant, "Pa$$w0rd");
                await userManager.AddToRoleAsync(accountant, "Accountant");
                var admin = new User
                {
                    DisplayName = "Peter",
                    UserName = "peter",
                    Email = "peter@test.com",
                };
                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRoleAsync(admin, "Admin");
            }
            ;

            if (!context.Employees.Any())
            {
                var employees = new List<Employee>
                {
                    new()
                    {
                        FirstName = "Ahad",
                        LastName = "Hamidov",
                        BirthDate = new DateTime(1990, 1, 15),
                        RegistrationAddress = new Address
                        {
                            Address1 = "123 Future St",
                            City = "Oslo",
                            Zip = "0123",
                            Country = "Norway"
                        },
                        PhoneNumber = "+37022222222",
                        Email = "ahamidov@test.com",
                        IsAvailable = true,
                        IsFired = false,
                        ContractData = new Contract
                        {
                            Position = "Pastolių montuotojas",
                            ContractNumber = "CON-001",
                            AcceptionDate = DateTime.UtcNow.AddYears(-2),
                            DismissalDate = DateTime.UtcNow.AddYears(1),
                            AnnualHolidays = 20,
                            FatherHolidays = 5,
                            UnpaidHolidays = 10,
                            TruancyDays = 2,
                            AllowedAbsenceDays = 25
                        },
                        TransportInfo = new TransportInfo
                        {
                            DrivingLicenseNumber = "ASAS234234",
                            E_100_CardNumber = "89798686685",
                            Cars = new List<Car>
                            {
                                new()
                                {
                                    Manufacturer = "Opel",
                                    Model = "Cadet",
                                    Transmission = "Manual",
                                    BuildYear = "2000",
                                    FuelType = "Bensin",
                                    CarPlateNumber = "JCA666",
                                    Renter = "RNDV Sprintline"
                                }
                            },
                            ExpectedKmPerDay = 20
                        },
                        Documents = new List<Document>
                        {
                            new()
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(1),
                            },
                            new()
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-1),
                                ExpirationDate = DateTime.UtcNow.AddMonths(3),
                            },
                            new()
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-5),
                                ExpirationDate = DateTime.UtcNow.AddMonths(6),
                            }
                        },
                        Payrolls = new List<Payroll>
                        {
                            new()
                            {
                                Year = 2024,
                                Month = 1,
                                WorkingDays = 22,
                                WorkingHours = 176,
                                AtlyginimasPagalDS = 1525.60m,
                                DarboDienu = 9,
                                DarboValandu = 72,
                                Virsvalandziai = 0,
                                SventinesIrPoilsioValandos = 0,
                                PirmaEilesPareigosTaikomasNPD = 0m,
                                NPD = 0m,
                                Atlyginimas = 624.11m,
                                Atostogos = 0m,
                                VirsvalandziaiPriskaityta = 0m,
                                Priedas = 1320.4m,
                                PriedasUzPoilsioIrSventines = 0m,
                                Liga2d = 0m,
                                IsVisoPriskaityta = 1944.51m,
                                PajamuMokestis20 = 0m,
                                PajamuMokestis15 = 0m,
                                PajamuMokestisOlandija = 124.33m,
                                Sodra_19 = 379.18m,
                                Sodra_3 = 0m,
                                IsVisoIsskaityta = 503.51m,
                                Ismoketi = 1441.0m,
                                Bankas = 3031.0m,
                                Baudos = 0m,
                                Likutis = -758.00m,
                                Dienpinigai = 832.0m,
                                Sodra_1 = 34.32m,
                                SodraIsViso = 413.6m,
                                AdditionalCalculation = 2273.00m,
                                KiekTuriGauti = 2273.00m,
                            },
                            new()
                            {
                                Year = 2024,
                                Month = 2,
                                WorkingDays = 20,
                                WorkingHours = 159,
                                AtlyginimasPagalDS = 1525.60m,
                                DarboDienu = 23,
                                DarboValandu = 202,
                                Virsvalandziai = 19,
                                SventinesIrPoilsioValandos = 24,
                                PirmaEilesPareigosTaikomasNPD = 0m,
                                NPD = 0m,
                                Atlyginimas = 1938.18m,
                                Atostogos = 0m,
                                VirsvalandziaiPriskaityta = 91.15m,
                                Priedas = 0m,
                                PriedasUzPoilsioIrSventines = 230.28m,
                                Liga2d = 0m,
                                IsVisoPriskaityta = 2259.62m,
                                PajamuMokestis20 = 0m,
                                PajamuMokestis15 = 0m,
                                PajamuMokestisOlandija = 280.33m,
                                Sodra_19 = 440.62m,
                                Sodra_3 = 0m,
                                IsVisoIsskaityta = 720.95m,
                                Ismoketi = 1538.66m,
                                Sodra_1 = 40.0m,
                                SodraIsViso = 480.62m,
                                Bankas = 2173.0m,
                                Baudos = 0m,
                                Likutis = 1221.66m,
                                Dienpinigai = 1856.0m,
                                AdditionalCalculation = 3394.66m,
                                KiekTuriGauti = 3008m,
                            }
                        },
                    },
                    new()
                    {
                        FirstName = "Bjørn",
                        LastName = "Peterson",
                        BirthDate = new DateTime(1995, 1, 15),
                        RegistrationAddress = new Address
                        {
                            Address1 = "222 Main St",
                            City = "Palanga",
                            Zip = "256",
                            Country = "Lithuania"
                        },
                        PhoneNumber = "555-1235",
                        Email = "johnfired@test.com",
                        IsAvailable = false,
                        IsFired = true,
                        ContractData = new Contract
                        {
                            Position = "Pastolių montuotojas",
                            ContractNumber = "CON-002",
                            AcceptionDate = DateTime.UtcNow.AddYears(-2),
                            DismissalDate = DateTime.UtcNow.AddYears(1),
                            AnnualHolidays = 20,
                            FatherHolidays = 5,
                            UnpaidHolidays = 10,
                            TruancyDays = 2,
                            AllowedAbsenceDays = 25
                        },
                        TransportInfo = new TransportInfo
                        {
                            DrivingLicenseNumber = "LJKH6876876",
                            E_100_CardNumber = "123123123",
                            Cars = new List<Car>
                            {
                                new()
                                {
                                    Manufacturer = "Mazda",
                                    Model = "6",
                                    Transmission = "Auto",
                                    BuildYear = "2006",
                                    FuelType = "Diesel",
                                    CarPlateNumber = "GOD777",
                                    Renter = "Work Wise"
                                }
                            },
                            ExpectedKmPerDay = 32
                        },
                        Documents = new List<Document>
                        {
                            new()
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(1),
                            },
                            new()
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(4),
                            },
                            new()
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(8),
                            }
                        },
                        Payrolls = new List<Payroll>
                        {
                            new()
                            {
                                Year = 2024,
                                Month = 1,
                                WorkingDays = 22,
                                WorkingHours = 176,
                                AtlyginimasPagalDS = 2000m,
                                DarboDienu = 15,
                                DarboValandu = 120,
                                Virsvalandziai = 10,
                                SventinesIrPoilsioValandos = 2,
                                PirmaEilesPareigosTaikomasNPD = 100m,
                                NPD = 50m,
                                Atlyginimas = 1800m,
                                Atostogos = 200m,
                                VirsvalandziaiPriskaityta = 50m,
                                Priedas = 500m,
                                PriedasUzPoilsioIrSventines = 30m,
                                Liga2d = 20m,
                                IsVisoPriskaityta = 2600m,
                                PajamuMokestis20 = 100m,
                                PajamuMokestis15 = 20m,
                                PajamuMokestisOlandija = 140m,
                                Sodra_19 = 400m,
                                Sodra_3 = 30m,
                                IsVisoIsskaityta = 690m,
                                Ismoketi = 1910m,
                                Bankas = 3000m,
                                Baudos = 10m,
                                Likutis = -100m,
                                Dienpinigai = 1000m,
                                Sodra_1 = 50m,
                                SodraIsViso = 480m,
                                AdditionalCalculation = 2910m,
                                KiekTuriGauti = 3910m
                            },
                            new()
                            {
                                Year = 2024,
                                Month = 2,
                                WorkingDays = 20,
                                WorkingHours = 159,
                                AtlyginimasPagalDS = 1525.60m,
                                DarboDienu = 10,
                                DarboValandu = 80,
                                Virsvalandziai = 2,
                                SventinesIrPoilsioValandos = 1,
                                PirmaEilesPareigosTaikomasNPD = 0m,
                                NPD = 0m,
                                Atlyginimas = 650.20m,
                                Atostogos = 50m,
                                VirsvalandziaiPriskaityta = 20m,
                                Priedas = 300m,
                                PriedasUzPoilsioIrSventines = 25m,
                                Liga2d = 5m,
                                IsVisoPriskaityta = 1050.20m,
                                PajamuMokestis20 = 10m,
                                PajamuMokestis15 = 5m,
                                PajamuMokestisOlandija = 130.20m,
                                Sodra_19 = 200.19m,
                                Sodra_3 = 10m,
                                IsVisoIsskaityta = 355.39m,
                                Ismoketi = 694.81m,
                                Bankas = 2500m,
                                Baudos = 0m,
                                Likutis = -1805.19m,
                                Dienpinigai = 900m,
                                Sodra_1 = 20m,
                                SodraIsViso = 230.19m,
                                AdditionalCalculation = 1594.81m,
                                KiekTuriGauti = 1794.81m
                            }
                        }
                    },
                    new()
                    {
                        FirstName = "Peter",
                        LastName = "Smith",
                        BirthDate = new DateTime(1985, 5, 20),
                        RegistrationAddress = new Address
                        {
                            Address1 = "456 Elmith St",
                            City = "Klaipeda",
                            Zip = "456",
                            Country = "Lithuania"
                        },
                        PhoneNumber = "555-5678",
                        Email = "petersmith@test.com",
                        IsAvailable = true,
                        IsFired = false,
                        ContractData = new Contract
                        {
                            Position = "Manager",
                            ContractNumber = "CON-003",
                            AcceptionDate = DateTime.UtcNow.AddYears(-1),
                            DismissalDate = DateTime.UtcNow.AddYears(2),
                            AnnualHolidays = 25,
                            FatherHolidays = 5,
                            UnpaidHolidays = 8,
                            TruancyDays = 1,
                            AllowedAbsenceDays = 30
                        },
                        Documents = new List<Document>
                        {
                            new()
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-3),
                                ExpirationDate = DateTime.UtcNow.AddMonths(2),
                            },
                            new()
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(7),
                            },
                            new()
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-3),
                                ExpirationDate = DateTime.UtcNow.AddMonths(1),
                            }
                        },
                        Payrolls = new List<Payroll>
                        {
                            new()
                            {
                                Year = 2024,
                                Month = 2,
                                WorkingDays = 20,
                                WorkingHours = 159,
                                AtlyginimasPagalDS = 2100m,
                                DarboDienu = 18,
                                DarboValandu = 144,
                                Virsvalandziai = 12,
                                SventinesIrPoilsioValandos = 3,
                                PirmaEilesPareigosTaikomasNPD = 200m,
                                NPD = 100m,
                                Atlyginimas = 1900m,
                                Atostogos = 150m,
                                VirsvalandziaiPriskaityta = 72m,
                                Priedas = 600m,
                                PriedasUzPoilsioIrSventines = 36m,
                                Liga2d = 15m,
                                IsVisoPriskaityta = 2773m,
                                PajamuMokestis20 = 150m,
                                PajamuMokestis15 = 25m,
                                PajamuMokestisOlandija = 165.33m,
                                Sodra_19 = 450m,
                                Sodra_3 = 35m,
                                IsVisoIsskaityta = 825.33m,
                                Ismoketi = 1947.67m,
                                Bankas = 3500m,
                                Baudos = 5m,
                                Likutis = -1557.33m,
                                Dienpinigai = 1100m,
                                Sodra_1 = 60m,
                                SodraIsViso = 545m,
                                AdditionalCalculation = 3047.67m,
                                KiekTuriGauti = 4147.67m
                            },
                            new()
                            {
                                Year = 2024,
                                Month = 1,
                                WorkingDays = 22,
                                WorkingHours = 176,
                                AtlyginimasPagalDS = 1800m,
                                DarboDienu = 11,
                                DarboValandu = 88,
                                Virsvalandziai = 5,
                                SventinesIrPoilsioValandos = 2,
                                PirmaEilesPareigosTaikomasNPD = 50m,
                                NPD = 25m,
                                Atlyginimas = 700m,
                                Atostogos = 100m,
                                VirsvalandziaiPriskaityta = 45m,
                                Priedas = 300m,
                                PriedasUzPoilsioIrSventines = 20m,
                                Liga2d = 10m,
                                IsVisoPriskaityta = 1175m,
                                PajamuMokestis20 = 50m,
                                PajamuMokestis15 = 15m,
                                PajamuMokestisOlandija = 110m,
                                Sodra_19 = 225m,
                                Sodra_3 = 20m,
                                IsVisoIsskaityta = 420m,
                                Ismoketi = 755m,
                                Bankas = 2000m,
                                Baudos = 0m,
                                Likutis = -1245m,
                                Dienpinigai = 500m,
                                Sodra_1 = 25m,
                                SodraIsViso = 270m,
                                AdditionalCalculation = 1255m,
                                KiekTuriGauti = 1755m
                            }
                        }
                    },
                    new()
                    {
                        FirstName = "Bob",
                        LastName = "Johnson",
                        BirthDate = new DateTime(1978, 10, 10),
                        RegistrationAddress = new Address
                        {
                            Address1 = "454 Palm St",
                            City = "Vilnius",
                            Zip = "1456",
                            Country = "Lithuania"
                        },
                        PhoneNumber = "555-9012",
                        Email = "bobjonson@test.com",
                        IsAvailable = true,
                        IsFired = false,
                        ContractData = new Contract
                        {
                            Position = "Accountant",
                            ContractNumber = "CON-004",
                            AcceptionDate = DateTime.UtcNow.AddYears(-3),
                            DismissalDate = DateTime.UtcNow.AddYears(1),
                            AnnualHolidays = 18,
                            FatherHolidays = 4,
                            UnpaidHolidays = 12,
                            TruancyDays = 3,
                            AllowedAbsenceDays = 20
                        },
                        Documents = new List<Document>
                        {
                            new()
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-5),
                                ExpirationDate = DateTime.UtcNow.AddMonths(9),
                            },
                            new()
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(9),
                            },
                            new()
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(9),
                            }
                        },
                        Payrolls = new List<Payroll>
                        {
                            new()
                            {
                                Year = 2024,
                                Month = 2,
                                WorkingDays = 20,
                                WorkingHours = 159,
                                AtlyginimasPagalDS = 1900m,
                                DarboDienu = 12,
                                DarboValandu = 96,
                                Virsvalandziai = 8,
                                SventinesIrPoilsioValandos = 3,
                                PirmaEilesPareigosTaikomasNPD = 60m,
                                NPD = 30m,
                                Atlyginimas = 760m,
                                Atostogos = 120m,
                                VirsvalandziaiPriskaityta = 48m,
                                Priedas = 350m,
                                PriedasUzPoilsioIrSventines = 29m,
                                Liga2d = 12m,
                                IsVisoPriskaityta = 1319m,
                                PajamuMokestis20 = 80m,
                                PajamuMokestis15 = 18m,
                                PajamuMokestisOlandija = 132m,
                                Sodra_19 = 251m,
                                Sodra_3 = 25m,
                                IsVisoIsskaityta = 506m,
                                Ismoketi = 813m,
                                Bankas = 2200m,
                                Baudos = 0m,
                                Likutis = -1387m,
                                Dienpinigai = 600m,
                                Sodra_1 = 30m,
                                SodraIsViso = 306m,
                                AdditionalCalculation = 1413m,
                                KiekTuriGauti = 2013m
                            },
                            new()
                            {
                                Year = 2024,
                                Month = 1,
                                WorkingDays = 22,
                                WorkingHours = 176,
                                AtlyginimasPagalDS = 1700m,
                                DarboDienu = 10,
                                DarboValandu = 80,
                                Virsvalandziai = 3,
                                SventinesIrPoilsioValandos = 1,
                                PirmaEilesPareigosTaikomasNPD = 40m,
                                NPD = 20m,
                                Atlyginimas = 680m,
                                Atostogos = 90m,
                                VirsvalandziaiPriskaityta = 40m,
                                Priedas = 250m,
                                PriedasUzPoilsioIrSventines = 15m,
                                Liga2d = 5m,
                                IsVisoPriskaityta = 1080m,
                                PajamuMokestis20 = 45m,
                                PajamuMokestis15 = 10m,
                                PajamuMokestisOlandija = 100m,
                                Sodra_19 = 207m,
                                Sodra_3 = 18m,
                                IsVisoIsskaityta = 380m,
                                Ismoketi = 700m,
                                Bankas = 1500m,
                                Baudos = 0m,
                                Likutis = -800m,
                                Dienpinigai = 450m,
                                Sodra_1 = 20m,
                                SodraIsViso = 245m,
                                AdditionalCalculation = 1150m,
                                KiekTuriGauti = 1600m
                            }
                        }
                    },
                };
                await context.Employees.AddRangeAsync(employees);
                await context.SaveChangesAsync();
            }
        }

        private static readonly Random random = new Random();
    }
}
