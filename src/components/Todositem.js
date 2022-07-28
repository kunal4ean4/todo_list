import React from 'react'

const Todositem = ({todo,onDelete}) => {
  return (
    <div>
    <h1>{todo.title}</h1>
    <p>{todo.desc}</p>
    <div className="button btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</div> <hr />
    
    </div>
  )
}

export default Todositem