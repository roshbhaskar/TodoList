import React from 'react';
import './App.css';
import TodoList from './components/TodoList.js'
class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
       text:'',
       List:[]
    }
  }
 /* addText(){
    const List = [...this.state.List];
    List.push(this.text);

    this.setState({
      text: this.text,
      //List: this.List.push(this.text)
    })
  }
  submitButton(){
    //e.preventDefault()
    //const List = [...this.state.List];

    // add the new item to the list
    //List.push(this.text);

    this.setState({
      List: this.List.push(this.text),
      //text:""
    })
  }*/
  
  render(){
  return (
    <div style={{textAlign:"center"}} className="container">
   < TodoList />
   </div>
  );
}
}

export default App;
