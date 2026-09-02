/*
  Warnings:

  - You are about to drop the column `creado` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `creado` on the `especialidad` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `historial` table. All the data in the column will be lost.
  - You are about to drop the column `creado` on the `medico` table. All the data in the column will be lost.
  - You are about to drop the column `creado` on the `paciente` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cita" ADD COLUMN     "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "consulta" DROP COLUMN "creado",
ADD COLUMN     "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "especialidad" DROP COLUMN "creado",
ADD COLUMN     "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "historial" DROP COLUMN "fecha",
ADD COLUMN     "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "medico" DROP COLUMN "creado",
ADD COLUMN     "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "paciente" DROP COLUMN "creado",
ADD COLUMN     "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
