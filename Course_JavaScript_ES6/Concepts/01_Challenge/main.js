// 01 - Exercício - Para testar seus conhecimentos com classes,
// crie uma classe com nome "Admin", essa classe deveextender
// uma segunda classe chamada "Usuario".
// A classe usuário deve receber dois parâmetros no método construtor,
// e-mail e senha, e anotá-losem propriedades da classe. A classe
// "Admin" por sua vez não recebe parâmetros mas deverepassar os
// parâmetros de e-mail e senha à classe pai e marcar uma propriedade
// "admin" comotrue na classe.
// Agora com suas classes formatadas, adicione um método na classe
// Usuario chamado isAdmin queretorna se o usuário é administrador
// ou não baseado na propriedade admin ser true ou não.

class Usuario {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    isAdmin() {
        return this.admin === true;
    }

}
class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());


// 02 - Exercício - A partir do seguinte vetor e utilizando os
// métodos de array (map, reduce, filter e find):

const usuarios2 = [
    { nome2: 'Diego', idade2: 23, empresa2: 'Rocketseat' },
    { nome2: 'Gabriel', idade2: 15, empresa2: 'Rocketseat' },
    { nome2: 'Lucas', idade2: 30, empresa2: 'Facebook' },
];

// 2.1 Utilizando o map
const idade2 = usuarios2.map(users => users.idade2);
console.log(idade2);

// 2.2 Utilizando o filter
const filter = usuarios2.filter(users => users.empresa2 === 'Rocketseat' && users.idade2 > 18);
console.log(filter);

// 2.3 Utilizando o find
const find = usuarios2.find(users => users.empresa2 === 'Google');
console.log(find);

// 2.4 Unindo operações
const calculo2 = usuarios2.map(users => ({...users, idade2 : users.idade2 * 2})).filter(users => users.idade2 <= 50)
console.log(calculo2);


// 03 - Exercício - Converta as funções nos seguintes trechos de
// código em Arrow Functions:

// 3.1
const arr3_1 = [1, 2, 3, 4, 5]

// arr3_1.map (function(item) {
// return item + 10;
// });

const newArr3_1 = arr3_1.map(item => item + 10);

console.log(newArr3_1);

// 3.2
// Dica: Utilize uma constante pra function

// const usuario3_2 = { nome3_2: 'Diego', idade3_2: 24 };

// function mostraIdade (usuario3_2) {
// return console.log(usuario3_2.idade3_2);
// }

// mostraIdade(usuario3_2);

const usuario3_2 = { nome3_2: 'Diego', idade3_2: 24 };

const { nome3_2, idade3_2 } = usuario3_2;

const mostraIdade = () => ({ idade3_2 });

console.log(mostraIdade(usuario3_2));

// 3.3
// Dica: Utilize uma constante pra function

const nome3_3 = 'Letícia';
const idade3_3 = 26;

// function mostraUsuario (nome3_3 = 'Letícia', idade3_3 = 20) {
// return { nome3_3, idade3_3 };
// }

// console.log(mostraUsuario (nome3_3, idade3_3));
// console.log(mostraUsuario (nome3_3));

const mostraUsuario = (nome3_3 = 'Letícia', idade3_3 = 18) => ({
    nome3_3,
    idade3_3
});

console.log(mostraUsuario(nome3_3, idade3_3));
console.log(mostraUsuario(nome3_3));

// 3.4

// const promise = function () {
// return new Promise(function (resolve, reject) {
// return resolve();
// })
// }

const promise = () => new Promise(resolve, reject => resolve());


// 04 - Exercício

// 4.1 - Desestruturação Simples
// A partir do objeto, utilize a desetruturação para transformar as
// propriedades nome, cidade e estado em variáveis. 

const empresa = {
    nome4_1: 'Rocketseat',
    endereco4_1: {
        cidade4_1: 'Rio do Sul',
        estado4_1: 'SC',
    }
};

const { nome4_1, endereco4_1: {
    cidade4_1, estado4_1 }
} = empresa;


console.log(nome4_1);      // Rocketseat
console.log(cidade4_1);    // Rio do Sul
console.log(estado4_1);    // SC

// 4.2 Desestruturação em parâmetros
// Utilize a desestruturação nos parâmetros da função para buscar o nome
// e idade do usuário separadamente.

function mostraInfo({ nome4_2, idade4_2 }) {
    //return `${usuario.nome} tem ${usuario.idade} anos.`;
    return console.log(`${nome4_2} tem ${idade4_2} anos.`);
}

mostraInfo({ nome4_2: 'Diego', idade4_2: 23 })


// 05 - Exercício - Utilizando o operador de rest/spread (...), realize
// as operações.

// 5.1 - REST - A partir do array: const arr = [1, 2, 3, 4, 5, 6],
// defina uma variável x que recebe a primeira posição do vetor e outra
// variável y que recebe todo restante dos dados.

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de
// todos eles:

function soma(...parms) {
    return parms.reduce((total, next) =>
        total + next
    );
}

console.log(soma(1, 3, 4));

// 5.2 - SPREAD - A partir do objeto dado, e utilizando o operador
// spread, crie uma variável usuario5_1 que contenha todos os dados do
// usuário porém com nome Gabriel.

const usuario5 = {
    nome: 'Alexandre',
    idade: 27,
    endereco: 'Contenda',
    uf: 'PR',
    pais: 'Brasil',
};

console.log(usuario5);

const usuario5_1 = {
    ...usuario5,
    nome: 'Gabriel'
};

console.log(usuario5_1);

// Crie uma variável usuario5_2 que contenha todos os dados do usuário
// porém com cidade Lontras.

const usuario5_2 = {
    ...usuario5,
    endereco: 'Lontras'
};

console.log(usuario5_2);


// 06 - Exercício - Converta o seguinte trecho de código utilizando
// Template Literals:

const usuario6 = 'Alexandre';
const idade6 = 27;

console.log(`O usuário ${usuario6} possui ${idade6} anos.`);


// 07 - Exercício - utilize a sintaxe curta de objetos
// (Object Short Syntax).

const nome = 'Alexandre';
const idade = 27;

const usuario7 = {
    nome,
    idade,
    cidade: 'Contenda',
};

console.log(usuario7);