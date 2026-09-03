import { Router } from "express";
import {
  deletePaciente,
  getAllPaciente,
  getAllPacienteDeleted,
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
  validateQuerySchema,
} from "../middlewares/validate.schema";
import { RangoFechasQuerySchema } from "../schemas/querys.schema";

const router = Router();

router.get("/", getAllPaciente);
router.get(
  "/admin",
  validateQuerySchema(RangoFechasQuerySchema),
  getAllPacienteDeleted,
);
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
  softDeletePaciente,
);
router.delete(
  "/admin/:id",
  validateParamsSchema(PacienteWhereUniqueInputObjectSchema),
  deletePaciente,
);

export default router;
