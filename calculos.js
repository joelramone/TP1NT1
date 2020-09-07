/*
calculo la fecha
*/
var acum = 0;

function Fecha() {
  var d = new Date();
  var dia = d.getDate();
  if (dia < 10) {
    dia = "0" + dia;
  }
  var mes = d.getMonth();
  if (mes < 10) {
    mes = "0" + mes;
  }
  var año = d.getFullYear();
  var fecha = dia + "/" + mes + "/" + año;
  return fecha;
}
/*toma el valor cargado en el formulario con el ID "input" en el html*/
function tomarValor() {
  return document.getElementById("input").value;
}

/* funcion que ingresa un valor a la tabla desde un campo de formulario*/
function Insertar() {
  var valor = tomarValor();
  return valor;
}

/*contador de balance parcial */
function BalanceParcial(tipoDeposito) {
  acum = Number(acum) + Number(Insertar() * tipoDeposito);
  return acum;
}


/*
funcion que agrega una fila a la tabla
*/
function agregaRow(tipoDeposito) {
  var r = confirm("Desea realizar una operacion?");
  if (r == true) {
    /*llamo a la clase Insertar para poder tomar un elemento*/
    var monto = Insertar() * tipoDeposito;
    if (monto != 0) {
      var table = document.getElementById("table");
      /*llamo a la clase fecha*/
      var fech = Fecha();
      /*obtengo el saldo act*/
      var balpar = BalanceParcial(tipoDeposito);
      /*inserto una fila*/
      var row = table.insertRow(0);
      /*inserto las celdas*/
      var celda1 = row.insertCell(0);
      var celda2 = row.insertCell(1);
      var celda3 = row.insertCell(2);
      /*inserto las celdas una abajo de la otra*/
      table.appendChild(row);
      /*agrego valor a las celdas*/
      celda1.innerHTML = fech;
      celda2.innerHTML = "$" + monto;
      celda3.innerHTML = "$" + balpar;
      var total = document.getElementById("balanceTotal");
      total.innerHTML = "$" + balpar;
      darEstilo(monto, celda2);
    }
  }
  limpiar();
}

/*
funcion que agrega estilo al campo monto
*/
function darEstilo(valor, celda) {
  if (valor < 0) {
    celda.style.color = "red";
  } else {
    celda.style.color = "green";
  }

}

/*
Funcion para limpiar campo de entrada de monto
*/
function limpiar() {
  document.getElementById("input").value = "";
}






