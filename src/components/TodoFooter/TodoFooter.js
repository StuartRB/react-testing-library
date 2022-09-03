import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            <p style={{opacity: 0}}>not visibile but in document</p>
            <Link to="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
