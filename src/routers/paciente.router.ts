import { Router } from "express";
import {
  deletePaciente,
  getAllPaciente,
  getPacienteById,
  postPaciente,
  putPaciente,
  softDeletePaciente,
} from "../controllers/paciente.controller";
import {
  PacienteWhereUniqueInputObjectSchema,
  PacienteUncheckedCreateInputObjectSchema,
  PacienteUncheckedUpdateInputObjectSchema,
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
  validateBodySchema(PacienteUncheckedCreateInputObjectSchema),
  postPaciente,
);
router.put(
  "/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  validateBodySchema(PacienteUncheckedUpdateInputObjectSchema),
  putPaciente,
);
router.delete(
  "/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  deletePaciente,
);
router.delete(
  "/soft/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  softDeletePaciente,
);

export default router;
