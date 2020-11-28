import React, { useContext, useState, useEffect } from 'react';
import styles from './board.module.css';
import { TodoListContext } from '../../contexts/todoListContext';
import { Input, Box } from '@chakra-ui/react';


const TodoForm: React.FC = () => {
    const [name, setName] = useState<string>(() => "")

    const { addTask, editTask, editItem, clearList } = useContext(TodoListContext)

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <Input
                variant="flushed"
                value={name}
                onKeyPress={handleKeyPress}
                onChange={e => setName(e.target.value)}
                placeholder="Enter Item" />
            <Box
                w="75%"
                as="button"
                bg="#44D362"
                opacity="0.9"
                _hover={{
                    opacity: 1,
                    // bg: "#ebedf0",
                    color: "black"
                }}
                onClick={handleSubmit} > {editItem ? 'Edit Task' : 'Add Task'}</Box>
            <Box
                w="75%"
                as="button"
                bg="#44D362"
                opacity="0.9"
                _hover={{
                    opacity: 1,
                    // bg: "#ebedf0",
                    color: "black"
                }}
                onClick={() => clearList()}
            >Reset</Box>
        </div>
    );
}

export default TodoForm;