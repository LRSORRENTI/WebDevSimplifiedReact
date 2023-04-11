import { useState } from "react"
 
 import "./style.css"



export default function App(){
 const [newItem, setNewItem] = useState("Walk dogs")
  return (
  <>
  <form className="add-item-form">
    <div className="row-form">
      <label htmlFor="item">My Items</label>
      <input value={newItem} type="text" id="item" />
    </div>
    <button className="btn">Add Item</button>
  </form>
  <h1 className="h1">My To-Do List</h1>
  <ul className="list-items">
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete Item</button>
    </li>
  </ul>
  </>
  )
}