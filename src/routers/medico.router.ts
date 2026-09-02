import { Router } from "express";
import {
  deleteMedico,
  getAllMedico,
  getAllMedicoDeleted,
  getMedicoById,
  postMedico,
  putMedico,
  softDeleteMedico,
} from "../controllers/medico.controller";
import {
  MedicoWhereUniqueInputObjectSchema,
  MedicoUncheckedCreateInputObjectSchema,
  MedicoUncheckedUpdateInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
  validateQuerySchema,
} from "../middlewares/validate.schema";
import {
  FiltrarEspecialidadQuerySchema,
  RangoFechasQuerySchema,
} from "../schemas/querys.schema";

const router = Router();

router.get(
  "/",
  validateQuerySchema(FiltrarEspecialidadQuerySchema),
  getAllMedico,
);
router.get(
  "/admin",
  validateQuerySchema(RangoFechasQuerySchema),
  getAllMedicoDeleted,
);
router.get(
  "/:id",
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  getMedicoById,
);
router.post(
  "/",
  validateBodySchema(MedicoUncheckedCreateInputObjectSchema),
  postMedico,
);
router.put(
  "/:id",
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  validateBodySchema(MedicoUncheckedUpdateInputObjectSchema),
  putMedico,
);
router.delete(
  "/:id",
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  softDeleteMedico,
);
router.delete(
  "/admin/:id",
  validateParamsSchema(MedicoWhereUniqueInputObjectSchema),
  deleteMedico,
);

export default router;
