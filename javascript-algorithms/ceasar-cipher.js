//funcion rot13 la cual recibe un parametro de tipo string str.
function rot13(str) {

    //variable result la cual es de tipo string y retornara el valor mas adelante.
    var result = "";
    /*Ciclo for el cual nos dice: que i es igual a 0, mientras i sea menor a la longitud de la cadena str, i tendra un uncremento en 1.*/
    for(var i = 0; i < str.length; i++){
      /*variable asciN el cual tiene como valor str[i] y mediante la funcion CharCodeAt() el cual convierte el valor existente en la posicion i a
      un valor unicode del incide proporcionado. */   
      var asciN = str[i].charCodeAt();
     /*Condicional if, cual nos dice: si la variable asciN es mayor o igual a 65 y la misma varible es menor o igual a 77 , sumaremos
     el valor existe a la variable result y convertiremos mediante el metodo String.fromCharCode el valor existente en asciN + 13 posiciones*/   
    if(asciN >= 65 && asciN <= 77){
      result = result + String.fromCharCode(asciN + 13);
      /*Condicional if, cual nos dice: si la variable asciN es mayor o igual a 78 y la misma varible es menor o igual a 90 , sumaremos
     el valor existe a la variable result y convertiremos mediante el metodo String.fromCharCod()e el valor existente en asciN - 13 posiciones*/
    } else if(asciN >= 78 && asciN <= 90){
      result = result + String.fromCharCode(asciN - 13);
      }else{
        /*esta linea de codigo nos permite sumar un espacio, ya que la variable result es de tipo string vacio, le estamos sumando un espacio
        a nuestro valor en str[i].*/
        result = result + str[i];
      }
    }
    //returnamos el valor de la variable result.
    return  result;
  }
  //probamos la funcion para verificar su correcto funcionamiento.
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));