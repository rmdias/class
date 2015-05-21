(function(){
  'use strict';

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
})();