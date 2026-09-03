-- CreateEnum
CREATE TYPE "EstadoCita" AS ENUM ('PROGRAMADA', 'COMPLETADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('RECEPCIONISTA', 'MEDICO', 'GERENCIA');

-- CreateTable
CREATE TABLE "paciente" (
    "id" SERIAL NOT NULL,
    "nombres" VARCHAR(100) NOT NULL,
    "apellidos" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "masculino" BOOLEAN NOT NULL DEFAULT true,
    "fechanacimiento" DATE NOT NULL,
    "tiposangre" VARCHAR(5) NOT NULL DEFAULT 'RHO+',
    "alergias" TEXT NOT NULL DEFAULT 'Ninguna',
    "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historial" (
    "id" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "motivo" TEXT NOT NULL,
    "antecedentes" TEXT,
    "triaje" TEXT NOT NULL,
    "diagnostico" TEXT,
    "tratamiento" TEXT,
    "receta" TEXT,
    "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "historial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta" (
    "id" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_medico" INTEGER NOT NULL,
    "estado" "EstadoCita" NOT NULL DEFAULT 'PROGRAMADA',
    "fecha" DATE NOT NULL,
    "horario" TIME NOT NULL,
    "costo" DECIMAL(10,2) NOT NULL DEFAULT 50.0,
    "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medico" (
    "id" SERIAL NOT NULL,
    "id_especialidad" INTEGER NOT NULL,
    "nombres" VARCHAR(100) NOT NULL,
    "apellidos" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "masculino" BOOLEAN NOT NULL DEFAULT true,
    "fechanacimiento" DATE NOT NULL,
    "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidad" (
    "id" SERIAL NOT NULL,
    "tipo" VARCHAR(100) NOT NULL,
    "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "role" "Role" NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "nombres" VARCHAR(100) NOT NULL,
    "apellidos" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "registerdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paciente_email_key" ON "paciente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "medico_email_key" ON "medico"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "historial" ADD CONSTRAINT "historial_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_medico_fkey" FOREIGN KEY ("id_medico") REFERENCES "medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medico" ADD CONSTRAINT "medico_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
