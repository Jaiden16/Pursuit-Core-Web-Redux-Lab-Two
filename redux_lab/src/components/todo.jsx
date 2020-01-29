import React from 'react'

const ToDoForm = () => {
    return (
        <div>
            <hi>Todo</hi>
            <br/>
            <br/>
            <form>
                <label htmlFor = "text">Label </label>
                <input  id = "text" type = "text"/><br/>
                <label htmlFor = "todo">Todo </label>
                <input id = "todo" type = "text"/><br/>
                <button>ADD</button>
            </form>
        </div>
    )
}




export default ToDoForm