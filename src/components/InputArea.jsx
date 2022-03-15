import React,{useState} from "react";

function InputArea(props){
    const [inputText,setInputText]=useState("");
    function updateInputText(event){
        const newText = event.target.value;
        setInputText(newText);
    }
    return (
        <div className="form">
        <input type="text" onChange={updateInputText} value={inputText}/>
        <button onClick={()=>
        {
            props.onAdd(inputText);
            setInputText("");
        }
        }>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;