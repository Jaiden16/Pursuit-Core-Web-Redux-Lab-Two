import { AddTodo } from "../actionTypes"

const intialToDo = {
    nextTodoId: 1,
    todos: [],
    visibilityFilter: "all"
}

const toDoReducer = (state = intialToDo, action) => {
    const stateCopy = { ...state } //making a copy of current state

    switch (action.type) {
        case AddTodo:
            console.log("function hit")
            break;

        default:
            break;
    }

    return stateCopy

}

export default toDoReducer