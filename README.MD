# Work-Wise Lietuva Application Documentation

Welcome to the Business Control Web Application! This application is designed to provide accountants and administrators with a comprehensive tool to manage and control their business information efficiently. The application streamlines various administrative and financial tasks, ensuring data accuracy and easy access to critical business data.

## Table of Contents

- [Application Overview](#application-overview)
- [Technologies Used](#technologies-used)
- [Application Setup](#application-setup)
- [API Endpoints](#api-endpoints)
- [User Authentication](#user-authentication)
- [User Profile Management](#user-profile-management)
- [Followers](#followers)
- [Photos](#photos)
- [Trainings](#trainings)
- [Paging and Sorting](#paging-and-sorting)
- [Running the Application](#running-the-application)
- [Demo](#demo)

## Application Overview

Welcome to the documentation for the Work-Wise Lietuva application. Work-Wise Lietuva is a web application speccially developed for Work-Wise company for accountants, admins (HR) and managers to control employee accounts and information.

## Technologies Used

Work-Wise Lituva is built using a combination of technologies, including:

### .NET Backend

- MediatR.Extensions.Microsoft.DependencyInjection
- AutoMapper.Extensions.Microsoft.DependencyInjection
- Microsoft.AspNetCore.Identity.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Design
- System.IdentityModel.Tokens.Jwt
- Microsoft.AspNetCore.Authentication.JwtBearer
- FluentValidation.AspNetCore
- NWebsec.AspNetCore.Middleware
- Microsoft.EntityFrameworkCore.Sqlite
- Npgsql.EntityFrameworkCore.PostgreSQL
- SendGrid
- CloudinaryDotNet
- Microsoft.AspNetCore.Authorization

### Frontend (Using Vite)

- React
- React-DatePicker
- Redux Toolkit
- RTK Query
- Axios
- i18next
- Storybook
- SASS
- UUID

### Dev Dependencies

- Various packages for linting, validation, and building, including TypeScript, Eslint, Formik, MobX, React-Router, and more.

## Application Setup

1. **Backend (.NET)**: Ensure that you have .NET SDK installed. You can use Visual Studio or command-line tools to work with .NET projects.

2. **Frontend (Vite)**: For the frontend, ensure that you have Node.js and npm installed. You can install Vite using npm.

3. **Database**: The application uses a database (SQL or PostgreSQL) for storage. You should set up the database and configure the connection in the backend.

## API Endpoints

The Work-Wise Lietuva application provides a set of API endpoints to interact with its features. Here are some of the key endpoints:

### Account Controller

- **POST /api/account/login**: User login with email and password.
- **POST /api/account/register**: User registration with email, username, and password.
- **POST /api/account/verifyEmail**: Verify a user's email with a token.
- **GET /api/account/resendEmailConfirmationLink**: Resend the email verification link.
- **GET /api/account**: Get the current user's information.
- **POST /api/account/refreshToken**: Refresh the user's token.

### Photos Controller

- **POST /api/photos**: Upload a photo.
- **DELETE /api/photos/{id}**: Delete a photo.
- **POST /api/photos/{id}/setMain**: Set a photo as the main photo.

### Profiles Controller

- **GET /api/profiles/{userName}**: Get a user's profile information.
- **PUT /api/profiles**: Edit a user's profile.

### Employees Controller

- **GET /api/employees**: Get a list of employees with optional paging and sorting.
- **GET /api/employees/{id}**: Get a specific employee by ID.
- **POST /api/employees**: Create a new employee.
- **PUT /api/employees/{id}**: Edit a employee.
- **DELETE /api/employees/{id}**: Delete a employee.

## User Authentication

Work-Wise Lietuva provides user authentication using email and password. Users can register, verify their email, log in, and refresh their authentication tokens. The application also includes mechanisms to resend email verification links.

## User Profile Management

Users can manage their profiles by viewing, editing, and uploading photos. Profiles can include a display name, email, username, and photos.

## Photos

Users can upload and manage photos in their profiles. They can set a photo as the main photo and delete photos as needed.

## Employees

Employees are a central feature of Work-Wise Lietuva. Admins can create, edit, and delete employee accounts. The application supports advanced features like pagination and sorting for employees listings. Note: Admins dont have access to finacial parts! Only accountants. Accountants have no right to create, edit or delete employee's data except financial parts.

## Paging and Sorting

For a better user experience, the application includes support for pagination and sorting when viewing lists of trainings. Users can efficiently navigate through large datasets.

## Running the Application

To run the Work-Wise Lietuva application, follow these steps:

1. **Backend (.NET)**:

   - Navigate to the backend directory of the application.
   - Configure the database connection in the `appsettings.json` file.
   - Run the following command to start the backend:

     ```
     dotnet run
     ```

     or

     ```
     dotnet watch
     ```

2. **Frontend (Vite)**:

   - Navigate to the frontend directory of the application.
   - Install the necessary dependencies by running:
     ```
     npm install
     ```
   - Start the frontend development server with:
     ```
     npm run dev
     ```

3. **Access the Application**:
   - Once both the backend and frontend are running, you can access the application in your web browser.

## Demo

You can explore a live demo of the Work-Wise Lietuva application at [here](https://work-wise.fly.dev). The demo allows you to test the application with the provided login settings:

**Profile 1 Accountant**

- Email: zivile@test.com
- Password: Pa$$w0rd

**Profile 2 Admin**

- Email: peter@test.com
- Password: Pa$$w0rd

**Profile 3 Manager**

- Email: evaldas@test.com
- Password: Pa$$w0rd

This concludes the documentation for the Work-Wise Lietuva application. Please refer to the application's source code and detailed documentation for more specific information and instructions on usage.
