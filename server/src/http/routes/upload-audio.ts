import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { th } from "zod/locales";

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/audio",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;

      const audio = await request.file();

      if(!audio) {
       throw new Error("No audio file uploaded.");
      }

      // 1. Transcrever o áudio
      // 2. Gerar o vetor semântico (embeddings)
      // 3. Salvar os vetores no banco de dados
    }
  );
};
