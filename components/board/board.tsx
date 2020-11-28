import React, { useContext, useState, useEffect } from 'react';
import styles from './board.module.css';
import { TodoListContext } from '../../contexts/todoListContext';
import { Heading, Center, Button, Tooltip, ScaleFade, transition } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';


const Board: React.FC = () => {

    const { todos, removeTask, findItem, changeStatusTask } = useContext(TodoListContext)

    return (
        <div className={styles.todoList + " grid grid-cols-3 w-3/4"}>
            {todos.map((text) => (
                <Center className="shadow-lg bg-white rounded-lg relative overflow-hidden"
                    key={text.id}
                >
                    <Heading>{text.title}</Heading>
                    <div className="bg-purple-500 rounded-full h-24 w-24 absolute -bottom-8 -right-8">
                        <Tooltip label="Delete the task">
                            <Button
                                className="float-left ml-4 mt-4"
                                _hover={{
                                    transform: "scale(1.2)",
                                    transition: "0.2s ease-in"
                                }}
                                size="sm"
                                bg="none"
                                variant="ghost"
                                onClick={() => removeTask(text.id)}
                            >
                                <DeleteIcon w={6} h={6} />
                            </Button>
                        </Tooltip>
                    </div>

                    <div className="bg-pink-500 rounded-full h-24 w-24 absolute -top-8 -right-8">
                        <Tooltip label="Edit the task">
                            <Button
                                _hover={{
                                    transform: "scale(1.2)",
                                    transition: "0.2s ease-in"
                                }}
                                className="float-left mt-10 ml-4"
                                size="sm"
                                bg="none"
                                variant="ghost"
                                onClick={() => findItem(text.id)}
                            >
                                <EditIcon w={6} h={6} />
                            </Button>
                        </Tooltip>
                    </div>
                    {text.status ?
                        <div className="bg-purple-500 rounded-full h-24 w-24 absolute -bottom-8 -left-8">

                            <Tooltip label="Mark not done">
                                <Button
                                    _hover={{
                                        transform: "scale(1.2)",
                                        transition: "0.2s ease-in"
                                    }}
                                    className="float-right mt-4 mr-4"
                                    size="sm"
                                    bg="none"
                                    variant="ghost"
                                    onClick={() => changeStatusTask(text.id, text.title, text.status)}
                                >
                                    <CloseIcon w={6} h={6} />
                                </Button>
                            </Tooltip>
                        </div>
                        :
                        <div className="bg-purple-500 rounded-full h-24 w-24 absolute -bottom-8 -left-8">
                            <Tooltip label="Mark Done">
                                <Button
                                    _hover={{
                                        transform: "scale(1.2)",
                                        transition: "0.2s ease-in"
                                    }}
                                    className="float-right mt-4 mr-4"
                                    size="sm"
                                    bg="none"
                                    variant="ghost"
                                    onClick={() => changeStatusTask(text.id, text.title, text.status)}
                                >
                                    <CheckIcon w={6} h={6} />
                                </Button>
                            </Tooltip>
                        </div>
                    }
                </Center>
            ))}
        </div>
    );
}

export default Board;