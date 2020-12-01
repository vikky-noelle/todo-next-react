import { Box, BoxProps } from "@chakra-ui/react";

interface Props extends BoxProps {
    name: string
}
const PrimaryButton = (props: Props) => {
    return (
        <Box
            w="75%"
            as="button"
            bg="#44D362"
            opacity="0.9"
            _hover={{
                opacity: 1,
                color: "black"
            }}
            onClick={props.onClick}
        >
            {props.name}
        </Box>
    );
};

export default PrimaryButton;