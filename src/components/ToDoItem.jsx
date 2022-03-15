import React,{useState} from "react";




function ToDoItem(props){
    // const [crossOrNot,changeCross] = useState(false);
    // function crossOutText(){
    //     changeCross(prev=>{
    //         return !prev;
    //     });
    // }

    return (
    <li onClick={()=>
    {props.onChecked(props.id);
    }}>
    {props.text}
    </li>
    )
}

export default ToDoItem;