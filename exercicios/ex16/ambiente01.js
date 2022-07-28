//ficando na ordem certa
//o metodo .push tem que vir primeiro que o metodo .sort
//para ter esse resultado: [ 1, 2, 4, 5, 8 ]
//[ 1, 2, 4, 5, 8 ]
// Nosso vetor tem 5 posições
// O primeiro valor do vetor é 1
let num = [5, 8, 4, 2]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)// mostra dentro do elemento a posição do valor/conteudo


// não vai ficar na ordem certa
// [ 2, 4, 5, 8, 1 ]
// Nosso vetor tem 5 posições
// O primeiro valor do vetor é 2
// let num = [5, 8, 4, 2]
// num.sort()
// num.push(1)
// console.log(num)
// console.log(`Nosso vetor tem ${num.length} posições`)
// console.log(`O primeiro valor do vetor é ${num[0]}`)