import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();

router.post(
  "/register",
  // #swagger.tags = ['Autenticación']
  // #swagger.summary = 'Registrar un nuevo usuario'
  register,
);
router.post(
  "/login",
  // #swagger.tags = ['Autenticación']
  // #swagger.summary = 'Iniciar sesión en el sistema'
  login,
);

export default router;
