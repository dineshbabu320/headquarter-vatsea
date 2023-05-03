import {
  VStack,
  Flex,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import AddLOA from "@components/staff/modal/AddLOA";
import ViewLOA from "@components/staff/modal/ViewLOA";
import AdminLayout from "@layouts/admin";
import NextLink from "next/link";
import { ReactElement } from "react";

const LeaveOfAbsence = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Modal
  const { onOpen: onCreateLOAModal, modal: createLOAModal } = AddLOA();
  const { onOpen: onViewLOAModal, modal: viewLOAModal } = ViewLOA();

  return (
    <>
      <VStack spacing={"20px"} align="stretch">
        <Flex align="center" justify={"space-between"}>
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
            Leave of Absence List
          </Text>
          <Button colorScheme={"blue"} onClick={onCreateLOAModal}>
            Add visitor
          </Button>
        </Flex>

        <Card>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Controller</Th>
                  <Th>Start</Th>
                  <Th>End</Th>
                  <Th>Last approvals</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
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
                  <Td>20 September 2021</Td>
                  <Td>01 January 2022</Td>
                  <Td>5 September 2021</Td>
                  <Td>
                    <Button
                      colorScheme={"blue"}
                      onClick={onViewLOAModal}
                      mr={1}
                    >
                      View reason
                    </Button>
                    <Button colorScheme={"red"}>Remove</Button>
                  </Td>
                </Tr>

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
                  <Td>20 September 2021</Td>
                  <Td>01 January 2022</Td>
                  <Td></Td>
                  <Td>
                    <Button
                      colorScheme={"blue"}
                      onClick={onViewLOAModal}
                      mr={1}
                    >
                      View reason
                    </Button>
                    <Button colorScheme={"red"}>Remove</Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </VStack>

      {/* Modal */}
      {createLOAModal}
      {viewLOAModal}
    </>
  );
};

LeaveOfAbsence.getLayout = (page: ReactElement) => (
  <AdminLayout title="Leave of Absence List">{page}</AdminLayout>
);
export default LeaveOfAbsence;
