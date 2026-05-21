# Band & Musician API (Final Project Backend F25)

An Express server organized as a REST API that serves JSON data about bands and musicians. The project uses MySQL as a database and follows a Layered Architecture (Routes, Services, Data).

## Prerequisites

- Node.js installed
- MySQL server running locally

## Installation & Setup

1. **Clone the repository** (or download the code) and navigate to the project directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up the database**:
   Run the SQL code in `database.sql` in your MySQL environment to create the `Musik` database and populate it with seed data.
4. **Configure environment variables**:
   Ensure you have a `.env` file in the root of the project. Adjust the username, password, and port settings to match your local MySQL installation.
5. **Start the server**:
   ```bash
   npm start
   ```
   (Or run `node server.js` directly in the terminal).

## Endpoints

- `GET /api/bands` - Retrieves all bands. Supports optional query parameters `minPrice` and `maxPrice` to filter within a price range (e.g., `/api/bands?minPrice=4000&maxPrice=12000`).
- `GET /api/bands/:id` - Retrieves a specific band.
- `GET /api/bands/:id/members` - Retrieves all musicians and membership details for a specific band.
- `GET /api/members` - Retrieves all musicians with their membership histories. Supports optional query parameters `startDate` and `endDate` to filter by membership dates (e.g., `/api/members?startDate=2010-01-01`).
- `GET /api/members/:id` - Retrieves a specific musician.
