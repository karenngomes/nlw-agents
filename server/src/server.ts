import { fastify } from "fastify";
import { sql } from "./db/connection.ts";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { createRoomRoute } from "./http/routes/create-room.ts";
import { getRoomQuestionsRoute } from "./http/routes/get-room-questions.ts";
import { createQuestioRoute } from "./http/routes/create-question.ts";

if (!process.version.startsWith("v22.")) {
  console.error(`O app requer Node 22.x, mas você está com ${process.version}`);
  process.exit(1);
}

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", async () => {
  return "OK";
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createQuestioRoute)

app.listen({ port: env.PORT });
