function validarFormulario() {
  var name = document.getElementById('name').value;
  var address = document.getElementById('address').value;

  // Validar si el campo 'name' está vacío
  if (name == "") {
    alert('El campo nombre es requerido.');
    return false;
  }

  // Validar si el campo 'address' está vacío
  if (address == "") {
    alert('El campo dirección es requerido.');
    return false;
  }

  // Si todo está bien, permite que el formulario se envíe
  agregarDatosTabla();

  return false; // Para prevenir que el formulario se envíe realmente

}


function agregarDatosTabla() {
  var nombre = document.getElementById('name').value;
  var sDescripcion = document.getElementById('sDescription').value;
  var lDescripcion = document.getElementById('lDescripcion').value;
  var stock = document.getElementById('stock').value;
  var precio = document.getElementById('price').value;

  var tabla = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
  var nuevaFila = tabla.insertRow(tabla.rows.length);

  nuevaFila.insertCell(0).innerHTML = nombre;
  nuevaFila.insertCell(1).innerHTML = sDescripcion;
  nuevaFila.insertCell(2).innerHTML = lDescripcion;
  nuevaFila.insertCell(3).innerHTML = stock;
  nuevaFila.insertCell(4).innerHTML = precio;
}

