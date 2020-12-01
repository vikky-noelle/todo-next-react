import { Input, InputProps } from "@chakra-ui/react";

const PrimaryInput = (props: InputProps) => {
    return (
        <Input
            variant="flushed"
            value={props.value}
            onKeyPress={props.onKeyPress}
            onChange={props.onChange}
            placeholder={props.placeholder} />
    );
};

export default PrimaryInput;