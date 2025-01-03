// import React,{useState,useCallback} from "react";

// function Child({onClick}){
//   console.log('Child rendered');
//   return <button onClick={onClick}>Click me</button>;
// }

// export default function App(){
//   const [count,setCount]=useState(0);
//   const [text,setText]=useState('');


// const handleClick=useCallback(()=>{
//   setCount((prev)=> prev +1);
// },[]);

// return(
//   <div>
//     <h1>Usecallback Example</h1>
//     <p>count: {count}</p>
//     <Child onClick={handleClick} />
//     <input 
//     type="text"
//     value={text}
//     onChange={(e)=> setText(e.target.value)}
//     placeholder="Type something" 
//     />
//   </div>
// )
// } 

import { useState } from "react";
import RecatDOM from "react-dom/client";

const App =() =>{
  const [count,setCount] = useState(0);
  const [todos, setTodos]=useState([]);


const Calculation = expensiveCalculation(count);

const increment =() =>{
  setCount((c) => c+ 10000);
};
const addTodos =() =>{
  setTodos((t) => [...t, "New Todo"]);
};

return(
  <div>
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index)=>{
        return <p key={index}>{todo}</p>
      })}
      <button onClick={addTodos}>Add Todo</button>
    </div>
    <hr/>
    <div>
      count:{count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {Calculation}
    </div>
  </div>
);
};
 const expensiveCalculation =(num) =>{
  console.log("Calculating...");
  for(let i=0;i<100000000;i++){
    num +=1;
  }
  return num;
  
 };

 export default App

 
