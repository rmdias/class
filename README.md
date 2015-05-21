# Desafio




```javascript
//Escrever classe JS para o código
	
var p1 = new Person();
	p1.speak1(); // ‘speak1’
	
var r1 = new Rodolfo();
	r1.speak1(); // ‘speak1’
	r1.speak2(); // ‘speak2’
```



### Solução apresentada

```javascript

// Class.js

function Person(){
  this.speak1 = function(){
    console.log('speak 1');
  };
};

function Rodolfo(){
  Person.apply(this);
  // Person.apply(this, ['nome', 'sobrenome']); ( Rodar a Classe neste escopo e passando parametros )
  // Person.call(this, 'nome', 'sobrenome'); ( Outra maneira de rodar a classe neste escopo e passando parametros )
  this.speak2 = function(){
    console.log('speak 2');
  };
};

var p1 = new Person();
    p1.speak1();

var r1 = new Rodolfo();
    r1.speak1();
    r1.speak2(); 
```


### Solução com ES6

```javascript
// Person.es6

(function(){
  'use strict';

  class Person {
    speak1(){
      console.log('speak1');
    };
  };

  class Rodolfo extends Person {
    constructor(){
      super();
    };

    speak2() {
      console.log('speak2');
    };
  }

  let r1 = new Rodolfo();
      r1.speak1(); //speak1
})();
```
