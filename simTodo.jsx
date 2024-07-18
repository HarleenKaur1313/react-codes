import React  from "react";
import { useState } from "react";

// ques: lets create a simple todo array that renders 3 todos

// 1. create a todo component that accepts title, description as inputs
// 2. initialise a state array that has 3 todos
// 3. iterate over the array to render all the todos
// 4. a button at the top level App component to render all the todos.




// initialiseing a global variable for id to increment each time and adding counter ++ there.
// becoz if we keep it inside the App component then when App would re-render it would again start with 4.
const counter= 4;
//------------------------------------------------------------------------------------------------------------------------------------
// 2. initialise a state array that has 3 todos
function App() {

  const[todos, setTodos] = useState([{
    id:1,
    title:"go to waheguru",
    description: "go to waheguru today"
  },{
    id:2,
    title:"go eat food",
    description: "go eat food today"
  }, {
    id:3,
    title:"go to class",
    description: "go to class today"
  }])


function addTodo(){
  setTodos([...todos, {                         // [...todos]   --> for getting the array of old todos
    id: counter++, 
    title: Math.random(),
    description: Math.random()
  }])
}



// another way to add todo through for loop, 
// first create a function then add a empty array for newTodos

// function addTodo(){
//   const newTodos= []                                // we made an empty array for old and new todos
//   for (let i = 0; i < todos.length; i++){          // looped over the array of todos
//     newTodos.push(todos[i])                        // the existing arrays are pushed inside the array ; i symbolises kla kla todo in todos array

//   } 
//   newTodos.push({                                  // now a new todo is pushed in newTodos array
//     id: 4, 
//     title: Math.random(),
//     description: Math.random() 
//   })
//   setTodos(newTodos)                               // Calls the setTodos function with the newTodos array as an argument. This
//                                                    // updates the state (assuming this is in a React component) with the new 
                                                      //array   of todos, which includes the original todos and the newly added todo.
// }

return(
  <>
    {/* as button should be returned */}
    <button onClick={addTodo}> Add a Todo </button>
   {/* 3. iterate over the array to render all the todos */}

  {todos.map((todo)=><Todo key={todo.id} title= {todo.title} description= {todo.description}></Todo>) } 
   {/* here we have written {todo.title} to refer the object array */}
  {/* giving a hey while rendering an array is imp as react can get confused if array is sorted, del, inserted. 
  this key is just provided while rendering in the component but not in the Todo component defined below.....*/}
    </>
  )
}

//----------------------------------------------------------------------------------------------------------------------------------------
// 1. create a todo component that accepts title, description as inputs

function Todo({ title, description}){
  return(
    <div> 
      
      <h1> {title}  </h1>
    <h5> {description} </h5>

      </div> )
}



export default App



