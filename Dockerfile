FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app
# Exposing port mentioned in fly.toml file
EXPOSE 8080 

# copy .csproj and restore as distinct layers
COPY "Work-wise.sln" "Work-wise.sln"
COPY "API/API.csproj" "API/API.csproj"
COPY "Application/Application.csproj" "Application/Application.csproj"
COPY "Storage/Storage.csproj" "Storage/Storage.csproj"
COPY "Domain/Domain.csproj" "Domain/Domain.csproj"
COPY "Infrastructure/Infrastructure.csproj" "Infrastructure/Infrastructure.csproj"

# Run restore
RUN dotnet restore "Work-wise.sln"

# copy everything else and build
COPY . .
WORKDIR /app
RUN dotnet publish -c Release -o out

# build a runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "API.dll"]