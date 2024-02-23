document.querySelector("#bt").addEventListener('click', handleClick);


//INTERPOLAÇÃO
const firstName = "João"
const secondName = "Silva"
//console.log(`Olá meu nome completo é ${firstName} ${secondName}`)

//ARROW FUNCTION
const sum = (a, b) => a + b

//NORMAL FUNCTION
function multiply(a, b){
    return a * b
}

// -> DIFERENCAS ENTRE ARROW E FUNCTION TRADICIONAL:
// THIS -> É 




//ARRAYS
const vodka = ["smirnoff", "belvedere", "komarofona"]

//ADICIONA AO FINAL
vodka.push("Kovak")
//REMOVE ÚLTIMO ITEM ARRAY
vodka.pop()
//REMOVE PRIMEIRO ITEM ARRAY
vodka.shift()

//PERCORRENDO ARRAY
for ( let i in vodka){
    //console.log(vodka[i])
} 

//JUNTANDO DOIS ARRAYS
const fruits = ['maca', 'pera', 'uva', 'mamao']
const moreFruits = [ 'pessego', 'melancia']
const newArrayOfFruits = [...fruits, ...moreFruits]


//OBJETOS
const person = {
    nome: "Guilherme",
    idade: 31,
    prof: "Programador",
    speak(){
        return `Olá , eu me chamo ${this.nome}, e possuo ${this.idade} anos.`
    }   
}

//LOOP WHILE
let x = 0
while( x < 4){
//fazerqualquercoisa
    x++
}

//CALLBACKS & PROMISES & REQUISICOES

// -> Códigos que serão executados de forma assíncrona que funcionam como uma promessa. Por exemplo: Realize uma requisição (ou qualquer código assíncrono), e assim que obtiver a resposta, execute essa função pré determinada(Callback).

// LINK FALSE API :  http://jsonplaceholder.typicode.com/posts

function handleClick(){
    loadPostsWithPromises();
    //loadPostsWithAsyncAwait()
}
//GET
function loadPostsWithPromises(){
    fetch("http://jsonplaceholder.typicode.com/posts")
    // O fetch é uma requisição que trabalha de forma Assíncrona , logo, o primeiro then e a função em seguida abaixo significa o que será executado assim que a resposta do nosso fetch retornar. Em outras palavras: "Busque o resultado nessa requisicao, quando obter, execute essa funcao ..."
    .then((response) => {
        return response.json();
    })
    // Quando transformamos a response em um objeto através do método .json(), estamos fazendo outro procedimento assícrono. Por isso que temos o próximo then abaixo, para executar a função assim que estiver pronto a transformação do nosso json. 
    .then((json)=> {
        console.log(json)
    })
    //As vezes, a requisição pode dar algum error como o link estar quebrado, o servidor fora do ar, entre diversos outros. Precisamos informar o usuário desses erros, para isso entra o .catch abaixo. "Caso algo de errado, execute essa função". Caso queiramos detalhar exatamente o error, basta pegar o error dentro do primeiro parametro do catch.
    .catch((error) => {
        console.log("Algo deu Errado na Requisição")
        console.log(error)
    })
    // Por último temos o Finally. É uma função final que será executada no final de tudo, independente se a requisição tiver ocorrido de forma correta ou errada. 
    .finally(()=>{
        console.log("Finalizamos por aqui.")
    })
}

