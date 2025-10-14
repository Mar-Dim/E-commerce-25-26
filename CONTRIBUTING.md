# Guía de Contribución — Proyecto E-commerce 2025

¡Gracias por considerar contribuir a este proyecto!  
Antes de hacerlo, por favor lee cuidadosamente las siguientes pautas para asegurar una colaboración efectiva y respetuosa entre todos los integrantes del equipo.

---

## Contribuyendo

Al contribuir a este repositorio, primero analiza el cambio o mejora que deseas realizar *a través de un issue, correo electrónico o cualquier otro medio de comunicación acordado* con los propietarios o mantenedores del repositorio antes de subir cualquier cambio.

Asegúrate de seguir estas normas:
- Lee y cumple con nuestro *Código de Conducta* (ver más abajo).
- Haz tus aportes de forma responsable, manteniendo la calidad del código y la coherencia del proyecto.
- Respeta la estructura de carpetas, convenciones de nombres y estilo definidos.
- No subas archivos binarios, temporales o dependencias que no sean necesarias.
- Si el cambio afecta a otras partes del sistema, documenta claramente cómo probarlo.

---

## Responsabilidades del Equipo

| Integrante | Rama / Función | Tareas específicas |
|------------|----------------|-------------------|
| *Anthony* | feature/carrito | - Crear carrito persistente usando localStorage<br>- Implementar página de resumen del carrito: productos, subtotal y total<br>- Permitir eliminar productos del carrito<br>- Asegurarse de que los datos persistan al recargar la página<br>- Hacer commits claros y PR hacia develop |
| *Erick* | feature/detalle-producto | - Crear página de detalle de producto<br>- Mostrar información completa: nombre, descripción, precio, imagen, disponibilidad<br>- Implementar botón "Agregar al carrito"<br>- Agregar microinteracciones (hover, mensajes, alertas)<br>- Hacer commits claros y PR hacia develop |
| *Xabier* | feature/estilos-css | - Diseñar CSS general del sitio<br>- Aplicar animaciones y efectos hover en botones y tarjetas<br>- Hacer que el diseño sea responsive (móvil, tablet, desktop)<br>- Colaborar con todos los integrantes para asegurar consistencia visual<br>- Hacer commits claros y PR hacia develop |
| *Mabe* | feature/footer-y-contacto | - Crear footer de la web con enlaces y copyright<br>- Crear formulario de contacto<br>- Implementar validación de formulario: campos obligatorios, formato de correo, longitud mínima del mensaje<br>- Asegurarse de que el formulario sea funcional y visualmente integrado<br>- Hacer commits claros y PR hacia develop |
| *Mora* | feature/productos-destacados-busqueda | - Crear sección de productos destacados<br>- Implementar buscador de productos por nombre o descripción<br>- Integrar funcionalidad de filtrado o búsqueda con el listado de productos<br>- Hacer commits claros y PR hacia develop |
| *Auz* | feature/listado-productos | - Crear página de listado de productos<br>- Implementar filtros por categoría<br>- Mostrar productos con nombre, imagen, precio<br>- Asegurarse de que los datos se carguen correctamente (JSON o array local)<br>- Hacer commits claros y PR hacia develop |

---

## Proceso para Solicitudes de Extracción (Pull Requests)

Para garantizar un flujo de trabajo ordenado, sigue estos pasos antes de crear un *Pull Request (PR)*:

1. *Actualiza tu rama local*
   bash
   git checkout develop
   git pull origin develop
   

2. *Crea una rama específica para tus cambios*
   bash
   git checkout -b feature/nueva-funcionalidad
   

3. *Realiza tus cambios* asegurándote de que:
   - El código compile sin errores.
   - No queden dependencias innecesarias.
   - No existan archivos de instalación, compilación o entorno dentro del commit.

4. *Actualiza la documentación*
   - Modifica README.md si tu cambio afecta el uso del sistema.
   - Describe nuevas variables de entorno, puertos, rutas o configuraciones agregadas.
   - Si introduces nuevas versiones o dependencias, actualiza los números de versión usando el esquema *SemVer* (Versionado Semántico):
     - MAYOR.MENOR.PARCHE (ejemplo: 1.2.3)

