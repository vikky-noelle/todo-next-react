import { Button } from "@chakra-ui/react";
import { MouseEvent } from "react";

interface Props {
    name: string,
    onClick(event: MouseEvent<HTMLButtonElement>): void
}
const SecondaryButton = (props: Props) => {
    return (
        <Button
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
        </Button>
    );
};

export default SecondaryButton;