import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
             text:""
        }
    }
    
    handleChange=(event)=>{
        this.setState({
            text : event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmit({
            id: 1+ Math.random(),
            text: this.state.text,
            complete:false
        })
        this.setState({
            text:""
        })
    }
    render(){
        return(
            <form id= "form">
            <input  name="text"
             placeholder="Enter text" onChange={this.handleChange}
            value={this.state.text}/>
            <button type="submit" onClick={this.handleSubmit}>Add</button>
            </form> 
        )
    }
}