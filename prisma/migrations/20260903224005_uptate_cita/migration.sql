/*
  Warnings:

  - You are about to drop the column `fecha` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `horario` on the `consulta` table. All the data in the column will be lost.
  - Added the required column `citadate` to the `consulta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "consulta" DROP COLUMN "fecha",
DROP COLUMN "horario",
ADD COLUMN     "citadate" TIMESTAMP NOT NULL;
