using Domain;
using Microsoft.AspNetCore.Identity;

namespace Storage
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any() && !context.Employees.Any())
            {
                var users = new List<User>
                {
                    new User
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com",
                        Position = "Accountant"
                    }
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }

                var employees = new List<Employee>
                {
                    new Employee
                    {
                        FirstName = "John",
                        LastName = "Doe",
                        BirthDate = new DateTime(1990, 1, 15),
                        RegistrationAddress = new Address
                        {
                            Address1 = "123 Future St",
                            City = "Oslo",
                            Zip = "0123",
                            Country = "Norway"
                        },
                        PhoneNumber = "555-1234",
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
                        Documents = new List<Document>
                        {
                            new Document
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(1),
                            },
                            new Document
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-1),
                                ExpirationDate = DateTime.UtcNow.AddMonths(3),
                            },
                            new Document
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-5),
                                ExpirationDate = DateTime.UtcNow.AddMonths(6),
                            }
                        }
                    },
                    new Employee
                    {
                        FirstName = "John",
                        LastName = "Fired",
                        BirthDate = new DateTime(1995, 1, 15),
                        RegistrationAddress = new Address
                        {
                            Address1 = "222 Main St",
                            City = "Palanga",
                            Zip = "256",
                            Country = "Lithuania"
                        },
                        PhoneNumber = "555-1235",
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
                        Documents = new List<Document>
                        {
                            new Document
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(1),
                            },
                            new Document
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(4),
                            },
                            new Document
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(8),
                            }
                        }
                    },
                    new Employee
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
                        IsAvailable = true,
                        IsFired = false,
                        ContractData = new Contract
                        {
                            Position = "Project Manager",
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
                            new Document
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-3),
                                ExpirationDate = DateTime.UtcNow.AddMonths(2),
                            },
                            new Document
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(7),
                            },
                            new Document
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-3),
                                ExpirationDate = DateTime.UtcNow.AddMonths(1),
                            }
                        }
                    },
                    new Employee
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
                            new Document
                            {
                                Title = "Leidimas laikinai gyventi",
                                IssueDate = DateTime.UtcNow.AddYears(-5),
                                ExpirationDate = DateTime.UtcNow.AddMonths(9),
                            },
                            new Document
                            {
                                Title = "Dutch Permit",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(9),
                            },
                            new Document
                            {
                                Title = "Europos sveikatos draudimo kortelė",
                                IssueDate = DateTime.UtcNow.AddYears(-2),
                                ExpirationDate = DateTime.UtcNow.AddMonths(9),
                            }
                        }
                    },
                };

                await context.Employees.AddRangeAsync(employees);
                await context.SaveChangesAsync();
            }
        }
    }
}
