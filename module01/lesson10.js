// let fruitsList = Array()


// fruitsList[0] = 'Maçã'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melância'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Morango'

// console.log(fruitsList.sort())

//let fruitsList = Array()


// fruitsList[0] = 'Maçã'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melância'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Morango'

// console.log(fruitsList)


// let numberList = Array ()

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a,b) => a - b)) //parametrizando os números inteiros

// let fruitsList = Array()


// fruitsList[0] = 'Maçã'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melância'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Morango'

// console.log(fruitsList.indexOf('Morango'))
// let index = fruitsList.indexOf('Morango')

// if(index === -1){
//     console.log('elemento não existente')
// }else {
//     console.log(`o elemento existe e está na posição: ${index}`)
// }

let Alphabet = Array()
Alphabet[0] = 'b'
Alphabet[1] = 'a'
Alphabet[2] = 'c'
function orderArray(Alphabet){
return Alphabet.sort()
}

console.log(orderArray(Alphabet))

// ABAIXO SÃO OS CÓDIGOS DO PROFESSOR

// Criando uma lista de coisas (thingsList) com subcategorias como 'hardware', 'fruits', e 'People'
let thingsList = Array();

// Inicializando subarrays para cada categoria
thingsList['hardware'] = Array();
thingsList['fruits'] = Array();
thingsList['People'] = Array('Aristóteles', 'Tolkien');

// Adicionando itens ao subarray 'hardware'
thingsList['hardware'][0] = 'Notebook';
thingsList['hardware'][1] = 'Mouse';
thingsList['hardware'][2] = 'Teclado';

// Adicionando itens ao subarray 'fruits'
thingsList['fruits'][0] = 'Laranja';
thingsList['fruits'][1] = 'Maçã';

// Exibindo a tabela com os itens organizados em categorias
console.table(thingsList);

// Trabalhando com uma lista de frutas (fruitsList)
let fruitsList = [];

// Adicionando frutas ao array
fruitsList[0] = 'Maçã';
fruitsList[1] = 'Banana';
fruitsList[2] = 'Melancia';
fruitsList[3] = 'Morango';
fruitsList[4] = 'Morango';

// Encontrando a primeira ocorrência de 'Morango' no array
console.log(fruitsList.indexOf('Morango'));
let index = fruitsList.indexOf('Morango');

if(index === -1){
    console.log('Elemento não existe'); // Se o índice for -1, o elemento não foi encontrado
} else {
    console.log(`O elemento existe e está na posição: ${index}`); // Exibe a posição do elemento encontrado
}

// Trabalhando com uma lista de números (numberList)
let numberList = [];

numberList[0] = 10;
numberList[1] = 12;
numberList[2] = 0;
numberList[3] = 16;
numberList[4] = 7;
numberList[5] = 9;

// Ordenando a lista de números em ordem crescente
console.log(numberList.sort((a, b) => a - b)); // A função de comparação (a - b) ordena os números de forma crescente

// Função para calcular a área de um terreno (calculateLandArea)
function calculateLandArea(num1, num2) {
    let area = num1 * num2; // Calcula a área multiplicando largura e altura
    return area; // Retorna o valor da área calculada
}

let width = 10; // Largura do terreno
let height = 200; // Altura do terreno

let teste = calculateLandArea(width, height); // Chama a função e armazena o resultado

console.log(teste); // Exibe a área calculada

// Trabalhando com um array de letras (alfabeto)
let alfabeto = ['A', 'D', 'C', 'B', 'F'];

// Função para ordenar o array em ordem alfabética
function ordena(arrayASerOrdenado) {
    return arrayASerOrdenado.sort(); // O método sort() ordena os elementos do array
}

console.log(ordena(alfabeto)); // Exibe o array ordenado