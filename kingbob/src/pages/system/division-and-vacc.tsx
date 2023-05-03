// Basically this is division and vACC list
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
  Text,
  useColorModeValue,
  StackDivider,
  Link,
  Divider,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import AdminLayout from "@layouts/admin";
import NextLink from "next/link";
import { ReactElement } from "react";

const DivisionAndvACCList = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
        Divisions and vACCs List
      </Text>

      <Card>
        <Accordion
          allowMultiple
          allowToggle
          defaultIndex={[0]} // to open first item by default
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>South East Asia (SEA)</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={4} divider={<StackDivider />}>
                <Link href="/division/SEA" as={NextLink} color="brand.500">
                  South East Asia Division
                </Link>

                <Link href="/vacc/HK" as={NextLink} color="brand.500">
                  Hong Kong vACC
                </Link>

                <Link href="/vacc/IDN" as={NextLink} color="brand.500">
                  Indonesia vACC
                </Link>

                <Link href="/vacc/MYS" as={NextLink} color="brand.500">
                  Malaysia vACC
                </Link>

                <Link href="/vacc/MYR" as={NextLink} color="brand.500">
                  Myanmar vACC
                </Link>

                <Link href="/vacc/PHL" as={NextLink} color="brand.500">
                  Phillipines vACC
                </Link>

                <Link href="/vacc/SGP" as={NextLink} color="brand.500">
                  Singapore vACC
                </Link>

                <Link href="/vacc/THA" as={NextLink} color="brand.500">
                  Thailand vACC
                </Link>

                <Link href="/vacc/VCL" as={NextLink} color="brand.500">
                  Vietnam - Cambodia - Laos vACC
                </Link>
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <b>West Asia (WA)</b>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={4} divider={<StackDivider />}>
                <Link href="/division/WA" as={NextLink} color="brand.500">
                  West Asia Division
                </Link>

                <Link href="/vacc/AFG" as={NextLink} color="brand.500">
                  Afghanistan vACC
                </Link>

                <Link href="/vacc/BGD" as={NextLink} color="brand.500">
                  Bangladesh vACC
                </Link>

                <Link href="/vacc/BTN" as={NextLink} color="brand.500">
                  Bhutan vACC
                </Link>

                <Link href="/vacc/IND" as={NextLink} color="brand.500">
                  India vACC
                </Link>

                <Link href="/vacc/NPL" as={NextLink} color="brand.500">
                  Nepal vACC
                </Link>

                <Link href="/vacc/PAK" as={NextLink} color="brand.500">
                  Pakistan vACC
                </Link>

                <Link href="/vacc/SRM" as={NextLink} color="brand.500">
                  Sri Lanka &#38; Maldives vACC
                </Link>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
    </VStack>
  );
};

DivisionAndvACCList.getLayout = (page: ReactElement) => (
  <AdminLayout title="Division and vACC List">{page}</AdminLayout>
);
export default DivisionAndvACCList;
