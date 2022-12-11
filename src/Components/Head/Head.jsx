import React from "react";
import s from "./Heade.module.css";

function Head() {
    return (
        <div>
            <div className={s.root}>
                <h2>Simple To Do List</h2>
                <small>Today is awesome day. The weather is awesome, you are awesome too!</small>


            </div>
        </div>
    )
}

export default Head;