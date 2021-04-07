import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="messenger.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgcolor: "gray.900" }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="senha">Senha</FormLabel>
            <Input
              name="password"
              id="senha"
              type="password"
              focusBorderColor="messenger.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgcolor: "gray.900" }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" colorScheme="messenger">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
