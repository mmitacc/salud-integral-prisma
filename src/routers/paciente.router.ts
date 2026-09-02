import { Router } from "express";
import {
  deletePaciente,
  getAllPaciente,
  getPacienteById,
  postPaciente,
  putPaciente,
} from "../controllers/paciente.controller";
import {
  PacienteCreateInputObjectSchema,
  PacienteUpdateInputObjectSchema,
  PacienteWhereUniqueInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllPaciente);
router.get(
  "/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  getPacienteById,
);
router.post(
  "/",
  validateBodySchema(PacienteCreateInputObjectSchema),
  postPaciente,
);
router.put(
  "/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  validateBodySchema(PacienteUpdateInputObjectSchema),
  putPaciente,
);
router.delete(
  "/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  deletePaciente,
);

export default router;
