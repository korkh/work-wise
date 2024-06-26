using Application.Addresses;
using Application.BusinessTrips;
using Application.Contracts;
using Application.Documents;
using Application.Employees;
using Application.EmployeeTimeCards;
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
            CreateMap<Employee, EmployeeDto>()
                .ForMember(dest => dest.RegistrationAddress, opt => opt.MapFrom(src => src.RegistrationAddress))
                .ReverseMap();

            CreateMap<BusinessTripDto, BusinessTrip>()
                .ForMember(dest => dest.EmployeeId, opt => opt.MapFrom(src => src.EmployeeId))
                .ForMember(dest => dest.Employee, opt => opt.Ignore())
                .ReverseMap();

            CreateMap<AddressDto, Address>().ReverseMap();
            CreateMap<TransportInfoDto, TransportInfo>().ReverseMap();
            CreateMap<CarDto, Car>().ReverseMap();
            CreateMap<ContractDto, Contract>().ReverseMap();
            CreateMap<DocumentDto, Document>()
                .ForPath(dest => dest.Employee.Id, opt => opt.MapFrom(src => src.EmployeeId))
                .ForMember(dest => dest.Employee, opt => opt.Ignore())
                .ReverseMap();
            CreateMap<EmployeeTimeCard, EmployeeTimeCardDto>()
                .ForPath(dest => dest.EmployeeLastName, opt => opt.MapFrom(src => src.Employee.LastName))
                .ReverseMap();
            CreateMap<WorkingState, WorkingStateDto>().ReverseMap();
            CreateMap<PayrollDto, Payroll>()
                .ForPath(dest => dest.Employee.Id, opt => opt.MapFrom(src => src.EmployeeId))
                .ReverseMap();
        }
    }
}
