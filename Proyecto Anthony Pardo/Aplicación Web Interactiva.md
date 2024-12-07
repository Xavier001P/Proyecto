Aplicación Web Interactiva
Esta es una aplicación web interactiva diseñada para mostrar datos personales, realizar operaciones lógicas básicas, gestionar arrays, y registrar usuarios con funcionalidad de almacenamiento local. Incluye tres páginas principales: Inicio, Funcionalidades, y Registro.

Estructura de la Aplicación
1.Inicio
Muestra los datos personales del estudiante (nombre, correo y curso) en un diseño organizado.
2.Funcionalidades Lógicas
Permite realizar operaciones básicas:
-Comparar dos números: Encuentra el mayor número o indica si son iguales.
-Mes correspondiente: Muestra el nombre del mes según el número ingresado.
-Gestión de arrays: Agrega y muestra una lista dinámica de nombres.
3.Registro de Usuarios
Un formulario para registrar usuarios con los siguientes campos:
-ID
-Cédula
-Nombres y Apellidos
-Fecha de nacimiento
-Ciudad de procedencia
-Los datos se almacenan localmente y se muestran en formato tabular en una nueva página.

Requisitos
-Navegador web moderno (Google Chrome, Mozilla Firefox, Edge, etc.).
-No se requiere servidor, ya que es una aplicación estática.

Instrucciones de Uso
1.Clona este repositorio o descarga los archivos en tu computadora:
git clone <url-del-repositorio>
2.Abre los archivos directamente en tu navegador:
-Inicio: Abre index.html.
-Funcionalidades: Abre funcionalidades.html.
-Registro: Abre registro.html.
3.Interactúa con las funcionalidades:
-En "Funcionalidades", prueba las operaciones lógicas (comparar números, mostrar meses, y gestionar arrays).
-En "Registro", completa el formulario, haz clic en "Registrar" y verifica los datos en la tabla generada en una nueva página.

Estructura de Archivos
├── index.html             # Página de inicio
├── funcionalidades.html   # Página de funcionalidades lógicas
├── registro.html          # Página de registro de usuarios
├── tabla.html             # Página para mostrar usuarios registrados
├── styles.css             # Estilo global de la aplicación
├── funcionalidades.js     # Funcionalidades lógicas (lógica de la página 'funcionalidades')
├── registro.js            # Registro de usuarios (lógica de la página 'registro')
├── tabla.js               # Mostrar tabla de usuarios (lógica de la página 'tabla')

Personalización
Se puede modifica styles.css para cambiar el diseño de la aplicación.
Ajusta los scripts en funcionalidades.js, registro.js o tabla.js si deseamos agregar nuevas funcionalidades.