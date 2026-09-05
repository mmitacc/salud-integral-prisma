import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/authorize.middleware";

const router = Router();

router.post(
  "/login",
  // #swagger.tags = ['Autenticación']
  // #swagger.summary = 'Iniciar sesión en el sistema'
  login,
);

router.post(
  "/register",
  verifyToken,
  authorize("ADMIN", "GERENCIA"),
  /* #swagger.security = [{ "bearerAuth": [] }] */
  // #swagger.tags = ['Autenticación']
  // #swagger.summary = 'Registrar un nuevo usuario'
  register,
);
export default router;
