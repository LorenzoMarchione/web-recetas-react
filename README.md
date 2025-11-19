# Aplicación de Recetas - [Tu Nombre]

## Descripción
Aplicación web desarrollada en React que permite explorar un catálogo de recetas de cocina, visualizar detalles completos de cada una (ingredientes, pasos, tiempo, dificultad) y navegar de forma intuitiva entre vistas. Diseñada con enfoque mobile-first y siguiendo buenas prácticas de desarrollo frontend.

## Tecnologías Utilizadas
- React 19.1.1
- React Router DOM 6.26.1
- Material-UI (MUI) 7.3.2
- Vite
- Context API para manejo de estado global
- JSON local para datos

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tp-recetas.git
   cd tp-recetas

2. Instalar dependencias:
   npm install

3. Ejecutar el proyecto:
   npm run dev

4. Abrir en el navegador:
   http://localhost:5173


Estructura del Proyecto
src/
├── components/
│   ├── recetas/         # Componentes relacionados con recetas
│   └── layout/          # Barra de navegación
├── contexts/            # Context API para gestión de recetas
├── data/                # Archivo JSON con las recetas
├── pages/               # Páginas principales (listado y detalle)
├── App.jsx              # Configuración de rutas
└── main.jsx             # Punto de entrada con proveedor de contexto

Funcionalidades
✅ Listado de recetas con tarjetas responsivas (imagen, título, tiempo, dificultad, porciones)
✅ Navegación al detalle de receta mediante parámetros dinámicos (/recetas/:id)
✅ Vista detallada con ingredientes y pasos de preparación numerados
✅ Barra de navegación superior en todas las páginas
✅ Diseño 100% responsive (mobile, tablet, desktop)
✅ Manejo de loading y errores (receta no encontrada)
✅ Estado global gestionado con Context API
✅ 6 recetas completas con datos reales y categorías variadas

Screenshots

Listado de Recetas

![Listado de Recetas](screenshots/RecetasList.png)

Detalle de Receta

![Detalle de Receta](screenshots/RecetasDetalles.png)

Autor
Lorenzo Esteban Marchione Revilla
📧 lorenmarchione@gmail.com
🔗 [Mi Github](https://github.com/LorenzoMarchione)