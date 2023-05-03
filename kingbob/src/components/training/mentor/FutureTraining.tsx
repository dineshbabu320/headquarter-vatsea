import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  useColorModeValue,
  Link,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useState } from "react";

const FutureTraining = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // State
  const [showMePls, setShowMePls] = useState(false);

  return (
    <Card>
      <Flex>
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
          px="15px"
          py="10px"
        >
          Future Training
        </Text>
        <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
          Show example pls.
        </Button>
      </Flex>

      {showMePls ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name (CID)</Th>
                <Th>Rating</Th>
                <Th>Date and time</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Link as={NextLink} href="/profile/1000000" color="brand.500">
                    Kevin (1000000)
                  </Link>
                </Td>
                <Td>Student 1 (S1)</Td>
                <Td>31 Aug 2022 13:00 UTC</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    as="a"
                    href={"/training/detail/training-30-aug-2022"}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Center h={"100%"} w={"100%"} my="1em" px="15px" py="10px">
          There is no planned training.
        </Center>
      )}
    </Card>
  );
};

export default FutureTraining;
