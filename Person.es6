(function(){
  'use strict';

  class Person {
    speak1(){
      console.log('speak1');
    };
  };

  class Rodolfo extends Person {
    constructor(){
      super(); // herdando parametros de `Person`
    };

    speak2() {
      console.log('speak2');
    }
  }

  let r1 = new Rodolfo();
      r1.speak1(); //speak1
})();