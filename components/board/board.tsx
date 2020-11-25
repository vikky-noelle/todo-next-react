import React, { useContext, useState, useEffect } from 'react';
import styles from './board.module.css';
import { TodoListContext } from '../../contexts/todoListContext';
import { Heading, Button, Box } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const Board: React.FC = () => {
    const [name, setName] = useState(() => "")

    const { todos, addTask, editTask, editItem } = useContext(TodoListContext)
    const { removeTask, findItem } = useContext(TodoListContext)

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addTask(name)
            setName('')
        } else {
            editTask(name, editItem.id)
        }
    }

    const handleKeyPress = e => {
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
        <div className={styles.container}>
            <div className={styles.todo}>
                <Heading as="h1" size="xl" mb="2">To Do</Heading>
                <input
                    value={name}
                    onKeyPress={handleKeyPress}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter Item"></input>
                <Box
                    as="button"
                    bg="#44D362"
                    _hover={{
                        bg: "#ebedf0",
                        color: "black"
                    }}
                    onClick={handleSubmit}>{editItem ? 'Edit Task' : 'Add Task'}</Box>
            </div>
            <div className={styles.todoList}>
                {todos.map((text) => (
                    <div key={text.id}>
                        <h1>{text.title}</h1>
                        <Button
                            size="sm"
                            bg="none"
                            variant="ghost"
                            onClick={() => removeTask(text.id)}
                        >
                            <DeleteIcon w={6} h={6} />
                        </Button>
                        <Button
                            size="sm"
                            bg="none"
                            variant="ghost"
                            onClick={() => findItem(text.id)}
                        >
                            <EditIcon w={6} h={6} />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board;