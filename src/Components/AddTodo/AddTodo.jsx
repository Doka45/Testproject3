import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState("")

    function saveTodo() {
        if(value) {
            setTodo(
                [...todo, {
                    id: uuidv4(),
                    title: value,
                    status:true
                }]
            )
            setValue("");
        }
    }
        
    return (
        <div style={{
            borderRadius: "12px",
            border: "none",
            height: "234px",
            position: "absolute",
            left: "920px",
            top: "122px",
            background: "#E4E6E7",
            padding: "16px",
        }}
        >
            <div className="addText">
                <b style={{
                    height: "22px",
                    width: "236px",
                    left: "16px",
                    top: "16px",
                    borderRadius: "nullpx"
                }}
                >
                    Add New To Do
                </b>
            </div>
            <input placeholder="Your text" value={value} onChange={(e) => setValue(e.target.value)}
                style={{
                    width: "236px",
                    height: "120px",
                    background: "#FFFFFF",
                    borderradius: "12px",
                    border: "0px",
                }} />
            <div>
                <button style={{
                    border: "none",
                    margin: "15px",
                    width: "76px",
                    height: "40px",
                    padding: "8px 24px ",
                    borderRadius: "100px",
                    backgroundColor: "black",
                    color: "#FFFFFF",
                    cursor: "pointer"
                }}
                    onClick={saveTodo}> Add </button>
            </div>
        </div>
    )
}

export default AddTodo;