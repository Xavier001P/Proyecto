// Guardar datos en el almacenamiento local y redirigir
const registerUser = (event) => {
    event.preventDefault();
  
    // Capturar datos del formulario
    const id = document.getElementById('id').value;
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const ciudad = document.getElementById('ciudad').value;
  
    // Crear el objeto de usuario
    const usuario = { id, cedula, nombre, fecha, ciudad };
  
    // Obtener datos existentes en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(usuario);
  
    // Guardar datos en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
    // Redirigir a la página de tabla
    window.location.href = 'tabla.html';
  };
  
  // Asignar evento al formulario
  document.getElementById('registro-form').addEventListener('submit', registerUser);
  