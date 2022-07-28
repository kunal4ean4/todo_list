// import Header from './components/Header';
import Todos from './components/Todos';
import './App.css';
import {useEffect, useState} from 'react'

import AddTodo from './components/AddTodo';

// import About from './components/About';



// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete=(todo)=>{
    console.log("i'm deleted",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos))

  }


  const addTodo=(title,desc)=>{
    console.log("I am added",title,desc);
    let Sno;
    if(todos.length===0){
      Sno=0;
    }
    else{
    Sno=todos[todos.length-1].Sno+1;
  }
    let mytodos={
      Sno:Sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,mytodos])
    console.log(mytodos)
  }



  let[todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  
  }, [todos])


  
  return (
    <>
    {/* <Router>
      <Header title="Working List" searchBar={true}/>
    <Routes>

    <Route exact path='/' element={<>  <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/> </>}/>
    
    <Route path='/about' element={<About/>} />

    </Routes> */}

      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/> 
        {/* <Footer/> */}
      {/* </Router>  */}
    </> 
  );
}

export default App;
