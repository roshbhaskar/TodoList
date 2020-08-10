import React from 'react'

export default props => (
    <div style={{display:"flex",justifyContent:"center"}} className="displayTodo">
        <div style={{
            textDecoration : props.todos.complete ? "line-through" : ""
        }} onClick={props.toggleComplete} className="Text-only">
            {props.todos.text}    
        </div>
    <div className="listButton"><button id="button" onClick={props.delHandle}>X</button></div>
    </div>
)
