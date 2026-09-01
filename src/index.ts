import express from "express";
import dotenv from "dotenv";
import pacienteRouter from "./routers/paciente.router";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use(express.json());
app.use("/paciente", pacienteRouter);
console.clear();
app.listen(PORT, () => {
  console.log(`Api corriendo en... http://localhost:${PORT}`);
});
