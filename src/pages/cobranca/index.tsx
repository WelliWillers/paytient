import { Flex, Heading } from "@chakra-ui/react";
import { DashboardLayout } from "../../components/Layout";

export default function Cobranca(){
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Cobrança
                </Heading>

            </Flex>
        </DashboardLayout>
    )
}