# NLW Agents

> A Q&A rooms application powered by audio transcription, embeddings, and AI-driven responses.

## Overview

NLW Agents is a platform that allows users to create interactive Q&A rooms, ask questions, and provide answers via audio. The backend transcribes audio answers using the Google Gemini API, generates embeddings to facilitate AI-driven responses, and stores all data in a PostgreSQL database.

## Repository Structure

- [Server](./server/README.md): Backend service built with Node.js, Fastify, and Drizzle ORM.
- [Web](./web/README.md): Frontend application developed with React, Vite, and Tailwind CSS.

## Technologies

### Backend

- **Node.js** >= 22.17.0  
- **TypeScript**  
- **Fastify**  
- **Drizzle ORM** for PostgreSQL  
- **Google Gemini API** (audio transcription & embeddings)  
- **Zod** for schema validation  

### Frontend

- **React** 19  
- **Vite**  
- **TypeScript**  
- **Tailwind CSS**  
- **React Query** for data fetching  
- **React Hook Form** for form handling  
- **Zod** for form validation  

## Features

- Create and join Q&A rooms  
- Ask questions and answer via audio recording  
- Audio transcription using Google Gemini API  
- Embedding generation for AI-driven responses  
- Persistence of transcripts, questions, and responses in the database  

## Contact

- **Karen Gomes** – [GitHub](https://github.com/karenngomes)  
- Email: karenngomes.dev@gmail.com  
