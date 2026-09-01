import { Router } from "express";
import {
  getAllPaciente,
  postPaciente,
} from "../controllers/paciente.controller";
import { PacienteFindManySchema } from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllPaciente);
router.post("/", postPaciente, validateBodySchema(PacienteFindManySchema));

export default router;
