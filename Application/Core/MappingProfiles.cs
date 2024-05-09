using Application.Addresses;
using Application.Contracts;
using Application.Documents;
using Application.Employees;
using Application.Payrolls;
using Application.Transports;
using AutoMapper;
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

            CreateMap<Employee, EmployeeDto>()
                .ForMember(dest => dest.RegistrationAddress, opt => opt.MapFrom(src => src.RegistrationAddress))
                .ReverseMap();
            CreateMap<AddressDto, Address>().ReverseMap();
            CreateMap<TransportInfoDto, TransportInfo>().ReverseMap();
            CreateMap<CarDto, Car>().ReverseMap();
            CreateMap<ContractDto, Contract>().ReverseMap();
            CreateMap<DocumentDto, Document>()
                .ForMember(dest => dest.EmployeeId, opt => opt.MapFrom(src => src.EmployeeId))
                .ReverseMap();

            CreateMap<PayrollDto, Payroll>()
                .ForPath(dest => dest.Employee.FirstName, opt => opt.MapFrom(src => src.Employee.FirstName)).ForPath(dest => dest.Employee.LastName, opt => opt.MapFrom(src => src.Employee.LastName)).ReverseMap();
        }
    }
}
