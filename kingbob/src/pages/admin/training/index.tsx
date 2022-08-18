import { Button, Flex, SimpleGrid, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import LastTraining from "@components/training/student/LastTraining";
import MentorNotes from "@components/training/MentorNotes";
import NextTraining from "@components/training/student/NextTraining";
import CPTInformation from "@components/training/student/CPTInformation";
import SoloInformation from "@components/training/student/SoloInformation";
import AdminLayout from "@layouts/admin";
import NavLink from "next/link";
import FeedbackFromOtherMembers from "@components/training/Feedbacks";

const Training = () => {
    const textColor = useColorModeValue("secondaryGray.900", "white");

    return (
        <AdminLayout title="Training">
            {/* My own training */}
            <VStack spacing={"20px"} align="stretch">
                <Flex align="center" justify={"space-between"} gap={"20px"}>
                    <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                        My Training
                    </Text>
                    <NavLink href="/admin/training/me" passHref>
                        <Button
                            as="a"
                            colorScheme="blue"
                            whiteSpace={"unset"}
                            textAlign="center"
                            py={{ base: "1.5em", sm: "unset" }}
                        >View My Training Detail</Button>
                    </NavLink>
                </Flex>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                    <LastTraining />
                    <NextTraining />
                </SimpleGrid>
                <MentorNotes viewingMyself />
                <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
                    <SoloInformation />
                    <CPTInformation />
                </SimpleGrid>
                <FeedbackFromOtherMembers />
            </VStack>
        </AdminLayout>
    );
};

export default Training;