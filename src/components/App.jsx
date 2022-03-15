import React,{useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {


  const [inputText,setInputText]=useState("");
  const [items,setItems] =useState([]);

  function updateInputText(event){
      const newText = event.target.value;
      setInputText(newText);
  }
  function addItem(){
    setItems(prev=>{
      return [...prev,inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    // console.log("clicked");
    setItems(prev=>{
      return prev.filter(
        (item,index)=>{
          return index!==id;
        }
      );
    });

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateInputText} value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item,index)=>(
            <ToDoItem 
            key={index}
            id={index}
            text={item}
            onChecked={deleteItem}
            />))}
        </ul>
      </div>
    </div>
  );
}

export default App;
