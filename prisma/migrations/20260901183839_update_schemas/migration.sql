-- AlterTable
ALTER TABLE "cita" ADD COLUMN     "pago_inicial" DECIMAL(10,2) NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "consulta" ADD COLUMN     "costo" DECIMAL(10,2) NOT NULL DEFAULT 50.0;
