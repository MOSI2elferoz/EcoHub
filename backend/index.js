const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Datos simulados en memoria (Base de datos ficticia)
const environmentalFacts = [
  { 
    id: 1, 
    title: 'Huella de Carbono', 
    description: 'La huella de carbono de una persona promedio es de 4 toneladas anuales. Para evitar un aumento de temperatura grave en el planeta, debería ser de menos de 2 toneladas.' 
  },
  { 
    id: 2, 
    title: 'Desperdicio de Agua', 
    description: 'Una llave que gotea un poco constantemente puede llegar a desperdiciar más de 11,000 litros de agua al año.' 
  },
  { 
    id: 3, 
    title: 'Reciclaje de Papel', 
    description: 'Reciclar 1 tonelada de papel salva 17 árboles, ahorra más de 26,000 litros de agua y evita la emisión de gases tóxicos.' 
  },
  { 
    id: 4, 
    title: 'Plásticos en el Océano', 
    description: 'Se estima que más de 8 millones de toneladas de plástico terminan en los océanos cada año, afectando la vida marina.' 
  }
];

const dailyTips = [
  'Desconecta los aparatos eléctricos que no estés utilizando para reducir el "consumo fantasma" de energía.',
  'Usa bolsas reutilizables de tela en lugar de bolsas de plástico para tus compras.',
  'Intenta reducir tu consumo de carne al menos un día a la semana para disminuir las emisiones de gases de efecto invernadero.',
  'Reutiliza el agua de lavar las verduras o la que sale de la regadera mientras se calienta para regar tus plantas.',
  'Apaga las luces al salir de una habitación y aprovecha la luz natural siempre que sea posible.'
];

// Rutas (Endpoints HTTP)

// 1. Obtener todos los datos ambientales
app.get('/api/facts', (req, res) => {
  res.json(environmentalFacts);
});

// 2. Obtener un consejo verde aleatorio
app.get('/api/tips/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * dailyTips.length);
  res.json({ tip: dailyTips[randomIndex] });
});

// 3. Ruta raíz de validación
app.get('/', (req, res) => {
  res.send('API de EcoHub funcionando correctamente.');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Backend corriendo exitosamente en http://localhost:${PORT}`);
});
