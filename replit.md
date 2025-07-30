# Gaurav Rajput Portfolio - Full Stack Application

## Overview

This is a full-stack portfolio application showcasing Gaurav Rajput's professional profile, skills, and projects. The application is built using a modern tech stack with a React frontend, Express.js backend, and PostgreSQL database integration. It's designed as a single-page application (SPA) with smooth scrolling navigation and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Uses Vite middleware integration for development
- **Storage**: In-memory storage implementation with interface for database operations
- **Build Process**: ESBuild for server-side bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database serverless driver

## Key Components

### Client-Side Components
1. **Portfolio Sections**: Modular components for hero, about, skills, experience, projects, and contact sections
2. **Navigation**: Smooth-scrolling navigation with mobile responsiveness
3. **UI Components**: Comprehensive Shadcn/UI component library including forms, dialogs, cards, and interactive elements
4. **Data Layer**: Static portfolio data with TypeScript interfaces

### Server-Side Components
1. **Express Server**: Main application server with middleware setup
2. **Route Registration**: Placeholder for API route registration
3. **Storage Interface**: Abstract storage layer with in-memory implementation
4. **Development Tools**: Vite integration for hot module replacement

### Shared Components
1. **Database Schema**: Drizzle schema definitions with Zod validation
2. **Type Definitions**: Shared TypeScript types between client and server

## Data Flow

1. **Static Content**: Portfolio data is stored in static TypeScript files and rendered client-side
2. **Database Operations**: Storage interface provides abstraction for CRUD operations
3. **API Communication**: TanStack React Query handles client-server communication
4. **Development**: Vite serves the frontend and proxies API requests to Express server
5. **Production**: Static frontend assets served with Express handling API routes

## External Dependencies

### Core Dependencies
- **UI Framework**: React, Radix UI primitives, Lucide React icons
- **Database**: Drizzle ORM, Neon Database serverless, PostgreSQL session store
- **Development**: Vite, ESBuild, TypeScript, Tailwind CSS
- **Utilities**: Class Variance Authority, clsx, date-fns, nanoid

### Development Tools
- **Replit Integration**: Development banner and cartographer plugin
- **Error Handling**: Runtime error modal for development
- **Type Checking**: Comprehensive TypeScript configuration

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend development
- Express server with tsx for TypeScript execution
- Database schema pushing via Drizzle Kit

### Production Build
1. **Frontend**: Vite builds optimized static assets to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Migrations managed through Drizzle Kit
4. **Environment**: Production mode serves static files through Express

### Configuration
- **Path Aliases**: Configured for clean imports (@, @shared, @assets)
- **Asset Management**: Static assets served from attached_assets directory
- **Environment Variables**: DATABASE_URL required for database connection
- **TypeScript**: Strict mode enabled with comprehensive type checking

The application follows a monorepo structure with clear separation between client, server, and shared code, making it maintainable and scalable for future enhancements.