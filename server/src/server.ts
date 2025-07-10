import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";

if (!process.version.startsWith("v22.")) {
  console.error(
    `O app requer Node 22.x, mas você está com ${process.version}`
  );
  process.exit(1);
}

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", async () => {
  return 'OK';
});

app.listen({ port: env.PORT }).then(() => {
  console.log("Server is running on http://localhost:3333");
});
