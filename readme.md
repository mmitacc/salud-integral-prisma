# API de Backend de Clínica: "Salud Integral"

## Descripción

Este API es una API RESTful que permite la gestión de usuarios, pacientes, medicos, especialidades, consultas y historial de pacientes. Se adjuntan 2 archivos de detalles panoramicos del proyecto: el archivo `requerimientos.md` y el archivo `ERD-salud integral.png` (con el esquema gráfico de la base de datos). Y una data para inyección de datos `data-prueba.sql`.

## Instalación
Despues de clonar el repositorio, ejecutar `npm install` para instalar las dependencias. Luego ejecutar para establecer todos los requerimientos de prisma: `npx prisma migrate dev --name init` y después `npx prisma generate`.Y finalmente, ejecutar `npm run dev` para iniciar el servidor. Existe una ruta para la documentación completa de la API en el puerto `3000/api-docs`.

## Autor

Para mayores detalles sobre el proyecto, puedes visitar el repositorio de mi proyecto o contactarme en:
[Manuel Mítac](https://github.com/mmitacc)
Telefono: +051 996 080 313
Email: manuelmitacc@hotmail.com

## Licencia

MIT License

Copyright (c) 2026 [Manuel Mítac](https://github.com/mmitacc)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
