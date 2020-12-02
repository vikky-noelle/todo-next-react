import { Button } from "@chakra-ui/react";
import { MouseEvent } from "react";

interface Props {
    children: React.ReactNode,
    className: string,
    onClick(event: MouseEvent<HTMLButtonElement>): void
}
const SecondaryButton = ({ className, children, onClick }: Props) => {
    return (
        <Button
            _hover={{
                transform: "scale(1.2)",
                transition: "0.2s ease-in"
            }}
            className={className}
            size="sm"
            bg="none"
            variant="ghost"
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default SecondaryButton;