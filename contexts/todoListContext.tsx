import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

interface IContextProp {
    todos,
    addTask(title: string): void,
    removeTask,
    clearList,
    findItem,
    editTask,
    editItem

}
export const TodoListContext = createContext({} as IContextProp)

const TodoListContextProvider = props => {

    const [todos, setTodos] = useState([])

    const [editItem, setEditItem] = useState(null)

    // Add tasks
    const addTask = (title: string): void => {
        setTodos([...todos, { title, id: uuid() }])
    }

    // Remove tasks
    const removeTask = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // Clear tasks
    const clearList = () => {
        setTodos([])
    }

    // Find task
    const findItem = id => {
        const item = todos.find(todo => todo.id === id)

        setEditItem(item)
    }

    // Edit task
    const editTask = (title, id) => {
        const newTasks = todos.map(task => (task.id === id ? { title, id } : task))

        console.log(newTasks)

        setTodos(newTasks)
        setEditItem(null)
    }

    return (
        <TodoListContext.Provider
            value={{
                todos,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider
