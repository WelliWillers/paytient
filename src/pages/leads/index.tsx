import { Flex, Heading } from "@chakra-ui/react";
import { DashboardLayout } from "../../components/Layout";

export default function Leads(){
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Leads
                </Heading>

            </Flex>
        </DashboardLayout>
    )
}