import React from 'react';
import styles from './Header.module.css'
import { Heading } from '@chakra-ui/react';
import TodoForm from '../../containers/TodoForm/TodoForm';

const Header: React.FC = () => {
    return (
        <div className={styles.header + " h-1/4 w-4/5 shadow-lg rounded-lg bg-white relative overflow-hidden"}>
            <div className="bg-purple-500 rounded-full h-48 w-48 absolute -bottom-24 -right-24"></div>
            <div className="bg-pink-500 rounded-full h-24 w-24 absolute -top-7 -right-10"></div>
            <Heading className="p-4" as="h1" size="xl">
                C r e a t e &nbsp; T a s k</Heading>
            <TodoForm />
        </div>
    );
}

export default Header;