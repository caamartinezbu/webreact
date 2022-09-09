//import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";


//  const defoulTodos = [
//   {text:'Cortar cebolla',completed:false},
//   {text:'Tomar el curso de react diario',completed:true},
//   {text:'Llorar con la llorona',completed:false},
//   {text:'add kakakaka',completed:true},
// ]; 



function App() {  // si empieza con letra mayuscula, es un componente
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;


