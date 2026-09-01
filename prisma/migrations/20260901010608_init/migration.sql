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
    "fecha_nac" DATE NOT NULL,
    "tipo_sangre" VARCHAR(5) NOT NULL DEFAULT 'RHO+',
    "alergias" TEXT NOT NULL DEFAULT 'Ninguna',

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historial" (
    "id" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motivo" TEXT NOT NULL,
    "antecedentes" TEXT,
    "triaje" TEXT NOT NULL,
    "diagnostico" TEXT,
    "tratamiento" TEXT,
    "receta" TEXT,

    CONSTRAINT "historial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cita" (
    "id" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" "EstadoCita" NOT NULL DEFAULT 'PROGRAMADA',

    CONSTRAINT "cita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consulta" (
    "id" SERIAL NOT NULL,
    "id_cita" INTEGER NOT NULL,
    "id_medico" INTEGER NOT NULL,
    "fecha" DATE NOT NULL,
    "horario" TIME NOT NULL,

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
    "fecha_nac" DATE NOT NULL,

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidad" (
    "id" SERIAL NOT NULL,
    "tipo" VARCHAR(100) NOT NULL,

    CONSTRAINT "especialidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "role" "Role" NOT NULL,
    "nombres" VARCHAR(100) NOT NULL,
    "apellidos" VARCHAR(100) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

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
ALTER TABLE "cita" ADD CONSTRAINT "cita_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_cita_fkey" FOREIGN KEY ("id_cita") REFERENCES "cita"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "consulta" ADD CONSTRAINT "consulta_id_medico_fkey" FOREIGN KEY ("id_medico") REFERENCES "medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medico" ADD CONSTRAINT "medico_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "especialidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
