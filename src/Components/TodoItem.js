import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
getStyle=()=>{
    // if(this.props.todo.completed){
    //     return{textDecoration:'Line-through'
    //     }}

    //     else{
    //         return{
    //             textDecoration:'none'
    //         }
    //     }
    return{
        background:'grey',
        padding:'10px',
        textDecoration:this.props.todo.completed?'Line-through':'none'
    }
    }
    
   
    


    render() {

        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                {/* inline styling requires 2{} and no - but camelCase */}
                
                    <input type="checkbox" onChange={this.props.toggleComplete.bind ( this,id )} />
                
                <span>{ title }</span>
                <button style ={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
            </div>
        )
    }
    
}

//PropTypes
TodoItem.propTypes={todos:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
    };


const btnStyle={background: 'red',
color:'white',
border:'1px'};
export default TodoItem
