import React from "react";
import ReactDOM from "react-dom/client"



class App extends React.Component{
  constructor(props){
    super()
    this.state={
      color:'black',
      size:'300px',
      name:props.name
    }
  }
  render(){
    return(
      <div>
      <h1>Welcome react class component</h1>
      <p>{this.state.color}</p>
      <p>{this.state.size}</p>
      <p>{this.state.name}</p>
      </div>
    )
  }
}
export default App


