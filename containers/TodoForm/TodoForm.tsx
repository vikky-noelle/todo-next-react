import React, { useContext, useState, useEffect } from 'react';
import { TodoListContext } from '../../contexts/todoListContext';
import PrimaryButton from '../../components/button/Button';
import PrimaryInput from '../../components/Input/Input';


const TodoForm: React.FC = () => {
    const [name, setName] = useState<string>(() => "")

    const { addTask, editTask, editItem, clearList } = useContext(TodoListContext)

    const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        if (!editItem) {
            addTask(name)
            setName('')
        } else {
            editTask(name, editItem.id, editItem.status)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            handleSubmit(e)
    }

    useEffect(() => {
        if (editItem) {
            setName(editItem.title)
            console.log(editItem)
        } else {
            setName('')
        }
    }, [editItem])

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            <PrimaryInput
                value={name}
                onKeyPress={handleKeyPress}
                onChange={e => setName(e.target.value)}
                placeholder="Enter Item" />
            <PrimaryButton
                onClick={handleSubmit}
                name={editItem ? 'Edit Task' : 'Add Task'} />
            <PrimaryButton
                name="Reset"
                onClick={() => clearList()}
            />
        </div>
    );
}

export default TodoForm;