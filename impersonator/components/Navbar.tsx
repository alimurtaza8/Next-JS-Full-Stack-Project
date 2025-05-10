import {
  Button,
  Flex,
  Heading,
  Spacer,
  Box,
  Link,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      py="4"
      px={["2", "4", "10", "10"]}
      borderBottom="2px"
      borderBottomColor={"gray.400"}
    >
      <Spacer flex="1" />
      <Heading
        maxW={["302px", "4xl", "4xl", "4xl"]}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        pr="2rem"
      >
        <HStack>
          <Text>WalletConnect Pro</Text>
        </HStack>
      </Heading>
      <Flex flex="1" justifyContent="flex-end" alignItems={"center"}>
      </Flex>
    </Flex>
  );
}

export default Navbar;
