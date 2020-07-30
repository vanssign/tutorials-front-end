import React, { Component } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Layouts/Header'
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import About from "./pages/About";
import axios from 'axios'
import './App.css';

class App extends Component {
  state={
    todos:[]
  }

  //Lifecycle that runs before render
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos:res.data}))
  }



  //Toggle the complete status
  toggleComplete=(id)=>{
    this.setState({todos: this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })})
  }
  //delete a todoitem
  delTodo=(id)=>{
    // this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)]})
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> 
      this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)]}))

  }
  //Add todo
  addTodo=(title)=>{
    // var uid=(new Date().getTime()).toString(36);
    // const newTodo={
    //   id:uid,
    //   title,
    //   completed:false
    // }
    // this.setState({todos:[...this.state.todos,newTodo]});
    axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false})
    .then(res=>this.setState({todos:[...this.state.todos,res.data]}))
   }


  render(){
  return (
    <Router>
    <div className="App">
      <Header/>
      <Route exact path="/" render={props =>
        (<React.Fragment>
        <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
</React.Fragment>)}/>
<Route path="/about" component={About} />
      
     
    </div>
    </Router>
  );
}
}

export default App;
