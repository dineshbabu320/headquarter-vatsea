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
import ControllingApproval from "../modal/ControllingApproval";
import EndorsePosition from "../modal/EndorsePosition";
import PromoteAsExaminer from "../modal/PromoteAsExaminer";
import PromoteAsMentor from "../modal/PromoteAsMentor";

const MemberList = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // State
  const [showMePls, setShowMePls] = useState(false);

  // Modal
  const {
    onOpen: openEndorseModal,
    modal: EndorseModal,
    setMemberData: setEndorseData,
  } = EndorsePosition();
  const {
    onOpen: openMentorModal,
    modal: MentorModal,
    setMemberData: setMentorData,
  } = PromoteAsMentor();
  const {
    onOpen: openExaminerModal,
    modal: ExaminerModal,
    setMemberData: setExaminerData,
  } = PromoteAsExaminer();
  const {
    onOpen: openControllingApprovalModal,
    modal: ControllingApprovalModal,
    setMemberData: setControllingApprovalData,
  } = ControllingApproval();

  // Helper
  const openModal = (studentData: any, type: string) => {
    switch (type) {
      case "controlling_approval":
        setControllingApprovalData(studentData);
        openControllingApprovalModal();
        break;
      case "endorse":
        setEndorseData(studentData);
        openEndorseModal();
        break;
      case "mentor":
        setMentorData(studentData);
        openMentorModal();
        break;
      case "examiner":
        setExaminerData(studentData);
        openExaminerModal();
        break;
    }
  };

  return (
    <>
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
            Member List
          </Text>
          <Button colorScheme={"blue"} onClick={() => setShowMePls(true)}>
            Show example pls.
          </Button>
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name (CID)</Th>
                <Th>Current Rating</Th>
                <Th textTransform="unset">vACC</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
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
                    <Td>Student 1 (S1)</Td>
                    <Td>Indonesia vACC</Td>
                    <Td>Resident</Td>
                    <Td>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Link as={NextLink} href="/training/1000000">
                              View training record
                            </Link>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000000",
                                  name: "Kevin",
                                },
                                "controlling_approval"
                              )
                            }
                          >
                            Edit controlling approval
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000000",
                                  name: "Kevin",
                                },
                                "endorse"
                              )
                            }
                          >
                            Endorse for a position
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000000",
                                  name: "Kevin",
                                },
                                "mentor"
                              )
                            }
                          >
                            Promote as a mentor
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000000",
                                  name: "Kevin",
                                },
                                "examiner"
                              )
                            }
                          >
                            Promote as an examiner
                          </MenuItem>
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
                    <Td>Student 2 (S2)</Td>
                    <Td>Indonesia vACC</Td>
                    <Td>Visitor</Td>
                    <Td>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Link as={NextLink} href="/training/1000001">
                              View training record
                            </Link>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000000",
                                  name: "Kevin",
                                },
                                "controlling_approval"
                              )
                            }
                          >
                            Edit controlling approval
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000001",
                                  name: "Stuart",
                                },
                                "endorse"
                              )
                            }
                          >
                            Endorse for a position
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000001",
                                  name: "Stuart",
                                },
                                "mentor"
                              )
                            }
                          >
                            Promote as a mentor
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000001",
                                  name: "Stuart",
                                },
                                "examiner"
                              )
                            }
                          >
                            Promote as an examiner
                          </MenuItem>
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
                    <Td>Student 1 (S1)</Td>
                    <Td>Indonesia vACC</Td>
                    <Td>Resident</Td>
                    <Td>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Link as={NextLink} href="/training/1000002">
                              View training record
                            </Link>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000000",
                                  name: "Kevin",
                                },
                                "controlling_approval"
                              )
                            }
                          >
                            Edit controlling approval
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000002",
                                  name: "King Bob",
                                },
                                "endorse"
                              )
                            }
                          >
                            Endorse for a position
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000002",
                                  name: "King Bob",
                                },
                                "mentor"
                              )
                            }
                          >
                            Promote as a mentor
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000002",
                                  name: "King Bob",
                                },
                                "examiner"
                              )
                            }
                          >
                            Promote as an examiner
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Link
                        as={NextLink}
                        href="/profile/1000005"
                        color="brand.500"
                      >
                        Gru (1000005)
                      </Link>
                    </Td>
                    <Td>Enroute Controller (C1)</Td>
                    <Td>Indonesia vACC</Td>
                    <Td>Resident</Td>
                    <Td>
                      <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                          Actions
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Link as={NextLink} href="/training/1000005">
                              View training record
                            </Link>
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000000",
                                  name: "Kevin",
                                },
                                "controlling_approval"
                              )
                            }
                          >
                            Edit controlling approval
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000005",
                                  name: "Gru",
                                },
                                "endorse"
                              )
                            }
                          >
                            Endorse for a position
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000005",
                                  name: "Gru",
                                },
                                "mentor"
                              )
                            }
                          >
                            Promote as a mentor
                          </MenuItem>
                          <MenuItem
                            onClick={() =>
                              openModal(
                                {
                                  id: "1000005",
                                  name: "Gru",
                                },
                                "examiner"
                              )
                            }
                          >
                            Promote as an examiner
                          </MenuItem>
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

      {/* Show modal */}
      {ControllingApprovalModal}
      {EndorseModal}
      {MentorModal}
      {ExaminerModal}
    </>
  );
};

export default MemberList;
