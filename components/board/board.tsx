import React, { useContext, useState, useEffect } from 'react';
import styles from './board.module.css';
import { TodoListContext } from '../../contexts/todoListContext';
import { Heading, Button, Box, Tooltip } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';


const Board: React.FC = () => {
    const [name, setName] = useState<string>(() => "")

    const { todos, addTask, editTask, editItem, removeTask, findItem, changeStatusTask } = useContext(TodoListContext)

    const handleSubmit = e => {
        e.preventDefault()
        if (!editItem) {
            addTask(name)
            setName('')
        } else {
            editTask(name, editItem.id, editItem.status)
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
                <Heading as="h1" size="xl" padding="20px" mb="2">To Do</Heading>
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
                        <Tooltip label="Delete the task">
                            <Button
                                size="sm"
                                bg="none"
                                variant="ghost"
                                onClick={() => removeTask(text.id)}
                            >
                                <DeleteIcon w={6} h={6} />
                            </Button>
                        </Tooltip>
                        <Tooltip label="Edit the task">
                            <Button
                                size="sm"
                                bg="none"
                                variant="ghost"
                                onClick={() => findItem(text.id)}
                            >
                                <EditIcon w={6} h={6} />
                            </Button>
                        </Tooltip>
                        {text.status ?
                            <Tooltip label="Mark not done">
                                <Button
                                    size="sm"
                                    bg="none"
                                    variant="ghost"
                                    onClick={() => changeStatusTask(text.id, text.title, text.status)}
                                >
                                    <CloseIcon w={6} h={6} />
                                </Button>
                            </Tooltip>
                            :
                            <Tooltip label="Mark Done">
                                <Button
                                    size="sm"
                                    bg="none"
                                    variant="ghost"
                                    onClick={() => changeStatusTask(text.id, text.title, text.status)}
                                >
                                    <CheckIcon w={6} h={6} />
                                </Button>
                            </Tooltip>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Board;