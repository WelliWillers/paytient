import { Box, Button, Flex, Heading, Icon, Switch, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { DashboardLayout } from "../../../components/Layout";

export default function Permissoes(){

    const toast = useToast()

    function handleHoverSubmit(e){
        e.preventDefault();

        if(e.target.value.length > 5) {
            alert('filtrar por name')
        }
    }

    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Permissões
                </Heading>

                <Button
                    borderRadius={50}
                    leftIcon={<Icon fontSize="20" as={RiAddLine} color="primary.normal" />}
                    variant="solid"
                    bgColor="white"
                    color="gray.500"
                    colorScheme='white'>Novo</Button>
            </Flex>

            <Box bg="white" p="12" borderRadius={30}>
                <TableContainer>
                    <Table variant='striped' colorScheme="gray">
                        <Thead>
                            <Tr height="70" borderBottom="5px solid" borderBottomColor="primary.normal">
                                <Th>Nome</Th>
                                <Th>Administrador</Th>
                                <Th>Analista</Th>
                                <Th>Vendedor</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr height="70">
                                <Td>Visualizar, Inserir e Editar Indicadores</Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Controlar Acesso</Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Inserir e Visualizar Fotos</Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Inserir e Consultar Membros</Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Visualizar Indicadores Financeiros</Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Criar, Visualizar e Editar Plano de Ação/Atividades</Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Inserir e Visualizar Documentos</Td>
                                <Td><Switch colorScheme="green" size='lg' isChecked /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                                <Td><Switch colorScheme="green" size='lg' /></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

        </DashboardLayout>

    )
}