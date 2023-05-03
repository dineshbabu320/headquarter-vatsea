import { ChevronDownIcon } from "@chakra-ui/icons";
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
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import NextLink from "next/link";
import { useState } from "react";

const CPTRequest = () => {
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
          CPT Request
        </Text>
        <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
          Show example pls.
        </Button>
      </Flex>

      <Text fontSize={"sm"} px="15px" pb="10px">
        Request listed below already approved by student&apos;s mentor
      </Text>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name (CID)</Th>
              <Th>For</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {showMePls && (
              <>
                <Tr>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000000"
                      color="brand.500"
                    >
                      Kevin (1000000)
                    </Link>
                  </Td>
                  <Td>Student 2 (S2)</Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link as={NextLink} href="/training/1000002">
                            {" "}
                            View training record
                          </Link>
                        </MenuItem>
                        <MenuItem>Approve & schedule CPT</MenuItem>
                        <MenuItem>Reject request</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000001"
                      color="brand.500"
                    >
                      Stuart (1000001)
                    </Link>
                  </Td>
                  <Td>Student 3 (S3)</Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link as={NextLink} href="/training/1000002">
                            {" "}
                            View training record
                          </Link>
                        </MenuItem>
                        <MenuItem>Approve & schedule CPT</MenuItem>
                        <MenuItem>Reject request</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Link
                      as={NextLink}
                      href="/profile/1000002"
                      color="brand.500"
                    >
                      King Bob (1000002)
                    </Link>
                  </Td>
                  <Td>Enroute Controller (C1)</Td>
                  <Td>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link as={NextLink} href="/training/1000002">
                            {" "}
                            View training record
                          </Link>
                        </MenuItem>
                        <MenuItem>Approve & schedule CPT</MenuItem>
                        <MenuItem>Reject request</MenuItem>
                      </MenuList>
                    </Menu>
                  </Td>
                </Tr>
              </>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CPTRequest;
