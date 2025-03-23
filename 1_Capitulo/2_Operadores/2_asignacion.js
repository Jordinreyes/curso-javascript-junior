//  ASIGNACION ( = ) 
let number1 = 1;

//  ASIGNACION DE ADICCION ( += )
let number2 = 2;
number2 += 2;
console.log(number2);

//  ASIGNACION DE SUSTRACION ( -= )
let number3 = 2;
number3 -= 2;
console.log(number3);

//  ASIGNACION DE MULTIPLICACION ( *= )
let number4 = 2;
number4 *= 10;
console.log(number4);

//  ASIGNACION DE DIVISION ( /= )
let number5 = 20;
number5 /= 2;
console.log(number5)

//  ASIGNACION DE RESTO ( %= )
let number6 = 20;
number6 %= 2;
console.log(number6);

//  ASIGNACION DE EXPONENCIACION ( **= )
let number7 = 10;
number7 **= 10;
console.log(number7);

//  ASIGNACION DE DEZPLAZAMIENTO A LA IZQUIERDA ( <<= )
//  2 EN BINARIO ES = 00000010
//  AL APLICAR << 2, El 2 se mueve 2 posicion a la izquierda
//  En decimal quedaria asi: 00001000 = 8
let number8 = 2;
number8 <<= 2;
console.log(number8)

/* 


*/

//  ASIGNACION DE DEZPLAZAMIENTO A LA DERECHA ( >>= )
//  2 EN BINARIO ES = 00000010
//  AL APLICAR >> 2, El 2 se mueve 2 posicion a la derecha
//  En decimal quedaria asi: 000000000 = 0
//  Mantiene el signo si es positivo o negativo
let number9 = 2;
number9 >>= 2;
console.log(number9); 

/* 


*/

//  ASIGNACION SIN SIGNO DE DEZPLAZAMIENTO A LA DERECHA
//  2 EN BINARIO ES = 00000010
//  AL APLICAR >> 2, El 2 se mueve 2 posicion a la derecha
//  En decimal quedaria asi: 000000000 = 0
//  Siempre llena con ceros a la izquierda, incluso si el numero es negativo
let number10 = 2;
number10 >>>= 2;
console.log(number10);


