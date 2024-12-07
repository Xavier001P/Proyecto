// Comparar números (Estructura IF)
const compareNumbers = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const output = document.getElementById('output-if');
  
    if (isNaN(num1) || isNaN(num2)) {
      output.innerText = 'Por favor ingrese ambos números.';
      return;
    }
  
    if (num1 > num2) {
      output.innerText = `El número mayor es: ${num1}`;
    } else if (num1 < num2) {
      output.innerText = `El número mayor es: ${num2}`;
    } else {
      output.innerText = 'Ambos números son iguales.';
    }
  };
  
  // Mostrar mes correspondiente (Estructura SWITCH)
  const getMonth = () => {
    const month = parseInt(document.getElementById('month').value);
    const months = [
      '', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ];
  
    if (month >= 1 && month <= 12) {
      alert(`El mes correspondiente es: ${months[month]}`);
    } else {
      alert('Por favor, ingrese un número entre 1 y 12.');
    }
  };
  
  // Gestión de arrays (Agregar nombres)
  let names = [];
  const addName = () => {
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
      alert('Por favor ingrese un nombre.');
      return;
    }
  
    names.push(name);
    document.getElementById('name-list').innerHTML = `
      <ul>
        ${names.map((n) => `<li>${n}</li>`).join('')}
      </ul>
    `;
  
    // Limpiar el campo de entrada
    document.getElementById('name').value = '';
  };
  
  // Asignar eventos a los botones
  document.getElementById('compare-btn').addEventListener('click', compareNumbers);
  document.getElementById('month-btn').addEventListener('click', getMonth);
  document.getElementById('add-name-btn').addEventListener('click', addName);
  