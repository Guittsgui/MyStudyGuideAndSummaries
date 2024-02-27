// Primeiros Passos TS.

// -> TIPANDO VARIAVEIS:
// Toda variavel precisamos tipar 
let numero:number = 1; 
let nzme:string = 'Joaquim';
let hasMoney:boolean = false;

// -> TIPANDO ARRAYS:
let tsArray:string[] = ['Vodka' , 'Gin', 'Uisque', 'Gim'];
let tsArray2: Array<number> = [1, 2, 5, 6 ,7]

// -> TYPE ANY 
// O type any existe única e exclusivamente para o TYPESCRIPT.
// Ele nos permite 'ignorar' os types, e colocar outro tipo de dado.
// No exemplo abaixo temos um array de string. Porém supostamente podemo querer adicionar um número. Ele basicamente diz: TS, Estou colocando o Any, então pare de monitar os tipos daqui.
let arrayNomes:any[] = ['Bonieky', 'Pedro', 'Marcola',555];


//TYPANDO PARÂMETROS DE FUNÇÕES:
const tsParamsFunction = (number1:number, number2:number) =>{
}

// -> TYPANDO RETORNO DE FUNÇÕES:
const tsReturnFunction = (): string =>{
    return 'vodka'
}

// -> TYPANDO FUNÇÃO INTEIRA.
// Uma funcao de soma, podemos criar um type para typalas por completo. Ex:
type MathFunction = (n1:number, n2: number) => number 

const soma:MathFunction = (n1, n2) =>{
    return n1 + n2
}




// -> TIPANDO OBJETOS:
// Ao passarmos um objeto por parametro para uma função, é necessário que typemos cada atributo do objeto que será utilizado dentro da função.
// No exemplo abaixo, ao enviarmos o user, precisamos tipar o nom e a idade, que está sendo utilizado dentro da funcao.
// Já o isSmoker não foi necessário pois não está sendo utilizado. Caso venhamos a utilizar, precisaremos typar.
// -> No parametro idade, podemos reparar um ->  ? <-, que significa que este parametro é opcional. 
const tsHuman = {
    nome: 'GuiGui',
    idade: 90,
    isSmoker: false
}
const resumeHuman = (user: {nome: string, idade?: number}) =>{
    return `Olá ${user.nome} , voce tem ${user.idade} anos`
}
resumeHuman(tsHuman);

// -> CRIANDO O TYPE SEPARADO: 
// Em objetos muitog randes, pode ficar confuso todas as propriedades necessárias escritas ali dentro, por isso podemos criar o type por fora e enviar. Exemplo:
// OBS: Types geralmente são criados no padrão PascalCase.

type TypeTsHuman = {
    nome:string,
    idade:number
}
const resumeHuman2 = (user: TypeTsHuman) =>{
}

// -> CRIANDO TYPES UTILIZANDO INTERFACE:
// Funciona 99% igual ao Type. 
// Sua única diferença é que utilizando a Interface podemos altera-las futuramente e usando o Type não podemos altera-la. Como no exemplo abaixo, a interaface possui nom e idade. Sendo declarada em locais diferentes. Caso façamos o mesmo com Type, o sistema irá dar error.
interface TypeTsHuman2{
    nome:string
}
interface TypeTsHuman2{
    idade: number
}

// TYPE LITERALS
// É basicamente quando tipamos algum dado, informando exatamente o valor ou conjunto de valores que esperamos receber, e não apenas só o seu tipo. Por exemplo: Supomos que tenhamos uma String, e só poderemos receber 'esquerda' ou 'direita', para isso:
// Dessa forma, ao utilizarmos esse type, além dele aceitar apenas String, só irá aceitar a String que possuir o mesmo valor informado no Literal Type.
type StringLiteralType = {
    texto: string,
    lugar: 'direita' | 'esquerda' | 'centro'
}




// -> UNION TYPES.
// Também podemos setar dois tipos diferentes para um mesmo dado.
// Dessa forma ele 'aceitará' as duas.
let doubleType: string | number = "Vodka"
doubleType = 20





// -> TS CONFIGS:



// -> 