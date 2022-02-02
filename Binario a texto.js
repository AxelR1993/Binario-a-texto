function binaryAgent(str) {
    let array = [];
    let newStr = ""
    let ascii = ["NUL", "SOH" , "STX" , "ETX" , "EOT" , "ENQ" , "ACK" , "BEL" , "BS" , "HT" , "LF", "VT" , "FF" , "CR" , "SO" , "SI" , "DLE" , "DC1" , "DC2" , "DC3" , "DC4" , "NAK" , "SYN" , "ETB" , "CAN" , "EM" , "SUB" , "ESC" , "FS" , "GS" , "RS" , "US" , " " , "!" , '"' , "#" , "$" , "%" , "&" , "'" , "(" , ")" , "*" , "+" , "," , "-" , "." , "/" , "0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9", ":" , ";" , "<" , "=" , ">" , "?" , "@" , "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" , "[" , "\\" , "]" , "^" , "_" , "`" , "a" , "b" , "c" , "d" , "e" , "f" , "g", "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" , "{" , "|" , "}" , "~" , "DEL" ];
  
    let contador = 7;
    let suma = 0;
    for ( let i = 0; i <= str.length; i++ ){
      if(str[i] == " " || i == str.length){
        contador = 8;
        array.push(suma);
        suma = 0;
    } if (str[i] == 1){
      suma += (2**contador);
      contador--;
      
      } if (str[i] == 0){
        contador--;
      }
    }
    
  
    for(let i of array){
      newStr += ascii[i];
    
      
  
    
    }
    console.log(newStr);
    return newStr;
  }

// Hello World 