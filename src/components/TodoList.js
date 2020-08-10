import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo.js'
export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
             todos:[]
        }
    }
    
    
    addList=(todo)=>{
        this.setState({
            todos:[...this.state.todos,todo]
        })}
    toggleComplete=(id)=>{
        this.setState({
            todos:this.state.todos.map((todo)=>{
            if(todo.id===id){
                return{
                    ...todo,
                    complete: ! todo.complete
                };
            }
            else{
                return todo;
            }
        })
        });
    };

    delHandles=(id)=>{
        this.setState({
            todos:this.state.todos.filter(x=>x.id!==id)
        })
    }

    render(){
    return (
       <p className="box">
          <h2>To Do List</h2>  
    <h3>Tasks left today: {this.state.todos.filter(x=>!x.complete).length}</h3>
          <TodoForm onSubmit={this.addList}/>
          {this.state.todos.map((todos)=>{
              return( <Todo todos={todos} key={todos.id} toggleComplete={()=>this.toggleComplete(todos.id)} 
              delHandle={()=>this.delHandles(todos.id)}/> )})  
          }
        </p>
    )}
}

