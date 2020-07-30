import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state={
        title:''
    }
    onChange=(e)=>this.setState({title:e.target.value});
    //This is only a component state
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});}
    
    render() {
        return (
           <form onSubmit={this.onSubmit} style={{textAlign:'center'}}>
               <input type="text" name="title" placeholder="Add Todo item" value={this.state.title}
               onChange={this.onChange} />
               <input type="submit" value="Submit"/>
           </form>
        )
    }
}

//PropTypes
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired
    };

export default AddTodo
