import React, { useContext } from 'react';
import styles from './header.module.css'
import { Heading, Box } from '@chakra-ui/react';
import { TodoListContext } from '../../contexts/todoListContext';

const Header: React.FC = () => {
    const { clearList } = useContext(TodoListContext);
    return (
        <div className={styles.header}>
            <Heading as="h1" size="xl">T o d o &nbsp; A p p</Heading>
            <Box
                as="button"
                bg="rgb(255,255,255, 0.6)"
                height="35px"
                width="10%"
                marginTop="12px"
                marginRight="20px"
                fontSize="1.2em"
                // padding="5px"
                _hover={{
                    bg: "#ebedf0",
                    color: "black"
                }}
                onClick={() => clearList()}
            >Reset</Box>

        </div>
    );
}

export default Header;