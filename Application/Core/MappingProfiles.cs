using Application.Addresses;
using Application.Contracts;
using Application.Documents;
using Application.Employees;
using Application.Transports;
using AutoMapper;
using Domain;
using Domain.Entities;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<User, Profiles.Profile>()
                .ForMember(
                    d => d.Image,
                    o => o.MapFrom(s => s.Photos.FirstOrDefault(x => x.IsMain).Url)
                );

            CreateMap<Employee, EmployeeDto>().ReverseMap();
            CreateMap<AddressDto, Address>().ReverseMap();
            CreateMap<TransportInfoDto, TransportInfo>().ReverseMap();
            CreateMap<CarDto, Car>().ReverseMap();
            CreateMap<ContractDto, Contract>().ReverseMap();
            CreateMap<DocumentDto, Document>()
                .ForMember(dest => dest.EmployeeId, opt => opt.MapFrom(src => src.EmployeeId))
                .ReverseMap();

            CreateMap<PayrollDto, Payroll>()
                .ForMember(dest => dest.Employee, opt => opt.Ignore())
                .ForMember(dest => dest.EmployeeId, opt => opt.MapFrom(src => src.EmployeeId));

            CreateMap<Payroll, PayrollDto>()
                .ForMember(
                    dest => dest.EmployeeFirstName,
                    opt => opt.MapFrom(src => src.Employee.FirstName)
                )
                .ForMember(
                    dest => dest.EmployeeLastName,
                    opt => opt.MapFrom(src => src.Employee.LastName)
                );
        }
    }
}
