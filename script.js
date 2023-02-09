//1 - Crie um array que receba 5 itens e exiba no console:


let frutas = ["maçã", "uva", "morango", "limão", "abacaxi"]
console.log(frutas)

//2 - Utilize um método para adicionar um nome ao inicio do array:

frutas.unshift("jabuticaba")
console.log(frutas)

//3 - Utilize um método para remover o último nome do array:

frutas.pop() //Remove o abacaxi
console.log(frutas)

//4 - Utilize um método para adicionar dois nomes ao fim do array:

frutas.push("pêra", "goiaba")
console.log(frutas)

 //5 - Utilize um método para remover o primeiro nome do array:

 frutas.shift()
 console.log(frutas)

//6 - Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]
console.log(numbers)

console.log(numbers.sort())

//7 - Crie um objeto que receba ao menos três propriedades sobre você:

let pessoas = [
    {
    nome: "Thalyson",
    idade:"22 anos",
    olhos:"castanho escuro",
  }]

  console.log(pessoas)

//8 - Adicione uma nova propriedade sem alterar seu objeto inicial:


pessoas[0].cabelo = "preto"
console.log(pessoas)

//9 - Remova uma propriedade desse objeto:

delete pessoas[0].cabelo
console.log(pessoas)

//10 - Mostre no console todas as propriedades desse objeto:

console.log(pessoas[0])

//11 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos:
///Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
///Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
   {
  nome: "Bruna", 
  idade:32, 
  telefone:"12345-1234", 
  amigos: ["Mateus", "José"]
},
{
  nome: "Mateus", 
  idade:20, 
  telefone:"32132-2342", 
  amigos: ["João", "Fernanda"]
},
{
  nome: "Fernanda", 
  idade:20, 
  telefone:"99999-9999", 
amigos: ["Bruna", "Carlos"]
},
{
  nome: "Carlos", 
  idade:25, 
  telefone:"91929-3934", 
amigos: ["Mateus", "Marcos"]
},
{
  nome: "Marcos", 
  idade:30, 
  telefone:"02030-4944", 
amigos: ["Larissa", "Paulo"]
}
]

//12 - Mostre no console o nome de um amigo de cada lista:

for (let elemento of cadastro){

  console.log(elemento.amigos[0])}