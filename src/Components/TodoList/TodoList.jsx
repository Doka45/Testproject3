import React, {useEffect, useState} from "react";
import "./TodoStyle.css";
import { TRASH } from "../../image";
import { trippleDot } from "../../image";

    
function TodoList({ todo, setTodo }) {

    const [deleted, setDeleted] = useState(null);
    // const [filtered, setFiltered] = useState(todo);
    const [type, setType] = useState("all");
    const [items, setItems] = useState(todo);

    // useEffect(() => {
    //     setFiltered(todo)
    // },[todo])
    
    function todoFilter(newType) {
        // if (status === "all") {
        //     setFiltered(todo)
        // } else {
        //     let newTodo = [...todo].filter(item => item.status === status)
        //     setFiltered(newTodo)
        // }
        setType(newType)

    }
    
    function deleteTodo(id) {
        // setDeleted(id);
        // let newTodo = [...todo].filter(item => item.id != id);
        setTodo((prevtoDo) => prevtoDo.map((item) => {
            if (item.id === id) { return { ...item, isTrash: !item.isTrash } }
            else return item;
        }
            
        ));
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status;
            }
            return item;
        })
        setTodo(newTodo);
    }

    // const handleChangeStatus = (typeFromButton) => {
    //     setType(typeFromButton);
    // };

    const filteredItems =
            
            type === "done"
            ? todo.filter((item) => item.isDone)
            : type === "trash"
            ? todo.filter((item) => item.isTrash)
            : todo;

    console.log(todo);
    return (
        <div>
                    <div aria-label="Basic example" className="allBut" >
                        <button className="butTodo"  onClick={ ()=> todoFilter ("all")}>To Do</button>
                        <button className="butDone"  onClick={ ()=> todoFilter ("done")}>Done</button>
                        <button className="butTrash" onClick={ ()=> todoFilter ("trash")}>Trash</button>
                    </div>
                      <hr></hr>
            {
                filteredItems.map(item => (
                    <div key={item.id} className="listItems">
                
                                <div>{item.title}</div>
                    
                        {/* {
                            deleted == item.id ?
                                <div>
                                    <button>Move to Trash</button>
                                    <button>Delete Forever</button>
                                    <button>Move Back To To Do</button>
                                </div> :
                                <div>

                                </div>
                        } */}
                        
                        <button style={{
                            border: "none",
                            background: "white"
                        }} onClick={() => statusTodo(item.id)}>
                            
                        <input type="checkbox" />
                        </button>
                                <button style={{
                                    border: "none",
                                    background: "white"
                                }} onClick={() => deleteTodo(item.id)}>
                                    {trippleDot}
                                </button>
                        

                    </div>
                ))
            }
        </div>
        

        
    )
}

export default TodoList;




// <div key={item.id} className="listItems">
                
                    //             <div>{item.title}</div>
                    
                   
                        
                    //     <button style={{
                    //         border: "none",
                    //         background: "white"
                    //     }} onClick={() => statusTodo(item.id)}>
                            
                    //     <input type="checkbox" />
                    //     </button>
                    //             <button style={{
                    //                 border: "none",
                    //                 background: "white"
                    //             }} onClick={() => deleteTodo(item.id)}>
                    //                 {trippleDot}
                    //             </button>
                        

                    // </div>