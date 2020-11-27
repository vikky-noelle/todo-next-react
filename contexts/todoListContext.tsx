import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export interface todosObject {
    title: string,
    id: string,
    status: boolean
}
interface IContextProp {
    todos: todosObject[],
    addTask(title: string): void,
    removeTask(id: string): void,
    clearList(): void,
    findItem(id: string): void,
    editTask(id: string, title: string, status: boolean): void,
    editItem: todosObject,
    changeStatusTask(id: string, title: string, status: boolean): void

}
export const TodoListContext: React.Context<IContextProp> = createContext({} as IContextProp)

const TodoListContextProvider = props => {

    const [todos, setTodos] = useState<todosObject[]>([])

    const [editItem, setEditItem] = useState<todosObject>(null)

    // Add tasks
    const addTask = (title: string): void => {
        setTodos([...todos, { title, id: uuid(), status: false }])
    }

    // Remove tasks
    const removeTask = (id: string): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    // Clear tasks
    const clearList = (): void => {
        setTodos([])
    }

    // Find task
    const findItem = (id: string): void => {
        const item = todos.find(todo => todo.id === id)

        setEditItem(item)
    }

    // Edit task
    const editTask = (title: string, id: string, status: boolean): void => {
        const newTasks = todos.map(task => (task.id === id ? { title, id, status } : task))

        console.log(newTasks)

        setTodos(newTasks)
        setEditItem(null)
    }
    // mark complete or incomplete
    const changeStatusTask = (id: string, title: string, status: boolean): void => {
        status = !status;
        const newTasks = todos.map(task => (task.id === id ? { title, id, status } : task))
        setTodos(newTasks)
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
                editItem,
                changeStatusTask
            }}
        >
            {props.children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider
