document.querySelector("#bt").addEventListener('click', handleClick);


//INTERPOLAÇÃO
const firstName = "João"
const secondName = "Silva"
//console.log(`Olá meu nome completo é ${firstName} ${secondName}`)

//ARROW FUNCTION
const sum = (a, b) => a + b

//NORMAL FUNCTION
function multiply(a, b){
    const result = a* b;
    if( result > 4){
        return "verdade"
    }else{
        return "mentira"
    }
}

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

//CALLBACKS
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







/// ------ DATAS -------- 



/// -------- DESCONSTRUINDO OBJETOS --------


/// ----------  SPREAD OPERATOR ---------.