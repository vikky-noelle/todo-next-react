import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { v4 as uuid } from 'uuid'

export interface TodosObject {
    title: string,
    id: string,
    status: boolean
}

interface Props {
    children: React.ReactNode
}
interface IContextProp {
    todos: TodosObject[],
    addTask(title: string): void,
    removeTask(id: string): void,
    clearList(): void,
    findItem(id: string): void,
    editTask(id: string, title: string, status: boolean): void,
    editItem: TodosObject,
    changeStatusTask(id: string, title: string, status: boolean): void

}
export const TodoListContext: React.Context<IContextProp> = createContext({} as IContextProp)

const TodoListContextProvider = (props: Props) => {

    const [todos, setTodos] = useState<TodosObject[]>([])

    const [editItem, setEditItem] = useState<TodosObject>(null)

    const addTask = (title: string): void => {
        setTodos([...todos, { title, id: uuid(), status: false }])
    }

    const removeTask = (id: string): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const clearList = (): void => {
        setTodos([])
    }

    const findItem = (id: string): void => {
        const item = todos.find(todo => todo.id === id)

        setEditItem(item)
    }

    const editTask = (title: string, id: string, status: boolean): void => {
        const newTasks = todos.map(task => (task.id === id ? { title, id, status } : task))

        console.log(newTasks)

        setTodos(newTasks)
        setEditItem(null)
    }

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
