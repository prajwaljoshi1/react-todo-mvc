var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({

  getInitialState:function(){ // lets us return default state of our application
    return {
      todos :[
        {
          id:1,
          text:'Walk the dog'
        },
        {
          id:2,
          text:'Clean the yard'
        },
        {
          id:3,
          text:'Leave mail on proch'
        },
        {
          id:4,
          text:'play videogame'
        }
      ]
    }
  },
    render:function(){
      var {todos} = this.state;   // es6 de-structuring


       return(
          <TodoList todos={todos}/>
      );
    }
});

module.exports = TodoApp;
