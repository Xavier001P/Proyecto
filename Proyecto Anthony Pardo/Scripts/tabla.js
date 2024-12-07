// Cargar datos desde localStorage y mostrarlos en la tabla
const cargarUsuarios = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tablaBody = document.querySelector('#user-table tbody');
  
    // Limpiar la tabla antes de cargar
    tablaBody.innerHTML = '';
  
    // Generar filas dinámicamente
    usuarios.forEach((usuario) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.cedula}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.fecha}</td>
        <td>${usuario.ciudad}</td>
      `;
      tablaBody.appendChild(fila);
    });
  };
  
  // Llamar a la función al cargar la página
  window.onload = cargarUsuarios;
  