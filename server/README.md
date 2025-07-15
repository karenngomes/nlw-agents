# NLW Agents Server

> Backend of the NLW Agents application, built with Node.js, Fastify, and Drizzle ORM.

## About

This is the server for the NLW Agents project.  
Built with TypeScript and Node.js, it uses the Fastify framework to create a high-performance REST API and Drizzle ORM for PostgreSQL database management. It also integrates the Google Gemini API for AI features.

## Installation

1. Clone the repository and navigate to the `server` directory:
   ```bash
   git clone git@github.com:karenngomes/nlw-agents.git
   cd nlw-agents/server
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
2. Edit the `.env` file and configure:
   ```env
   PORT=4000
   DATABASE_URL=postgres://username:password@localhost:5432/nlw_agents
   GEMINI_API_KEY=your_gemini_api_key
   ```

## Usage

- **Development** (with hot-reload):
  ```bash
  npm run dev
  # or
  yarn dev
  ```
- **Production**:
  ```bash
  npm start
  # or
  yarn start
  ```
- **Database Commands**:
  ```bash
  npm run db:generate   # Generate migrations
  npm run db:migrate    # Apply migrations
  npm run db:seed       # Seed the database
  ```
- **Interactive Studio**:
  ```bash
  npx drizzle-kit studio
  ```
  Launches Drizzle Kit Studio, a visual interface for exploring and editing your database schema, running queries, and inspecting data.

## API Endpoints Examples

- `GET /health`  
- `POST /rooms`  
- `GET /rooms/:roomId`  
- `POST /rooms/:roomId/audio`  

## Contribution

1. **Fork** this repository  
2. Create a **branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "feat: description of your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request**.

## Contact

- **Karen Gomes** – [GitHub](https://github.com/karenngomes)  
- Email: karenngomes.dev@gmail.com  
