// Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média 
//     de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
//     Imprima se o professor está acima da média de aprovação (considerando 3.0 como média).

// const Teacher = {
// name: "Xavier",
// subject: "English",
// grades: {
//     student1: 7,
//     student2: 9,
//     student3: 10,
//     student4: 4,
// },
// };

// let sumGrades = 0;
// let numberofStudents = 0;

// for(let student in (Teacher.grades)){
//     sumGrades += Teacher.grades[student]
//     numberofStudents++
// }

// let average = sumGrades / numberofStudents

// console.log(`A nota média da turma é : ${average.toFixed(2)}`)
// console.log(average >= 6
//  ? `${Teacher.name} está acima da média ${average}`
//  : `${Teacher.name} está abaixo da média.`
// )
 

//Objetivo: Verificar e listar livros publicados antes de 2000.
  //  Use um loop for...of para iterar sobre o array biblioteca.
    //Imprima o título e o ano dos livros que atendem a essa condição.

    // const listofBooks = [
    //     { title: "O Hobbit", author: "J. R. R. Tolkien", year: 1925},
    //     { title: "Harry Potterr: Prisioneiro de Azkaban", author: "J. k. Rolling", year: 1999},
    //     { title: " Nárnia", author: "C. S. Lewis", year: 2010}
    // ]

    // for(let book of listofBooks){
    //     if(book.year < 2000){
    //         console.log(`o livro ${book.title} foi escrito por ${book.author} foi publicado no ano:${book.year}.`)
    //         }
    //     }
            

    // Objetivo: Contar a quantidade de filmes por gênero.
    // Use o método forEach para iterar sobre o array filmes.
    // Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    // Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.

const movies = [
    { title: "Tropa de Elite", genre: "militar"},
    { title: "Top Gun", genre: "ação"},
    { title: "Interestelar", genre: "sci-fi"},
    { title: "Senhor do Aneis", genre: "Aventura"},
    { title: "Poderoso Chefão", genre: "Mafia"},
    { title: "Vingadores", genre: "Herói"},
    { title: "Deadpool", genre: "Herói"},
]
let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    }else {
        genreCount[movie.genre] = 1
    }
})

for (let genre in genreCount){
    console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre} gênero`)
}
