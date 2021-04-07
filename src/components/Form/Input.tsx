import {
  FormControl,
  FormLabel,
  Input as ChkraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export default function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChkraInput
        name={name}
        id={name}
        focusBorderColor="messenger.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgcolor: "gray.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
