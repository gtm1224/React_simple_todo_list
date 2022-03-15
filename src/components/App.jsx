import React,{useState} from "react";

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
          {items.map(item=><li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;