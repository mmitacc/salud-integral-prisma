-- =============================================================================
-- 1. INSERTAR ESPECIALIDADES (12 registros)
-- =============================================================================
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (1, 'Pediatría', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (2, 'Cardiología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (3, 'Dermatología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (4, 'Ginecología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (5, 'Neurología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (6, 'Oftalmología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (7, 'Traumatología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (8, 'Psiquiatría', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (9, 'Urología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (10, 'Gastroenterología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (11, 'Endocrinología', NOW(), false);
INSERT INTO especialidad (id, tipo, registerdate, deleted) VALUES (12, 'Oncología', NOW(), false);

SELECT setval('especialidad_id_seq', (SELECT MAX(id) FROM especialidad));


-- =============================================================================
-- 2. INSERTAR PACIENTES (15 registros)
-- =============================================================================
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (1, 'Laura', 'Díaz Mendoza', '960437463', 'laura.diaz74@mail.com', false, '2005-03-13', 'B+', 'Lactosa', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (2, 'Andrés', 'Castro Sánchez', '973460223', 'andres.castro15@mail.com', true, '1966-09-23', 'AB+', 'Penicilina', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (3, 'Lucía', 'Rodríguez Pérez', '998800483', 'lucia.rodriguez71@mail.com', false, '1963-12-15', 'AB-', 'Mariscos', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (4, 'Miguel', 'Ramírez Vásquez', '933891953', 'miguel.ramirez29@mail.com', true, '2002-10-26', 'AB-', 'Polen', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (5, 'Javier', 'Vásquez García', '997625290', 'javier.vasquez41@mail.com', true, '1997-11-15', 'A-', 'Polen', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (6, 'Juan', 'López Díaz', '994517807', 'juan.lopez36@mail.com', true, '1961-11-01', 'O-', 'Mariscos', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (7, 'Andrés', 'López Martínez', '964123307', 'andres.lopez48@mail.com', true, '2004-08-16', 'A+', 'Ibuprofeno', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (8, 'Pedro', 'Díaz Martínez', '923249202', 'pedro.diaz81@mail.com', true, '1991-05-27', 'B+', 'Polen', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (9, 'Valeria', 'López Torres', '996251231', 'valeria.lopez17@mail.com', false, '2017-04-17', 'AB+', 'Ninguna', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (10, 'Javier', 'Vásquez Gómez', '938176621', 'javier.vasquez66@mail.com', true, '2019-03-07', 'A-', 'Lactosa', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (11, 'Miguel', 'Gómez Rodríguez', '949121729', 'miguel.gomez94@mail.com', true, '1984-10-08', 'B+', 'Ninguna', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (12, 'Clara', 'Rodríguez Díaz', '952235858', 'clara.rodriguez70@mail.com', false, '2005-01-13', 'O-', 'Ninguna', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (13, 'Manuel', 'Gómez Martínez', '985605982', 'manuel.gomez13@mail.com', true, '1971-01-20', 'AB+', 'Polen', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (14, 'María', 'Gómez López', '930725172', 'maria.gomez99@mail.com', false, '2001-08-15', 'AB+', 'Ninguna', NOW(), false);
INSERT INTO paciente (id, nombres, apellidos, telefono, email, masculino, fechanacimiento, tiposangre, alergias, registerdate, deleted) VALUES (15, 'Jorge', 'Rodríguez Pérez', '925197685', 'jorge.rodriguez29@mail.com', true, '1961-02-07', 'B-', 'Polen', NOW(), false);

SELECT setval('paciente_id_seq', (SELECT MAX(id) FROM paciente));


-- =============================================================================
-- 3. INSERTAR MÉDICOS (3 registros)
-- =============================================================================




-- =============================================================================
-- 4. INSERTAR HISTORIALES CLÍNICOS (12 registros)
-- =============================================================================
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (2, 'Control anual', 'Diabetes tipo 2 controlada', 'PA: 130/85, FC: 80, T: 37.2°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (2, 'Control anual', 'Diabetes tipo 2 controlada', 'PA: 130/85, FC: 80, T: 37.2°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (1, 'Revisión rutinaria', 'Ninguno', 'PA: 120/80, FC: 70, T: 36.6°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (3, 'Evaluación preoperatoria', 'Ninguno', 'PA: 115/75, FC: 68, T: 38.9°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (5, 'Control anual', 'Ninguno', 'PA: 130/85, FC: 80, T: 37.2°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (3, 'Fiebre alta y tos', 'Diabetes tipo 2 controlada', 'PA: 115/75, FC: 68, T: 38.9°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (3, 'Control anual', 'Ninguno', 'PA: 120/80, FC: 70, T: 36.6°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (8, 'Dolor de cabeza crónico', 'Asma en la infancia', 'PA: 115/75, FC: 68, T: 38.9°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (11, 'Evaluación preoperatoria', 'Asma en la infancia', 'PA: 130/85, FC: 80, T: 37.2°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (5, 'Control anual', 'Diabetes tipo 2 controlada', 'PA: 120/80, FC: 70, T: 36.6°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (4, 'Control anual', 'Asma en la infancia', 'PA: 120/80, FC: 72, T: 36.5°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (14, 'Dolor abdominal', 'Diabetes tipo 2 controlada', 'PA: 115/75, FC: 68, T: 38.9°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);
INSERT INTO historial (id_paciente, motivo, antecedentes, triaje, diagnostico, tratamiento, receta, registerdate, deleted) VALUES (4, 'Revisión rutinaria', 'Ninguno', 'PA: 130/85, FC: 80, T: 37.2°C', 'Diagnóstico en observación', 'Reposo e hidratación', 'Paracetamol 500mg cada 8 horas por 3 días', NOW(), false);

-- =============================================================================
-- . INSERTAR USUARIOS (3 registros) <MEDICO>
-- =============================================================================
INSERT INTO "usuario" (email, password, role, username, registerdate, deleted) 
VALUES ('carlos.mendoza@clinica.com', '$2a$10$EixzaYVK1VGbM36KTbH7buX9ZNxMv26A3B9C4D5E6F7G8H9I0J1K2', 'MEDICO', 'cmendoza', NOW(), false);

INSERT INTO "usuario" (email, password, role, username, registerdate, deleted) 
VALUES ('elena.gomez@clinica.com', '$2a$10$EixzaYVK1VGbM36KTbH7buX9ZNxMv26A3B9C4D5E6F7G8H9I0J1K2', 'MEDICO', 'egomez', NOW(), false);

INSERT INTO "usuario" (email, password, role, username, registerdate, deleted) 
VALUES ('ricardo.vargas@clinica.com', '$2a$10$EixzaYVK1VGbM36KTbH7buX9ZNxMv26A3B9C4D5E6F7G8H9I0J1K2', 'MEDICO', 'rvargas', NOW(), false);


-- ========================================================
-- MÉDICOS (Vinculados dinámicamente a los usuarios anteriores)
-- Asumiendo id_especialidad válidas (ej: 1, 2, 3)
-- ========================================================
INSERT INTO "medico" (id_especialidad, id_usuario, nombres, apellidos, telefono, email, masculino, fechanacimiento, registerdate, deleted) 
VALUES (1, (SELECT id FROM "usuario" WHERE email = 'carlos.mendoza@clinica.com'), 'Carlos Alberto', 'Mendoza Ortiz', '+51 987654321', 'carlos.mendoza@clinica.com', true, '1980-05-14', NOW(), false);

INSERT INTO "medico" (id_especialidad, id_usuario, nombres, apellidos, telefono, email, masculino, fechanacimiento, registerdate, deleted) 
VALUES (2, (SELECT id FROM "usuario" WHERE email = 'elena.gomez@clinica.com'), 'Elena Sofia', 'Gómez Rosas', '+51 976543210', 'elena.gomez@clinica.com', false, '1985-11-22', NOW(), false);

INSERT INTO "medico" (id_especialidad, id_usuario, nombres, apellidos, telefono, email, masculino, fechanacimiento, registerdate, deleted) 
VALUES (3, (SELECT id FROM "usuario" WHERE email = 'ricardo.vargas@clinica.com'), 'Ricardo Javier', 'Vargas Luna', '+51 965432109', 'ricardo.vargas@clinica.com', true, '1978-08-05', NOW(), false);


-- ========================================================
-- CONSULTAS ACTUALIZADAS (Pacientes del 1 al 6)
-- ========================================================

-- Consultas para el Médico 1 (Dr. Carlos Mendoza)
INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (1, (SELECT id FROM "medico" WHERE email = 'carlos.mendoza@clinica.com'), 'COMPLETADA', '2026-09-01 09:00:00', 60.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (2, (SELECT id FROM "medico" WHERE email = 'carlos.mendoza@clinica.com'), 'COMPLETADA', '2026-09-01 10:30:00', 60.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (3, (SELECT id FROM "medico" WHERE email = 'carlos.mendoza@clinica.com'), 'PROGRAMADA', '2026-09-05 08:00:00', 50.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (4, (SELECT id FROM "medico" WHERE email = 'carlos.mendoza@clinica.com'), 'CANCELADA', '2026-09-05 11:15:00', 50.00, NOW(), false);


-- Consultas para la Médico 2 (Dra. Elena Gómez)
INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (5, (SELECT id FROM "medico" WHERE email = 'elena.gomez@clinica.com'), 'COMPLETADA', '2026-09-02 14:00:00', 75.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (6, (SELECT id FROM "medico" WHERE email = 'elena.gomez@clinica.com'), 'COMPLETADA', '2026-09-02 15:30:00', 75.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (1, (SELECT id FROM "medico" WHERE email = 'elena.gomez@clinica.com'), 'PROGRAMADA', '2026-09-06 16:00:00', 50.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (2, (SELECT id FROM "medico" WHERE email = 'elena.gomez@clinica.com'), 'PROGRAMADA', '2026-09-06 17:00:00', 50.00, NOW(), false);


-- Consultas para el Médico 3 (Dr. Ricardo Vargas)
INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (3, (SELECT id FROM "medico" WHERE email = 'ricardo.vargas@clinica.com'), 'COMPLETADA', '2026-09-03 11:00:00', 50.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (4, (SELECT id FROM "medico" WHERE email = 'ricardo.vargas@clinica.com'), 'CANCELADA', '2026-09-03 12:00:00', 50.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (5, (SELECT id FROM "medico" WHERE email = 'ricardo.vargas@clinica.com'), 'PROGRAMADA', '2026-09-07 09:30:00', 50.00, NOW(), false);

INSERT INTO "consulta" (id_paciente, id_medico, estado, citadate, costo, registerdate, deleted) 
VALUES (6, (SELECT id FROM "medico" WHERE email = 'ricardo.vargas@clinica.com'), 'PROGRAMADA', '2026-09-07 10:45:00', 50.00, NOW(), false);
