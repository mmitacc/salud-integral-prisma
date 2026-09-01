import { Router } from "express";
import {
  getAllPaciente,
  postPaciente,
} from "../controllers/paciente.controller";
import { PacienteFindManySchema, PacienteCreateInputObjectSchema } from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllPaciente, validateParamsSchema(PacienteFindManySchema));
router.post("/", validateBodySchema(PacienteCreateInputObjectSchema), postPaciente);

export default router;
