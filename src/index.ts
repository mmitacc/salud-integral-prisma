import express from "express";
import dotenv from "dotenv";
import pacienteRouter from "./routers/paciente.router";
import historialRouter from "./routers/historial.router";
import especialidadRouter from "./routers/especialidad.router";
import medicoRouter from "./routers/medico.router";
import consultaRouter from "./routers/consulta.router";
import authRouter from "./routers/auth.router";
import usuarioRouter from "./routers/usuario.router";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json" assert { type: "json" };
import { verifyToken } from "./middlewares/auth.middleware";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// Middlewar para autorización de conexión en la web con servidor
app.use(cors());

// Middlewar de validación de entradas Json
app.use(express.json());

// Middleware para documentación con Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ENDPOINTS
app.use("/api/auth", authRouter);
app.use(
  "/api/consulta",
  verifyToken,
  /* #swagger.security = [{ "bearerAuth": [] }] */
  consultaRouter,
);
app.use(
  "/api/paciente",
  verifyToken,
  /* #swagger.security = [{ "bearerAuth": [] }] */
  pacienteRouter,
);
app.use(
  "/api/medico",
  verifyToken,
  /* #swagger.security = [{ "bearerAuth": [] }] */
  medicoRouter,
);
app.use(
  "/api/historial",
  verifyToken,
  /* #swagger.security = [{ "bearerAuth": [] }] */
  historialRouter,
);
app.use(
  "/api/especialidad",
  verifyToken,
  /* #swagger.security = [{ "bearerAuth": [] }] */
  especialidadRouter,
);
app.use(
  "/api/usuario",
  verifyToken,
  /* #swagger.security = [{ "bearerAuth": [] }] */
  usuarioRouter,
);

// Inicialización del servidor
console.clear();
app.listen(PORT, () => {
  console.log(
    `[[<API>]]: Corriendo exitosamente en => http://localhost:${PORT}`,
  );
  console.log(
    "[Swagger]: Docummentación Cargada exitosamente en => http://localhost:" +
      PORT +
      "/api-docs",
  );
});