//POST
function insertPostWithPromises(){
    fetch('http://jsonplaceholder.typicode.com/posts', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    .then((response)=> {
        return response.json()
    })
    .then((json)=>{
        console.log(json)
    })

}

async function loadPostsWithAsyncAwait(){
    try {
        const response = await fetch("http://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log( `deu erro geral `)
    }
}

async function loadPostsWithAsyncAwait(){
    const req = await fetch('http://jsonplaceholder.typicode.com/posts', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    const json = await req.json()
}
// ----> DIFERENCA ENTRE THEN & ASYNC/AWAIT
// A maior diferenca é que utilizando o Async Await, voce PAUSA toda a execucao de código para que ele aguarde a resposta da promise. Tudo que vem abaixo mesmo sendo fora da promise, será pausado e só continuará o fluxo da execucao após o término. 
// Já utilizando o THEN, a execucao do código todo fora é executado e quando obtiver a resposta da promise ele executará o Callback.










/// -------  MÉTODOS DE STRING. ---------
let nome = "Guilherme Tavares e Tavares";
// -> Quantidade de Caracateres.
nome.length

// -> Se existe uma parte do texto na string, Caso existe retorna a posicao, caso contrário retornará -1.
// If nome.indexOf > -1 -> Significa que ACHOU.
nome.indexOf('vodka')

// Colocamos dois parametros. 1- Posicao inicial, 2- Posicao final.
// -> Irá retornar da posicao inicial, até a final selecionada. Caso nao sete a posicao final, retornará até o final.
nome.slice(3, 7)

//Substitui textos específico em cada String. 
// -> Ex: Substituir o Tavares por Silva.
nome.replace('Tavares', 'Silva')

//Coloca toda a frase/string para letra maiúscula ou minúscula.
nome.toUpperCase()
nome.toLowerCase()

//Informa qual Caractere está na posição deseajda.
nome.charAt(5)

// Transforma uma String em um array, dividindo a string exatamente onde houver o "informado". Exemplo: Se passarmos um espaco em branco, sempre que houver um espaco, sera dividido em demais itens.
nome.split(' ')

// Procura se uma String começa com a string a ser buscada:
nome.startsWith('Gui')

// Procura se o final de uma string é igual a string a buscar:
nome.endsWith('')










/// -------  MÉTODOS DE NUMBERS. ---------
let n = 10;

// -> Transforma qualquer variavel do tipo número para uma string.
n.toString();

// -> Quando um número possui muitas casas decimais ex: 32.422442, podemos arredondar para apenas duas casas decimais, ex:
n.toFixed(2);

// Quando temos uma String de um número, podemos transforma-la para um number, ex:
let string = "25"
parseInt(string);








/// -------  MÉTODOS DE ARRAYS. ---------

const array = ['Ovo', 'Maca', 'Milho', 'Trigo']

// -> Para saber em qual posição(Índice) do Array esta determinado item.
// No caso irá retornar 1, Pois Maca é o segundo indice do array.
console.log(array.indexOf('Maca'))

// -> Faz um filtro, gerando outro array 'filtrado'.
// No caso abaixo, irá filtrar o array para excluir o 'Milho'.).
// Todos os items que forem diferentes de 'Milho' Entrarão no novo Array.
const newArray = array.filter((item) => item !== 'Milho' )
console.log(newArray)

// -> Percorre todo um array, podendo iterar em cada item. Serve para Mapear o Array.
array.map((item) => {
    console.log(`Este item é: ${item}`)
})

// -> Aqui funciona como o "Tudo ou Nada".
// Aqui não é gerado outro array. Aqui retorna true ou False.
// APENAS RETORNARÁ true quando TODOS os items do array baterem com a condicao.
// No exemplo abaixo, ele percorre cada item do Array, e retorna false, pois nem todos são maiores do que 7.
const numberArray = [ 1, 4, 6, 7, 8]
console.log(numberArray.every((i) => i > 7 ))

// -> Aqui é o inverso do Every.
// Aqui se apenas UM item do array bater a condição, ele irá retornar true.
// No caso, retornará true, pois alguns batem com a condição.
console.log(numberArray.some((i)=> i>6))

// -> Aqui ele irá procurar algo dentro do Array.
// Por exemplo, uma lista de Logins, podemos procurar se existe tal Login.
// No caso abaixo ele procura por guigui, achando, retorna o objeto.
// Não achando retorna Undefined.
const users = [ 
    { id:1, nome: 'joao'},
    { id:2, nome: 'guigui'},
    { id:3, nome: 'vodka'}
]
const finded = users.find((item) => item.nome === 'guigui')
console.log(finded)

//-> Saber se algo está incluido dentro de uma Lista. 
// Retorna True or False. por exemplo:
// No caso possui, então é verdadeiro, caso contrário, false.
console.log("aqui que é " + array.includes('Ovo'))




/// ------ DATAS -------- ///

// -> Criar um objeto da classe Date.
// Ele automáticamente vem com a data atual que foi criado.
// A informação é pega através do hardware. 
let date = new Date();

// -> Também é possível gerar uma data de acordo com as informacoes passadas por parametro:
// No caso, estamos gerando uma data de 1 de março de 2022.
// -> No universo JS Janeiro é o mes 0, e assim por diante.
let generateDate = new Date(2022, 2, 1);

// -> Pegar apenas o ano, mes,  dia, hora de uma data:
date.getFullYear();
date.getMonth();
date.getDate();
date.getHours();

// -> Pegar Timestump do momento atual.
// Facilita 'calculos' de data.
let momentDate = Date.now();

// -> Setar valores das datas
date.setFullYear(2024)
date.setMonth(11)

// -> Aumenta a data atual em 5 dias (exemplo).
date.setDate(date.getDate() + 5);

// -> Aumenta as horas de uma data em 4 horas(exemplo).
date.setHours(date.getHours() + 4);







// ----------- FUNCOES MATEMATICAS -------- //
let numberExemple;
// -> Arredondar Número .
numberExemple = Math.floor(3.5)
// -> Arredondar Número para Baixo:
numberExemple = Math.floor(3.4)
// -> Arredondar Número para Cima:
numberExemple = Math.ceil(3.2)

// -> Gera um número aleatório entre 0 e 1.
let ramdomNumber = Math.random();
// -> Gera um número aleatório entre 0 e o número Desejado: 
// Aqui estamos pegando um número de 0 a 1, multiplicando por 100, e arredondando para baixo. 
// Dessa forma teremos um número inteiro.
let ramdomNumberSeted = Math.floor(Math.random() * 100);




// ------------ TIMEOUT, TIME --------- //
// -> Timer que roda uma função repetitivamente de tanto em tanto tempo.
// Nesse exemplo, a cada 2 segundos ele irá executar a função 'FUNC'.
// Abaixo temos o clearInterval, que é o antidoto para parar a repetição.
const func = () =>{
}
let timer = setInterval(func, 2000)
clearInterval(timer);

// -> Aqui setamos um tempo, e depois de determinado x tempo, ele irá executar a funcao.
// -> No caso abaixo, ao disparar o timeout, depois de Dois segundos a funcao será executada.
setTimeout(2000, () =>{
})



/// -------- DESCONSTRUINDO/DESESTRUTURANDO OBJETOS --------
const personn = {
    name: 'gui',
    idade: 30, 
    social: {
        fb: 'fb',
        inst: 'inst'
    }
}
// Através da desestruturacao podemos pegar uma informacao de forma mais simples.
// -> Forma Antiga:
let personAge = personn.idade;
let personFb = personn.social.fb;
// -> Forma Desestruturada: 
let {idade, name} = personn; 
let {fb, inst} = personn.social;



/// ----------  SPREAD & REST OPERATOR ---------.
// -> Ao trabalharmos com frameorks como React, nos depararemos com o conceito da Imutabilidade, logo, constantemente precisaremos alterar arrays por exemplo.
// -> IMUTABILIDADE: é o conceito de que nenhum dado será alterado. Sempre que quisermos alterar algum objeto, iremos criar outro objeto com as alteracoes desejadas.
// -> Dessa forma, estamos juntando o array 1, o array 2, e mais um número.
let array1 = [1, 2, 3]
let array2 = [4,5,6]
let array12 = [...array1, ...array2, 7]
// -> Também podemos utilizar para aticionar atributos e a objetos. Ex:
let human = {
    nome: 'gui',
    sobrenome: 'tvrs'
}
let human2 = {...human, maconha: 'jonatan'}

// -> Também podemos utilizar para desestruturar e salvar todo o resto que sobrar. 
// No Exemplo, salvaremos o titulo e o email em variaveis especificas, o resto em uma variavel chamada de Resto, que nesse caso irá conter o ano e a cor.
const livro = {
    titulo: 'arca de noe',
    email: 'gggg',
    ano: 1999,
    cor: 'preto'
}
const {titulo, email, ...resto} = livro;

// -> Mais um exemplo é quando queremos alterar algo utilizando o conceito da imutalibilidade. Por exemplo:
const voto = {
    data: 'hoje',
    votou: false
}
// De acordo como a imutabilidade, nós não podemos fazer na mão grande igual abaixo:
voto.votou = true;
// Dessa forma estamos alterando diretamente um objeto.
const newVoto = {...voto, votou: true}