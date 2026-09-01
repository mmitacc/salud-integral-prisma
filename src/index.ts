import express from "express";
import dotenv from "dotenv";
import pacienteRouter from "./routers/paciente.router";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json" assert { type: "json" };

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
console.log(
  "[Swagger]: Cargado exitosamente en => http://localhost:" +
    PORT +
    "/api-docs",
);

app.use("/paciente", pacienteRouter);
// console.clear();
app.listen(PORT, () => {
  console.log(
    `[[<API>]]: Corriendo exitosamente en => http://localhost:${PORT}`,
  );
});
