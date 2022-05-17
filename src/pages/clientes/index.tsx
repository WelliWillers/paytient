import { Box, Button, Flex, Heading, HStack, Icon, Input, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { RiAddLine, RiArrowUpDownLine, RiCalendarEventLine, RiEyeLine, RiFilter2Line, RiSearch2Line } from "react-icons/ri";
import { DashboardLayout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";

export default function Clientes(){

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
                    Clientes
                </Heading>

                <Flex align="center">
                    <Stack direction={{sm: 'column', xl: 'row'}} spacing="8" align="center" flexDirection={{sm: 'column', xl: 'row'}}>
                        <Flex maxWidth="300px" align="center" >
                            <HStack spacing="4">
                                <Icon as={RiSearch2Line} fontSize="18" />
                                <Input variant='flushed' onChange={handleHoverSubmit} placeholder='Procurar' />
                            </HStack>
                        </Flex>
                        <Button
                            borderRadius={50}
                            leftIcon={<Icon fontSize="20" as={RiFilter2Line} color="primary.normal" />}
                            variant="solid"
                            bgColor="white"
                            color="gray.500"
                            colorScheme='white'>Filtrar</Button>

                        <Button
                            borderRadius={50}
                            leftIcon={<Icon fontSize="20" as={RiCalendarEventLine} color="primary.normal" />}
                            variant="solid"
                            bgColor="white"
                            color="gray.500"
                            colorScheme='white'>01/04/2019 - 01/05/2020</Button>

                        <Button
                            borderRadius={50}
                            leftIcon={<Icon fontSize="20" as={RiAddLine} color="primary.normal" />}
                            variant="solid"
                            bgColor="white"
                            color="gray.500"
                            colorScheme='white'>Novo</Button>
                    </Stack>
                </Flex>
            </Flex>

            <Box bg="white" p="12" borderRadius={30}>
                <TableContainer>
                    <Table variant='striped' colorScheme="gray">
                        <Thead>
                            <Tr height="70" borderBottom="5px solid" borderBottomColor="primary.normal">
                                <Th>Nome <Icon as={RiArrowUpDownLine} fontSize="15" /> </Th>
                                <Th>Franquia <Icon as={RiArrowUpDownLine} fontSize="15" /> </Th>
                                <Th>Cidade <Icon as={RiArrowUpDownLine} fontSize="15" /> </Th>
                                <Th>Data Inclusão <Icon as={RiArrowUpDownLine} fontSize="15" /> </Th>
                                <Th>Plano <Icon as={RiArrowUpDownLine} fontSize="15" /> </Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Icon as={RiEyeLine}></Icon>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                <Pagination/>
            </Box>

        </DashboardLayout>

    )
}