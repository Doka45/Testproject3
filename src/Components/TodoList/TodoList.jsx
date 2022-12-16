import React, {useEffect, useState} from "react";
import "./TodoStyle.css";
import { TRASH } from "../../image";
import { trippleDot } from "../../image";
import Button from "react-bootstrap/Button";
// import { DeleteTodo } from './Components/DeleteTodo/DeleteTodo';
import { v4 as uuidv4 } from "uuid";


    
function TodoList({ todo, setTodo }) {

    // const [deleted, setDeleted] = useState(null);
    const [type, setType] = useState("all");
    const [items, setItems] = useState(todo);

  
    function todoFilter(newType) {
        setType(newType);
    };
    
    function deleteTodo(id) {
        setTodo((prevtoDo) => prevtoDo.map((item) => {
            if (item.id === id) { return { ...item, isTrash: !item.isTrash } }
            else return item;
        }
        ));
    }

        function doneTodo(id) {
        setTodo((prevtoDo) => prevtoDo.map((item) => {
            if (item.id === id) { return { ...item, isDone: !item.isDone } }
            else return item;
        }
            
        ));
    }

    function statusTodo(id) {
        setTodo((prevtoDo) => prevtoDo.map((item) => {
            if (item.id == id) {
                return {
                    ...item, isDone: !item.isDone
                }
            }
            else return item;
        }
        ));
    }

    const handleItemChecked = (id) => {
        setItems((prevItems) => prevItems.map((item) => {
            if (item.id === id) {
                return { ...item, isDone: !item.isDone }
            } else return item;
        }))
    };
    const filteredItems =
            
            type === "done"
            ? todo.filter((item) => item.isDone)
            : type === "trash"
            ? todo.filter((item) => item.isTrash)
            : todo;
        
    console.log(todo)
    
    // const handleItemDone = (keyFromLabel) => {
    //     const index = items.findIndex((item) => item.id === keyFromLabel);
    //     const oldObj = items[index];
    //     const newObj = { ...oldObj, isDone: !oldObj.isDone };
        
    //     const leftPart = items.slice(0, index);
    //     const rightPart = items.slice(index + 1, items.length);

    //     const newItems = [...leftPart, newObj, ...rightPart];

    //     setItems(newItems);
    // };
// 
    // const oldItem = items.filter((el) => el.id === id)[0];
    // const itemIndex = items.findIndex((el) => el.id === id);
    // const newItem = { ...oldItem, isDone: !oldItem.isDone };

    // setItems([
    //     ...items.slice(0, itemIndex),
    //     newItem,
    //     ...items.slice(itemIndex + 1, items.length),
    // ]);





    return (
        <div>
            <div aria-label="Basic example" className="allBut" >
                <Button className="butTodo" variant="outline-secondary" onClick={() => todoFilter("all")}> <b>To Do</b></Button>
                <Button className="butDone" variant="outline-secondary" onClick={() => todoFilter("done")}> <b>Done</b></Button>
                <Button className="butTrash" variant="outline-secondary" onClick={() => todoFilter("trash")}> <b>Trash</b></Button>
            </div>
            
            <hr></hr>
            {
                filteredItems.map(item => {
                    if (!(item.isTrash && type !== 'trash'))
                        
                        return <div key={item.id} className="listItems">
                        
                        
                        <div id={item.id}>{item.title}</div> 

                            <button className=""
                            style={{
                                border: "none",
                                background: "white",
                            }}
                            >
                            <input type="checkbox" />
                        </button> 

                        <button style={{
                            border: "none",
                            background: "white",
                            class: " \uF5D3"
                        }} onClick={() => deleteTodo(item.id)}>
                            {trippleDot}
                        </button> 

                    </div>
                })
            }
        </div>
    )
}

export default TodoList;
