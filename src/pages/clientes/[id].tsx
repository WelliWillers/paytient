import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftLine } from "react-icons/ri";
import { DashboardLayout } from "../../components/Layout";

export default function EditarClient(){
    const route = useRouter()

    function handleGoBack(e){
        e.preventDefault();

        route.push('/clientes')
    }
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Editar cliente
                </Heading>

                <Button
                    borderRadius={50}
                    leftIcon={<Icon fontSize="20" as={RiArrowLeftLine} color="primary.normal" />}
                    variant="solid"
                    bgColor="white"
                    onClick={handleGoBack}
                    color="gray.500"
                    colorScheme='white'
                >
                    Voltar
                </Button>
            </Flex>

            <Box bg="white" p="12" borderRadius={30}>
                <p>Formulário aqui</p>
            </Box>
        </DashboardLayout>
    )
}