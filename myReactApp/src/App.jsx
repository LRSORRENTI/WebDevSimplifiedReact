import { useState } from "react"
 
 import "./style.css"



export default function App(){
 const [newItem, setNewItem] = useState("")
 const [todoItems, setTodoItems] = useState([])

function handleSubmit(event){
  event.preventDefault()
  setTodoItems((currentTodos) => {
    return [...currentTodos, {id: crypto.randomUUID,
     title: newItem, completed: false } ]
})
}

console.log(todoItems)

  return (
  <>
  <form onSubmit={handleSubmit} className="add-item-form">
    <div className="row-form">
      <label htmlFor="item">My Items</label>

      <input value={newItem}
       onChange={event => setNewItem(event.target.value) }
       type="text" id="item" />
    </div>
    <button className="btn">Add Item</button>
  </form>
  <h1 className="h1">My To-Do List</h1>
  <ul className="list-items">
{todoItems.map((todo) => {
    return (
        <li>
      <label>
        <input type="checkbox" checked={todo.completed} />
        {todo.title}
      </label>
      <button className="btn btn-danger">Delete Item</button>
    </li>
    )
  })}

  </ul>
  </>
  )
}