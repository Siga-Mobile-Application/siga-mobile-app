// /**
//  * Calcula a potência de um número bigInt
//  * O JS não suporta números inteiros maiores que 2^53-1
//  * e BigInts não podem ser usados com o operador **, por isso
//  * essa função foi criada
//  */
// function bigIntPower(base: number|bigint, exponent: number) {
//     let result = 1n
//     const bigBase = BigInt(base)
//     for (let i = 0; i < exponent; i++) {
//       result *= bigBase
//     }
//     return result
//   }
  
//   /** 
//    * Calcula o mdc de dois números e os coeficientes de Bézout
//    * usando o algoritmo de Euclides estendido
//    */
//   function mdc(a: number, b: number) {
//     let [absA, absB] = [Math.abs(a), Math.abs(b)]
//     let [prevX, x] = [1, 0]
//     let [prevY, y] = [0, 1]
  
//     while (absB) {
//       const q = Math.floor(absA / absB)
//       ;[absB, absA] = [absA % absB, absB]
//       ;[x, prevX] = [prevX - q * x, x]
//       ;[y, prevY] = [prevY - q * y, y]
//     }
  
//     return {
//       mdc: absA,
//       x: prevX,
//       y: prevY
//     }
//   }
  
//   /**
//    * Calcula o inverso modular de um número
//    */
//   function modInverse(e: number, m: number) {
//     const result = mdc(e, m)
//     if (result.mdc !== 1) {
//       throw new Error('modular inverse does not exist')
//     }
//     return ((result.x % m) + m) % m
//   }
  
//   /**
//    * Calcula o expoente público de uma chave RSA
//    */
//   function publicExponent(lambdaN: number) {
//     let e = 2
//     while (mdc(e, lambdaN).mdc !== 1 && e < lambdaN) {
//       e++
//     }
//     return e
//   }
  
//   /**
//    * Criptografa/Descriptografa uma mensagem usando a chave RSA
//    */
//   export function encrypt(message: number|bigint, exp: number, mod: number) {
//     return bigIntPower(message, exp) % BigInt(mod)
//   }  
  
// Function for modular exponentiation
function bigIntPower(base: bigint, exponent: number, modulus: bigint): bigint {
    let result = 1n;
    let bigBase = base % modulus; // Apply modulus to the base initially to avoid overflow

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            result = (result * bigBase) % modulus; // If exponent is odd, multiply by base
        }
        bigBase = (bigBase * bigBase) % modulus; // Square the base
        exponent = Math.floor(exponent / 2); // Halve the exponent
    }

    return result;
}

// Encrypt function using modular exponentiation
export function encrypt(message: bigint, exp: number, mod: bigint): bigint {
    return bigIntPower(message, exp, mod);
}

export function bigIntToBytes(bigIntValue: bigint) {
    let byteArray = [];

    // Enquanto o BigInt for maior que 0
    while (bigIntValue > 0n) {
        // Obtém o byte (os 8 bits menos significativos)
        byteArray.unshift(Number(bigIntValue & 0xffn)); // Máscara de 8 bits

        // Desloca o BigInt 8 bits à direita
        bigIntValue >>= 8n;
    }

    // Converte o array de bytes para Uint8Array
    return new Uint8Array(byteArray);
}