import React, { useContext, useState, useEffect } from 'react';
import styles from './Board.module.css';
import { TodoListContext } from '../../Contexts/TodoListContext';
import { Heading, Center, Button, Tooltip, ScaleFade, transition } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import SecondaryButton from '../Button/SecondaryButton';


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
                            <SecondaryButton
                                className="float-left ml-4 mt-4"
                                onClick={() => removeTask(text.id)}
                            >
                                <DeleteIcon w={6} h={6} />
                            </SecondaryButton>
                        </Tooltip>
                    </div>

                    <div className="bg-pink-500 rounded-full h-24 w-24 absolute -top-8 -right-8">
                        <Tooltip label="Edit the task">
                            <SecondaryButton
                                className="float-left mt-10 ml-4"
                                onClick={() => findItem(text.id)}
                            >
                                <EditIcon w={6} h={6} />
                            </SecondaryButton>
                        </Tooltip>
                    </div>
                    {text.status ?
                        <div className="bg-purple-500 rounded-full h-24 w-24 absolute -bottom-8 -left-8">

                            <Tooltip label="Mark not done">
                                <SecondaryButton
                                    className="float-right mt-4 mr-4"
                                    onClick={() => changeStatusTask(text.id, text.title, text.status)}
                                >
                                    <CloseIcon w={6} h={6} />
                                </SecondaryButton>
                            </Tooltip>
                        </div>
                        :
                        <div className="bg-purple-500 rounded-full h-24 w-24 absolute -bottom-8 -left-8">
                            <Tooltip label="Mark Done">
                                <SecondaryButton
                                    className="float-right mt-4 mr-4"
                                    onClick={() => changeStatusTask(text.id, text.title, text.status)}
                                >
                                    <CheckIcon w={6} h={6} />
                                </SecondaryButton>
                            </Tooltip>
                        </div>
                    }
                </Center>
            ))}
        </div>
    );
}

export default Board;