5. *Envía tu rama al repositorio remoto*
   bash
   git push origin feature/nueva-funcionalidad
   

6. *Crea el Pull Request* hacia la rama develop y completa los campos requeridos:
   - Título descriptivo.
   - Explicación de los cambios realizados.
   - Capturas o ejemplos si aplica.
   - Indica el issue relacionado (ejemplo: "Closes #15").

7. *Revisión y aprobación*
   - Todo Pull Request debe ser revisado y aprobado por *al menos dos desarrolladores* antes de fusionarse.
   - Si no tienes permisos para hacer el merge, solicita al segundo revisor o mantenedor que lo realice por ti.
   - *No fusiones tu propio Pull Request sin revisión previa.*

---

## Recomendaciones para Commits

Usa mensajes de commit claros, breves y en tiempo presente:


<tipo>: descripción corta del cambio


*Ejemplos:*

feat: agregar módulo de autenticación de usuarios
fix: corregir error en el cálculo de precios
docs: actualizar guía de instalación


### Tipos comunes:

| Tipo | Descripción |
|------|-------------|
| feat | Nueva funcionalidad |
| fix | Corrección de error |
| docs | Cambios en documentación |
| style | Cambios de formato o estilo (espacios, comas, indentación) |
| refactor | Reestructuración de código sin cambiar comportamiento |
| test | Adición o corrección de pruebas |
| chore | Tareas de mantenimiento, build o scripts |

---

## Normas de Estilo de Código

Para mantener un código limpio y coherente:

- Usa *indentación de 2 espacios*.
- Nombres de variables y funciones en *camelCase*.
- Archivos en *minúsculas con guiones* (detalle-producto.js).
- Agrega *comentarios claros* antes de funciones complejas.
- Evita console.log() o alertas innecesarias en producción.
- Asegúrate de que tu código pase las validaciones y linting antes de enviar PR.

*Ejemplo:*
javascript
// Calcula el total con IVA incluido
function calcularTotalConIVA(precio, iva = 12) {
  return precio + (precio * iva / 100);
}


---

## Flujo de Ramas (GitFlow)

El proyecto sigue el flujo de trabajo *GitFlow*, que organiza las ramas de la siguiente forma:

