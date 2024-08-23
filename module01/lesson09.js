//1. soma dos elementos de um array

// const PromptSync = require("prompt-sync")

// let sum = 0
// let array = [10,20,30,40,50]
// console.log(array.length)

// for(let i = 0; i < array.length; i++){
// sum += array[i]
// }
// console.log(sum)

// //encontre o Maior numero de um array

// let max = array[0]
// for(let j = 0; j < array.length; j++){
//     if(array[j] > max){
//         max = array[j]
//     }
// }
// console.log(max)


// //reverter um array
// let reversed = []
// for(let k = array.length - 1; k >= 0; k--){
//     reversed.push(array[k])
// }

// console.log(reversed)

// //crie um novo array contendo apenas os numeros pares.

// let evens = []

// for(let m = 0; m < array.length; m++){
//     if(array[m] % 2 ===0){
//         evens.push(array[m])
//     }
// }
// console.log(evens)

// // contar occorencias de um valor

// let vet = [10,30,15,8,20, 10]
// let value = 10
// let count= 0
// for (let n = 0; n < vet.length; n++){
//     if(vet[n] === value){
//         count++
//     }
// }
// console.log(`o valor ${value} ocorre ${count} vezes no vetor.`)

//arrays/vetores multidimensionais
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]  

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j <matriz[i].length; j ++)
//     console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
// }

let matriz2 = [
    [9,8,7],
    [6,5,4],
    [3,2,1]
]

let resultado = []

if(matriz.length !== matriz2.length || matriz[0].length !== matriz2[0].length){
    throw new console.error("os arrays devem ter o mesmo tamanho")
}
for(let i =0;  i < matriz.length; i++){
    let somaLinha = []
    for(let j = 0; j < matriz[i].length; j++){
        somaLinha.push(matriz[i][j] + matriz2[i][j])
    }
    resultado.push(somaLinha)
}
console.table(resultado)

