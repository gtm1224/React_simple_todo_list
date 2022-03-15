import React,{useState} from "react";




function ToDoItem(props){
    const [crossOrNot,changeCross] = useState(false);
    function crossOutText(){
        changeCross(prev=>{
            return !prev;
        });
    }
    return <li onClick={crossOutText} style={crossOrNot? {textDecoration:"line-through"}: null}>{props.text}</li>
}

export default ToDoItem;