| Rama | Propósito |
|------|-----------|
| main | Contiene el código estable y en producción |
| develop | Rama principal de desarrollo |
| feature/* | Nuevas funcionalidades derivadas de develop |
| release/* | Preparación de versiones finales |
| hotfix/* | Corrección de errores críticos en producción |

*Ejemplo de flujo:*
bash
git checkout develop
git checkout -b feature/nueva-funcionalidad
# (Desarrollar la funcionalidad)
git push origin feature/nueva-funcionalidad
# Luego crear PR hacia develop


---

## Pruebas y Validación

Antes de enviar tus cambios:

1. Asegúrate de que el proyecto funcione correctamente en tu entorno local.
2. Si hay scripts de pruebas, ejecútalos:
   bash
   npm run test
   
3. Verifica que el sitio sea funcional en los navegadores más usados (Chrome, Firefox, Edge).
4. Comprueba la correcta visualización en distintos tamaños de pantalla.
5. Documenta cualquier cambio relevante en comportamiento o dependencias.

---

## Reporte de Errores (Issues)

Los issues se utilizan para:
- Reportar errores (bugs).
- Solicitar nuevas funcionalidades.
- Discutir mejoras o documentación.

*Antes de crear uno:*
- Verifica que no exista un issue similar.
- Describe claramente el problema:
  - Pasos para reproducirlo.
  - Resultado esperado vs. obtenido.
  - Evidencia (capturas, logs, etc.)
- Asigna etiquetas (bug, enhancement, question, etc.).

---

## Versionado Semántico (SemVer)

El proyecto usa versionado semántico, con el formato:


MAJOR.MINOR.PATCH


*Ejemplo:* 1.3.2

- *MAJOR*: cambios incompatibles (por ejemplo, eliminar funciones).
- *MINOR*: nuevas funciones compatibles.
- *PATCH*: correcciones o mejoras pequeñas.

*Ejemplo de creación de etiqueta:*
bash
git tag -a v1.0.0 -m "Versión inicial estable"
git push origin v1.0.0


---

## Estructura del Proyecto


/index.html              → Página principal + productos destacados
/productos.html          → Listado de productos + filtros + buscador
/detalle.html            → Información completa de cada producto
/carrito.html            → Página de resumen del carrito
/contacto.html           → Formulario de contacto con validación
/css/styles.css          → Estilos generales y responsive
/js/main.js              → Funciones: listado, detalle, carrito, filtros, búsqueda
/img/                    → Imágenes de productos
README.md                → Descripción del proyecto
.gitignore               → Archivos a ignorar
CONTRIBUTING.md          → Reglas de colaboración


---

## Codigo de Conducta

### Nuestro compromiso

Con el fin de fomentar un entorno abierto y acogedor, los contribuyentes y mantenedores de este proyecto se comprometen a hacer de la participación una experiencia libre de acoso para todas las personas, sin distinción de edad, tamaño corporal, discapacidad, etnia, identidad o expresión de género, nivel de experiencia, nacionalidad, apariencia personal, raza, religión, orientación o identidad sexual.

Nos comprometemos a construir una comunidad positiva basada en el respeto mutuo, la colaboración y la empatía.

### Nuestros estándares

*Comportamientos positivos incluyen:*
- Usar un lenguaje amable e inclusivo.
- Respetar diferentes opiniones y experiencias.
- Aceptar críticas constructivas con respeto.
- Centrarse en lo que beneficia a la comunidad.
- Mostrar empatía hacia los demás.

*Comportamientos inaceptables incluyen:*
- Uso de lenguaje o imágenes sexualizadas o insinuaciones.
- Ataques personales, troleo o comentarios despectivos.
- Acoso público o privado.
- Publicación de información privada sin consentimiento.
- Cualquier otra conducta que se considere inapropiada en un entorno profesional.

### Nuestras responsabilidades

Los mantenedores del proyecto son responsables de:
- Definir y hacer cumplir los estándares de comportamiento aceptable.
- Tomar medidas correctivas apropiadas en caso de conductas inaceptables.
- Eliminar, editar o rechazar contribuciones que violen este código.
- Suspender temporal o permanentemente a quienes no respeten estas normas.

### Alcance

Este código se aplica dentro de todos los espacios del proyecto (repositorio, issues, pull requests, documentación, etc.) y en espacios públicos donde alguien represente oficialmente al proyecto.

*Ejemplos de representación:*
- Uso de correo o cuentas oficiales del proyecto.
- Publicación en redes sociales oficiales.
- Participación en eventos en nombre del proyecto.

### Ejecución

Cualquier caso de comportamiento abusivo o inaceptable puede reportarse escribiendo a:

Todas las quejas serán revisadas e investigadas de manera confidencial.

El equipo del proyecto está obligado a proteger la identidad de la persona que reporte el incidente.

Los mantenedores que no cumplan o hagan cumplir este código de buena fe pueden enfrentar sanciones temporales o permanentes, según la gravedad del caso.

### Atribución

Este Código de Conducta se adapta del [Pacto del Colaborador (Contributor Covenant)](https://www.contributor-covenant.org/es/version/1/4/code-of-conduct.html), versión 1.4.

---

##  Agradecimientos y Créditos

Queremos agradecer a todas las personas que contribuyen a mejorar este proyecto día a día.

Cada línea de código, corrección o comentario constructivo fortalece nuestro trabajo en equipo y mejora la calidad del software.

*Integrantes del equipo de desarrollo:*
- *Anthony* — Carrito de compras
- *Erick* — Detalle de productos
- *Xabier* — Diseño y estilos CSS
- *Mabe* — Footer y formulario de contacto
- *Mora* — Productos destacados y búsqueda
- *Auz* — Listado de productos

*Repositorio oficial:* https://github.com/Mar-Dim/E-commerce-25-26

---

## Conclusión

Gracias por dedicar tiempo a leer esta guía.

Tu participación hace crecer este proyecto y fomenta la creación de software abierto, colaborativo y de calidad.

Cada aporte —por pequeño que parezca— ayuda a construir una mejor comunidad y un mejor producto.

*¡Bienvenido a bordo y feliz contribución!*