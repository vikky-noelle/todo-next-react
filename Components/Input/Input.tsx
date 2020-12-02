import { Input, InputProps } from "@chakra-ui/react";

const PrimaryInput = ({ value, onKeyPress, onChange, placeholder }) => {
    return (
        <Input
            variant="flushed"
            value={value}
            onKeyPress={onKeyPress}
            onChange={onChange}
            placeholder={placeholder} />
    );
};

export default PrimaryInput;