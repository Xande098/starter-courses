"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, password) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.password = password;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); // 02 - Exercício - A partir do seguinte vetor e utilizando os
// métodos de array (map, reduce, filter e find):

var usuarios2 = [{
  nome2: 'Diego',
  idade2: 23,
  empresa2: 'Rocketseat'
}, {
  nome2: 'Gabriel',
  idade2: 15,
  empresa2: 'Rocketseat'
}, {
  nome2: 'Lucas',
  idade2: 30,
  empresa2: 'Facebook'
}]; // 2.1 Utilizando o map

var idade2 = usuarios2.map(function (users) {
  return users.idade2;
});
console.log(idade2); // 2.2 Utilizando o filter

var filter = usuarios2.filter(function (users) {
  return users.empresa2 === 'Rocketseat' && users.idade2 > 18;
});
console.log(filter); // 2.3 Utilizando o find

var find = usuarios2.find(function (users) {
  return users.empresa2 === 'Google';
});
console.log(find); // 2.4 Unindo operações

var calculo2 = usuarios2.map(function (users) {
  return _objectSpread(_objectSpread({}, users), {}, {
    idade2: users.idade2 * 2
  });
}).filter(function (users) {
  return users.idade2 <= 50;
});
console.log(calculo2); // 03 - Exercício - Converta as funções nos seguintes trechos de
// código em Arrow Functions:
// 3.1

var arr3_1 = [1, 2, 3, 4, 5]; // arr3_1.map (function(item) {
// return item + 10;
// });

var newArr3_1 = arr3_1.map(function (item) {
  return item + 10;
});
console.log(newArr3_1); // 3.2
// Dica: Utilize uma constante pra function
// const usuario3_2 = { nome3_2: 'Diego', idade3_2: 24 };
// function mostraIdade (usuario3_2) {
// return console.log(usuario3_2.idade3_2);
// }
// mostraIdade(usuario3_2);

var usuario3_2 = {
  nome3_2: 'Diego',
  idade3_2: 24
};
var nome3_2 = usuario3_2.nome3_2,
    idade3_2 = usuario3_2.idade3_2;

var mostraIdade = function mostraIdade() {
  return {
    idade3_2: idade3_2
  };
};

console.log(mostraIdade(usuario3_2)); // 3.3
// Dica: Utilize uma constante pra function

var nome3_3 = 'Letícia';
var idade3_3 = 26; // function mostraUsuario (nome3_3 = 'Letícia', idade3_3 = 20) {
// return { nome3_3, idade3_3 };
// }
// console.log(mostraUsuario (nome3_3, idade3_3));
// console.log(mostraUsuario (nome3_3));

var mostraUsuario = function mostraUsuario() {
  var nome3_3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Letícia';
  var idade3_3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome3_3: nome3_3,
    idade3_3: idade3_3
  };
};

console.log(mostraUsuario(nome3_3, idade3_3));
console.log(mostraUsuario(nome3_3)); // 3.4
// const promise = function () {
// return new Promise(function (resolve, reject) {
// return resolve();
// })
// }

var promise = function promise() {
  return new Promise(resolve, function (reject) {
    return resolve();
  });
}; // 04 - Exercício
// 4.1 - Desestruturação Simples
// A partir do objeto, utilize a desetruturação para transformar as
// propriedades nome, cidade e estado em variáveis. 


var empresa = {
  nome4_1: 'Rocketseat',
  endereco4_1: {
    cidade4_1: 'Rio do Sul',
    estado4_1: 'SC'
  }
};
var nome4_1 = empresa.nome4_1,
    _empresa$endereco4_ = empresa.endereco4_1,
    cidade4_1 = _empresa$endereco4_.cidade4_1,
    estado4_1 = _empresa$endereco4_.estado4_1;
console.log(nome4_1); // Rocketseat

console.log(cidade4_1); // Rio do Sul

console.log(estado4_1); // SC
// 4.2 Desestruturação em parâmetros
// Utilize a desestruturação nos parâmetros da função para buscar o nome
// e idade do usuário separadamente.

function mostraInfo(_ref) {
  var nome4_2 = _ref.nome4_2,
      idade4_2 = _ref.idade4_2;
  //return `${usuario.nome} tem ${usuario.idade} anos.`;
  return console.log("".concat(nome4_2, " tem ").concat(idade4_2, " anos."));
}

mostraInfo({
  nome4_2: 'Diego',
  idade4_2: 23
}); // 05 - Exercício - Utilizando o operador de rest/spread (...), realize
// as operações.
// 5.1 - REST - A partir do array: const arr = [1, 2, 3, 4, 5, 6],
// defina uma variável x que recebe a primeira posição do vetor e outra
// variável y que recebe todo restante dos dados.

var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x);
console.log(y); // Crie uma função que recebe inúmeros parâmetros e retorna a soma de
// todos eles:

function soma() {
  for (var _len = arguments.length, parms = new Array(_len), _key = 0; _key < _len; _key++) {
    parms[_key] = arguments[_key];
  }

  return parms.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 4)); // 5.2 - SPREAD - A partir do objeto dado, e utilizando o operador
// spread, crie uma variável usuario5_1 que contenha todos os dados do
// usuário porém com nome Gabriel.

var usuario5 = {
  nome: 'Alexandre',
  idade: 27,
  endereco: 'Contenda',
  uf: 'PR',
  pais: 'Brasil'
};
console.log(usuario5);

var usuario5_1 = _objectSpread(_objectSpread({}, usuario5), {}, {
  nome: 'Gabriel'
});

console.log(usuario5_1); // Crie uma variável usuario5_2 que contenha todos os dados do usuário
// porém com cidade Lontras.

var usuario5_2 = _objectSpread(_objectSpread({}, usuario5), {}, {
  endereco: 'Lontras'
});

console.log(usuario5_2); // 06 - Exercício - Converta o seguinte trecho de código utilizando
// Template Literals:

var usuario6 = 'Alexandre';
var idade6 = 27;
console.log("O usu\xE1rio ".concat(usuario6, " possui ").concat(idade6, " anos.")); // 07 - Exercício - utilize a sintaxe curta de objetos
// (Object Short Syntax).

var nome = 'Alexandre';
var idade = 27;
var usuario7 = {
  nome: nome,
  idade: idade,
  cidade: 'Contenda'
};
console.log(usuario7);
