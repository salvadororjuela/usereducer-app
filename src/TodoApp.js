import {useReducer} from "react";

const types = {
    add : "add",
    update : "update",
    delete : "delete"
}

const initialTodos = [
    {id: 1, title: "Todo #1"},
    {id: 2, title: "Todo #2"}
]

const reducer = (state, action) => {
    switch(action.type) {
        case types.delete:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(reducer, initialTodos)

    return (
        <div>
            <h1>TodoApp</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => dispatch({
                            type: types.delete,
                            payload: todo.id
                        })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;