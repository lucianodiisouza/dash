import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
export default function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1480}
      w="100%"
      h="20"
      mt="4"
      px="6"
      mx="auto"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dashnext
        <Text as="span" ml="1" color="green">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          placeholder="Buscar na plataforma"
          px="4"
          mr="4"
          variant="unstyled"
          _placeholder={{ color: "gray.400" }}
        />
		<Icon as={RiSearchLine} fontSize="20" />
        
      </Flex>
    </Flex>
  );
}
