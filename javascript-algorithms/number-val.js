//funcion telephoneCheck, que recibe un valor de tipo string str.
function telephoneCheck(str) {
    /* definimos una variable regEx la cual tiene parametros ya que es una expresion regular*/
    /*Los parametros nos dicen que: el primer bloque  empareja numeros que empiezen en 1, el segundo, tercer y cuarto bloque empareja numeros 
    en bloques de 3 que sean numeros entre 0-9, y el quinto bloque empareja numeros en bloques de 4 que de igual forma entre entre 0-9, asi como
    enmparejar espacios en blanco, y caracteres de tipo (-) */
    var regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    /*mediante la fuincion test() ejecutamos una busqueda en base a los parametros especificados en la varibale regEx y evaluamos lo que este 
    en str y returnamos el valor.*/
    return regEx.test(str);
  }
  //probamos la funcion para verificar su correcto funcionamiento.
  console.log(telephoneCheck("0123456789"));