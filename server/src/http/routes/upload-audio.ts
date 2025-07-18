import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { generateEmbeddings, transcribeAudio } from "../../services/gemini.ts";
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

      const audio = await request.file(); // Streams

      if (!audio) {
        throw new Error("No audio file uploaded.");
      }

      const audioBuffer = await audio.toBuffer();
      const audioAsBase64 = audioBuffer.toString("base64");

      // 1. Transcrever o áudio

      const transcription = await transcribeAudio(
        audioAsBase64,
        audio.mimetype
      );

      // 2. Gerar o vetor semântico (embeddings)

      const embeddings = await generateEmbeddings(transcription);

      // 3. Salvar os vetores no banco de dados

      const result = await db
        .insert(schema.audioChunks)
        .values({
          roomId,
          transcription,
          embeddings,
        })
        .returning();

      const chunk = result[0];

      if (!chunk) {
        throw new Error("Failed to save audio chunk.");
      }

      return reply.status(201).send({ chunkId: chunk.id });
    }
  );
};
