# Guion Sugerido para el Video de Presentación

*(Tiempo estimado del video: 3 a 5 minutos)*

**[0:00 - 0:30] Presentación y Objetivo**
"Hola, mi nombre es [Tu Nombre] y hoy quiero presentarles mi proyecto 'EcoHub'. Es una aplicación web Full Stack diseñada para generar conciencia sobre el cuidado del medio ambiente. El objetivo principal fue crear una experiencia interactiva y visualmente atractiva donde los usuarios puedan aprender datos interesantes y recibir consejos ecológicos diarios."

**[0:30 - 1:30] Demostración de la Aplicación (Muestra tu pantalla navegando)**
"Como pueden ver, al entrar a la página nos recibe un diseño muy moderno. 
En la parte inferior tenemos tarjetas que muestran estadísticas ambientales. Estos datos no están quemados en el HTML, sino que se consumen dinámicamente desde mi propio servidor Backend.
Si hacemos clic en el botón 'Obtener un consejo verde', se abre esta ventana modal interactiva con un consejo aleatorio para aplicar hoy mismo. El diseño se adapta perfectamente si lo vemos desde un celular (puedes mostrar la vista de inspeccionar de Chrome en modo móvil)."

**[1:30 - 2:30] Justificación del Diseño UI/UX**
"Para el diseño UI/UX decidí implementar una tendencia llamada 'Glassmorphism' o efecto cristal. Utilicé colores verde esmeralda y fondos oscuros porque evocan la naturaleza pero con un toque muy tecnológico y premium. Evité usar frameworks de diseño pre-hechos como Bootstrap y escribí Vanilla CSS desde cero para tener control total sobre las animaciones suaves de los botones y el desenfoque de los fondos."

**[2:30 - 3:30] Tecnologías y Arquitectura**
"A nivel técnico, esta es una aplicación cliente-servidor:
Para el Frontend elegí **React.js** (creado con Vite) porque facilita enormemente la creación de componentes reutilizables y el manejo del estado, por ejemplo, para abrir y cerrar el modal.
Para el Backend utilicé **Node.js con Express**. Creé una API REST con dos endpoints que responden con información en formato JSON. Tuve que configurar los permisos CORS para que mi Frontend pudiera solicitar los datos de manera segura."

**[3:30 - 4:00] Conclusión**
"El mayor desafío fue asegurar que la comunicación entre ambos servidores (frontend y backend) fuera fluida, así como lograr que la interfaz fuera completamente responsiva. 
Estoy muy feliz con el resultado ya que demuestra el ciclo completo de desarrollo Full Stack. ¡Gracias por su atención!"
