//funcion convertToRoman que recibe un parametro de tipo numerico.
function convertToRoman(num) {
    //variable de tipo string la cual recibira el resultado mas adelante y misma que usaremos para retornar el mismo.
    var answer = "";
    /*iniciador de objeto numerals, el cual cuenta con una lista con nombres de propiedad y valores asociados de un objeto, separado por
    comas y encerrado entre corchetes.*/
    const numerals = {
      M: '1000',
      CM: '900',
      D: '500',
      CD: '400',
      C: '100',
      XC: '90',
      L: '50',
      XL: '40',
      X: '10',
      IX: '9',
      V: '5',
      IV: '4',
      I: '1'
    }
    
    /*Ciclo for, que nos permite acceder a las propiedades de nuestro iniciador de objeto numerals, mediante un ciclo anidado while nos dice la condicion
    que mientras la variable num sea mayor o igual a alv valor existente en numerals[i], a la variable answer le vamos a sumar el valor de i
    despues para que el ciclo se detenga, a la varible num le restaremos lo que exista en numerals[i]  y retornara la variable answer. */
    for(let i in numerals){
      while(num >= numerals[i]){
        answer = answer + i;
        num = num - numerals[i];
      }
    }
    return answer;
  }
  //probamos la funcion para verificar su funcionamiento.
  console.log(convertToRoman(1));