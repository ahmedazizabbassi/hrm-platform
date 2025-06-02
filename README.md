# Human Resources Management Platform

A comprehensive monorepo project for managing human resources processes, built with Next.js, Express.js, and MongoDB.

## Project Structure

This project uses TurboRepo for monorepo management with the following structure:

```
hrm-platform/
├── apps/
│   ├── frontend/         # Next.js web application
│   └── backend/          # Express.js REST API server
├── packages/             # Shared packages
│   ├── eslint-config/    # ESLint configurations
│   ├── typescript-config/# TypeScript configurations
│   └── ui/               # Shared UI components
```

## Tech Stack

- **Frontend**: Next.js with Tailwind CSS
- **Backend**: Express.js REST API
- **Database**: MongoDB with Mongoose for schema modeling
- **Authentication**: JWT-based authentication

## Modules

The platform includes the following modules:

1. **Employee Management**: CRUD operations for employee profiles
2. **Leave Management**: Request, approve, and track employee leaves
3. **Recruitment**: Job offers, applications, and candidate tracking
4. **Contract Management**: Employee contracts and templates
5. **Payroll**: Salary calculation, benefits, and deductions
6. **Settings**: Departments, grades, and positions management

## User Roles

- **Recruiter**: Manages job offers, applications, and candidate evaluations
- **Relationship Officer**: Manages employees, approves leave, manages departments/grades/positions
- **Cashier**: Validates job offers, creates contracts, manages payroll
- **Employee**: Views personal information, requests leave
- **Candidate**: Applies for job offers

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- PNPM package manager
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Set up environment variables:
   - Create `.env` file in the `apps/backend` directory with:
     ```
     PORT=5001
     MONGO_URI=mongodb://localhost:27017/hrm_platform
     JWT_SECRET=your_jwt_secret
     ```

### Development

Run the development servers:

```
pnpm run dev
```

This will start both the frontend and backend in development mode.

## API Routes

The backend API includes the following route groups:

- `/api/auth`: Authentication endpoints
- `/api/employees`: Employee management
- `/api/leaves`: Leave request and approval
- `/api/recruitment`: Job offers and applications
- `/api/contracts`: Contract management
- `/api/payroll`: Salary, benefits, and deductions
- `/api/settings`: Departments, grades, and positions

## Frontend Pages

The frontend includes pages for:

- Authentication (login)
- Dashboard overview
- Employee management
- Leave management
- Recruitment (job offers and applications)
- Contract management
- Payroll management
- Settings management

## Project Status

This is a scaffolded project with placeholder implementations for all major modules. It includes:

- Complete monorepo structure
- Backend routes, controllers, and models for all modules
- Frontend pages and components for all modules
- Authentication and role-based authorization middleware
- Placeholder CRUD operations for all entities

## Next Steps

To complete the implementation:

1. Connect to a real MongoDB database
2. Implement actual business logic in controllers
3. Add form validation and error handling
4. Implement real authentication flow
5. Add tests for critical functionality
6. Deploy to production environment
