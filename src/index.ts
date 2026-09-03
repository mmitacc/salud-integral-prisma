import express from "express";
import dotenv from "dotenv";
import pacienteRouter from "./routers/paciente.router";
import historialRouter from "./routers/historial.router";
import especialidadRouter from "./routers/especialidad.router";
import medicoRouter from "./routers/medico.router";
import consultaRouter from "./routers/consulta.router";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json" assert { type: "json" };

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// Middlewar para autorización de conexión en la web con servidor
app.use(cors());

// Middlewar de validación de entradas Json
app.use(express.json());

// Middleware para documentación con Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
console.log(
  "[Swagger]: Cargado exitosamente en => http://localhost:" +
    PORT +
    "/api-docs",
);

// Endpoints
app.use("/paciente", pacienteRouter);
app.use("/historial", historialRouter);
app.use("/consulta", consultaRouter);
app.use("/especialidad", especialidadRouter);
app.use("/medico", medicoRouter);

// Inicialización del servidor
// console.clear();
app.listen(PORT, () => {
  console.log(
    `[[<API>]]: Corriendo exitosamente en => http://localhost:${PORT}`,
  );
});
