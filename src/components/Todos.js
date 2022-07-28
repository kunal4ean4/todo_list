import React from 'react'
import Todositem from './Todositem'

const todos = ({todos,onDelete}) => {
  let todoContainer={
    display:"flex",
    flexDirection:"column",
    marginLeft:"100px"
  }
  return (
    <div  style={todoContainer}>
    <h1>Your todo work of the Day</h1>
    <hr />
    {todos.length===0 ? "Please add in the List":
    todos.map((todo)=>{
        return <Todositem todo={todo} key={todo.Sno} onDelete={onDelete}/>
    })
    } 
   
    </div>
  )
}

export default todos