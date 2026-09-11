/*
  Warnings:

  - You are about to drop the column `id_medico` on the `consulta` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `medico` table. All the data in the column will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `medico` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_usuario` to the `consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `medico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "consulta" DROP CONSTRAINT "consulta_id_medico_fkey";

-- DropForeignKey
ALTER TABLE "medico" DROP CONSTRAINT "medico_id_usuario_fkey";

-- DropIndex
DROP INDEX "medico_id_usuario_key";

-- AlterTable
ALTER TABLE "consulta" DROP COLUMN "id_medico",
ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "medico" DROP COLUMN "id_usuario",
ADD COLUMN     "password" VARCHAR(100) NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL,
ADD COLUMN     "username" VARCHAR(50) NOT NULL,
ALTER COLUMN "id_especialidad" DROP NOT NULL;

-- DropTable
DROP TABLE "usuario";

-- CreateIndex
CREATE UNIQUE INDEX "medico_username_key" ON "medico"("username");

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
