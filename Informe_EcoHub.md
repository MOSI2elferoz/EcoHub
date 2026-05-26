# Informe del Proyecto: EcoHub

**Materia:** Desarrollo Integral de Software (Full Stack)
**Estudiante:** [Tu Nombre]
**Fecha:** [Fecha de Entrega]

## 1. Introducción
EcoHub es una aplicación web interactiva desarrollada para concientizar sobre el impacto ambiental y fomentar prácticas sostenibles en el día a día. El proyecto integra tecnologías modernas tanto en el lado del cliente (Frontend) como en el servidor (Backend), cumpliendo con el enfoque "Full Stack".

## 2. Objetivos
* Desarrollar una interfaz de usuario (UI) sumamente atractiva utilizando el estilo visual "Glassmorphism" y principios modernos de diseño responsivo.
* Proveer una experiencia de usuario (UX) interactiva mediante modales y componentes dinámicos en React.js.
* Implementar un servidor backend funcional utilizando Node.js y Express.js que sirva datos dinámicos a través de peticiones HTTP.

## 3. Alcance
La aplicación consta de una página única (Single Page Application - SPA) con secciones para visualización de datos estadísticos ambientales y un sistema interactivo para recibir "Consejos Verdes" de manera aleatoria. El backend maneja los endpoints para proveer dicha información, aunque por el momento los datos se almacenan en memoria y no requieren una base de datos persistente.

## 4. Metodología
Se utilizó un enfoque iterativo dividido en las siguientes fases:
1. **Planificación UI/UX:** Definición de una paleta de colores inspirada en la naturaleza (tonos verde esmeralda, fondos oscuros) y diseño de la estructura.
2. **Desarrollo del Backend:** Creación de un servidor Express con dos rutas RESTful principales (`/api/facts` y `/api/tips/random`).
3. **Desarrollo del Frontend:** Implementación de la interfaz mediante React.js y Vite, y conexión con el servidor mediante promesas HTTP (`fetch`).
4. **Pruebas:** Verificación del diseño en tamaños de pantalla móvil y escritorio.

## 5. Decisiones de Diseño UI/UX
Se eligió el estilo "Glassmorphism" porque transmite una sensación de modernidad, limpieza y tecnología, elementos acordes al mensaje ambiental que busca innovación. Se usaron colores de alto contraste sobre un fondo oscuro para reducir la fatiga visual y resaltar la información clave. 
El modo responsivo garantiza accesibilidad desde cualquier dispositivo, adaptando el tamaño de las tarjetas ("cards") y tipografía de manera fluida.

## 6. Desafíos y Soluciones
* **Desafío:** Problemas de conectividad iniciales entre el Frontend (puerto 5173) y Backend (puerto 3001) por políticas de seguridad del navegador.
  **Solución:** Implementación del middleware `CORS` en Node.js para habilitar peticiones cruzadas.
* **Desafío:** Instalación de Node.js sin privilegios de administrador.
  **Solución:** Se utilizó una instalación portable manual en el entorno del usuario, añadiendo los binarios al PATH temporal del sistema.

---
*(Nota: Añade aquí tus capturas de pantalla mostrando la app funcionando en el navegador en versión de escritorio y de celular).*

## 7. Enlaces Relevantes
* **Repositorio de GitHub:** [Tu enlace a GitHub aquí]
* **Video de Presentación (YouTube):** [Tu enlace del video aquí]
