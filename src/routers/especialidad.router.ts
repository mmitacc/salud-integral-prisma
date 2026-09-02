import { Router } from "express";
import {
  deleteEspecialidad,
  getAllEspecialidades,
  getEspecialidadById,
  postEspecialidad,
  putEspecialidad,
} from "../controllers/especialidad.controller";
import {
  EspecialidadCreateInputObjectSchema,
  EspecialidadUpdateInputObjectSchema,
  EspecialidadWhereUniqueInputObjectSchema,
} from "../../prisma/generated-zod/schemas";
import {
  validateBodySchema,
  validateParamsSchema,
} from "../middlewares/validate.schema";

const router = Router();

router.get("/", getAllEspecialidades);
router.get(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  getEspecialidadById,
);
router.post(
  "/",
  validateBodySchema(EspecialidadCreateInputObjectSchema),
  postEspecialidad,
);
router.put(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  validateBodySchema(EspecialidadUpdateInputObjectSchema),
  putEspecialidad,
);
router.delete(
  "/:id",
  validateParamsSchema(EspecialidadWhereUniqueInputObjectSchema),
  deleteEspecialidad,
);

export default router;
