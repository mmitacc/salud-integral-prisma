import { Prisma } from "../../prisma/generated-client/client";

interface ErrorResponse {
  statusCode: number;
  payload: {
    status: string;
    error: string;
    detalles?: string;
  };
}

export const procesarErrorPrisma = (error: unknown): ErrorResponse => {
  // 1. Errores de Validación de Datos (Tu error actual)
  if (error instanceof Prisma.PrismaClientValidationError) {
    return {
      statusCode: 400,
      payload: {
        status: "error",
        error: "Datos inválidos",
        detalles: (error as Error).message,
      },
    };
  }

  // 2. Errores Crudos de Base de Datos (Restricciones, duplicados, llaves foráneas)
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002": // Registro duplicado (ej. email único)
        return {
          statusCode: 409,
          payload: {
            status: "error",
            error: "Registro duplicado",
            detalles: `El valor asignado al campo [${(error.meta?.target as string[])?.join(", ")}] ya existe.`,
          },
        };
      case "P2003": // Fallo en Llave Foránea (ej. id_paciente no existe)
        return {
          statusCode: 400,
          payload: {
            status: "error",
            error: "Conflicto de relación",
            detalles:
              "El registro asociado (ID de llave foránea) no existe en el sistema.",
          },
        };
      case "P2025": // Registro no encontrado al hacer Update/Delete
        return {
          statusCode: 404,
          payload: {
            status: "error",
            error: "No encontrado",
            detalles:
              "El registro que intentas modificar o eliminar no existe.",
          },
        };
      default:
        return {
          statusCode: 500,
          payload: {
            status: "error",
            error: `Error en base de datos (Código: ${error.code})`,
          },
        };
    }
  }

  // 3. Fallos Críticos de Conexión o Inicialización
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return {
      statusCode: 503,
      payload: {
        status: "error",
        error: "Servicio temporalmente no disponible",
        detalles:
          "No se pudo establecer la conexión con el servidor de la base de datos.",
      },
    };
  }

  // 4. Errores genéricos
  if (error instanceof Error) {
    return {
      statusCode: 500,
      payload: { status: "error", error: error.message },
    };
  }

  return {
    statusCode: 500,
    payload: { status: "error", error: "Error desconocido en el servidor" },
  };
};

export default procesarErrorPrisma;
