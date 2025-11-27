# Sistema de Login con Control de Versiones

## Descripción
Sistema de autenticación con roles de usuario (superusuario, admin y usuario) desarrollado con React. Incluye un dashboard interactivo con estadísticas, calendario, gráficos y panel de documentos.

## Características Principales
- **Sistema de Login**: Autenticación con roles de usuario
- **Dashboard Interactivo**: Vista principal con múltiples componentes
- **Gestión de Usuarios**: 3 roles diferentes (superusuario, admin, usuario)
- **Almacenamiento Local**: Datos guardados en LocalStorage del navegador
- **Interfaz Moderna**: Diseño con Tailwind CSS
- **Compatible con GitHub Pages**: Funciona en cualquier hosting estático

## Estructura del Proyecto
- `index.html`: Página de inicio de sesión
- `dashboard.html`: Panel principal del sistema
- `components/`: Componentes React reutilizables
- `utils/`: Funciones de utilidad (autenticación)
- `trickle/assets/`: Recursos e imágenes
- `trickle/notes/`: Documentación del proyecto

## Usuarios por Defecto
### Superusuarios
- Usuario: `super1` / Contraseña: `super123`
- Usuario: `super2` / Contraseña: `super123`

### Administradores
- Usuario: `admin1` / Contraseña: `admin123`
- Usuario: `admin2` / Contraseña: `admin123`

### Usuarios Regulares
- Usuario: `user1` / Contraseña: `user123`
- Usuario: `user2` / Contraseña: `user123`

## Tecnologías Utilizadas
- React 18
- Tailwind CSS
- Chart.js
- Lucide Icons
- LocalStorage API

## Notas Importantes
- Los usuarios se crean automáticamente en el navegador la primera vez que se accede
- Los datos se almacenan localmente en cada navegador
- Si se borran los datos del navegador, se recrearán los usuarios por defecto

## Última Actualización
27 de noviembre de 2025 - Migrado a LocalStorage para compatibilidad con GitHub Pages
