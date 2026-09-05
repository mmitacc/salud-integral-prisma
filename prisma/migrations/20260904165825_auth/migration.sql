/*
  Warnings:

  - You are about to drop the column `activo` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `apellidos` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `nombres` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `telefono` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_usuario]` on the table `medico` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_usuario` to the `medico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medico" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "activo",
DROP COLUMN "apellidos",
DROP COLUMN "nombres",
DROP COLUMN "telefono";

-- CreateIndex
CREATE UNIQUE INDEX "medico_id_usuario_key" ON "medico"("id_usuario");

-- AddForeignKey
ALTER TABLE "medico" ADD CONSTRAINT "medico_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
