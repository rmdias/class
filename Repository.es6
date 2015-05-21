(function(){
  'use strict';

  class Repository {
    constructor(name, author, date) {
      this.name = name;
      this.author = author;
      this.date = date;
    };

    getName(){
      return this.name;
    };

    getAuthor(){
      return this.author;
    };

    getDate(){
      return this.date;
    };
  };

  class GithubProjetc extends Repository {
    constructor(name, author, date) {
      super(name, author, date); // herdando parametros de `Repository`
    };

    getProjectData(){
      return this;
    };
  };

  let project = new GithubProjetc('Liferay-Test', 'Rodolfo Dias', 'may 2015');

  console.log(project.getName()) // get project name
  console.log(project.getAuthor()) // get project author
  console.log(project.getDate()) // get project date
  console.log(project.getProjectData()) // get all data from the project
})();