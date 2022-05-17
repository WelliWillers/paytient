import { Box, Flex, Heading } from "@chakra-ui/react";
import { DashboardLayout } from "../../../../components/Layout";

export default function AtualizaSenha(){
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Alterar Senha
                </Heading>

            </Flex>

            <Box bg="white" p="12" borderRadius={30}>
                <p>Formulário aqui</p>
            </Box>
        </DashboardLayout>
    )
}