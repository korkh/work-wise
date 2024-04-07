using Application.Contracts;
using Application.Documents;
using Application.Employees;
using AutoMapper;
using Domain;

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
            CreateMap<Employee, EmployeeDto>();
            CreateMap<Contract, ContractDto>();
            CreateMap<Document, DocumentsDto>();
        }
    }
}
