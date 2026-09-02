/*
  Warnings:

  - You are about to drop the column `pago_inicial` on the `cita` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_nac` on the `medico` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_nac` on the `paciente` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_sangre` on the `paciente` table. All the data in the column will be lost.
  - Added the required column `fechanacimiento` to the `medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechanacimiento` to the `paciente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cita" DROP COLUMN "pago_inicial",
ADD COLUMN     "pagoinicial" DECIMAL(10,2) NOT NULL DEFAULT 0.0;

-- AlterTable
ALTER TABLE "medico" DROP COLUMN "fecha_nac",
ADD COLUMN     "fechanacimiento" DATE NOT NULL;

-- AlterTable
ALTER TABLE "paciente" DROP COLUMN "fecha_nac",
DROP COLUMN "tipo_sangre",
ADD COLUMN     "fechanacimiento" DATE NOT NULL,
ADD COLUMN     "tiposangre" VARCHAR(5) NOT NULL DEFAULT 'RHO+';
