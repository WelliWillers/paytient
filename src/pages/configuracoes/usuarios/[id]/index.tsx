import { Flex, Heading } from "@chakra-ui/react";
import { DashboardLayout } from "../../../../components/Layout";

export default function Usuario(){
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Editar Usuário
                </Heading>

            </Flex>
        </DashboardLayout>
    )
}