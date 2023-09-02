//1  crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = true;

if(dia){
    console.log("Esta claro!");
}else{
    console.log("Esta de noite!");
}

//2 Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for(let i = 0; i<=20; i+=2){
    console.log(`Você fez ${i} pontos!`);
}


//3 crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log("Sou uma função e estou exibindo uma mensagem no console!")
}
mensagem()

//4 crie uma função que receba o seu nome como (parâmetro) e exiba no console

function yourName (nome) {
    console.log(`Meu nome é ${nome}`)
}

yourName ("Guilherme");

//5 crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function gostos (nome, idade, musica) {
    console.log(`Meu nome é ${nome}, tenho ${idade} e gosto de ${musica}`)    
}

gostos ("Guilherme", 23, "RAP")

//6 crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function seusFavoritos (filme, musica) {
    console.log(`Meu filme favorito é ${filme} e minha música favorita é ${musica}`)
}

seusFavoritos ("Kung-fu Panda", "Continuação de um sonho - BK")

//7 crie uma função que retorne o triplo do número recebido no parâmetro da função

function multiplique (numero, multiplicado) {
    console.log (`O numero que escolhi é ${numero} e pela função irá virar ${multiplicado*=3}`)
}

multiplique (10, 10)

//8  crie uma função que  verifique se uma  variável é true ou false

function verificarVerdade () {
    let teste = true
    if(teste == true){
        console.log("A variavél é true")
    }else{
        console.log("A variavel é false")
    }
}

verificarVerdade()

//9 Crie um array que receba 5 itens e exiba no console.

let frutas = ["Banana", "Pera", "Morango", "Abacaxi", "Mamão"]

console.log(frutas)

//10 Utilize um método para adicionar um nome ao inicio do array.

frutas.unshift("Goiaba")
console.log(frutas)

//11  Utilize um método para remover o último nome do array.

frutas.splice(5, 1)
console.log(frutas)

//12 Utilize um método para adicionar dois nomes ao fim do array.

frutas.push("Maça", "Uva")
console.log(frutas)

//13 Utilize um método para remover o primeiro nome do array.

frutas.splice(0, 1)
console.log(frutas)

//14 Utilize um método para organizar em ordem crescente o seguinte array:
 
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)

//15 Crie um objeto que receba ao menos três propriedades sobre você.

let minhasPropriedades = {
    primeira: "Comunicativo",
    segunda: "Focado",
    terceira: "Interativo"
}

console.log(minhasPropriedades)

//16 Adicione uma nova propriedade sem alterar seu objeto inicial.

minhasPropriedades ["quarta"] = "Dedicado"
console.log(minhasPropriedades)

//17 Remova uma propriedade desse objeto.

delete minhasPropriedades.terceira
console.log(minhasPropriedades)

//18 Mostre no console todas as propriedades desse objeto.

console.log(minhasPropriedades.primeira)
console.log(minhasPropriedades.segunda)
console.log(minhasPropriedades.quarta)

//19 Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
    {
        nome: "Julia",
        idade: 19,
        telefone: 40028922,
        amigos: ["Igor", "Rodolfo", "Ketly", "Vitor"]
    },
    {
        nome: "Junior",
        idade: 24,
        telefone: 89990000,
        amigos: ["Emily", "Mariana", "Leticia", "Ana"]
    },
    {
        nome: "Matheus",
        idade: 13,
        telefone: 55442223,
        amigos: ["Nelio", "Helio", "Jaime", "Andressa"]
    },
    {
        nome: "Carol",
        idade: 25,
        telefone: 47896245,
        amigos: ["Ingrid", "Djavan", "Joao", "Pedro"]
    },
    {
        nome: "Lucas",
        idade: 33,
        telefone: 87445602,
        amigos: ["Carlos", "Breno", "Guilherme", "Ruan"]
    }
];

console.log(cadastro);


//20 Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[2]);
console.log(cadastro[2].amigos[1]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[0]);

//DESAFIO FINALIZADO ESPERO QUE GOSTEM s2!!!!

