import { Avatar, Box, Button, Flex, Heading, HStack, Icon, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure, useToast, VStack, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiArrowUpDownLine, RiCalendarEventLine, RiDoorLockBoxLine, RiEyeLine, RiFilter2Line, RiLockUnlockLine, RiMailLine, RiSearch2Line, RiSmartphoneLine, RiTeamLine } from "react-icons/ri";
import { InputBase } from "../../components/Form/Input";
import { SelectBase } from "../../components/Form/SelctBase";
import { DashboardLayout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";

export default function Clientes(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleHoverSubmit(e){
        e.preventDefault();

        if(e.target.value.length > 5) {
            alert('filtrar por name')
        }
    }

    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{base: 'column', sm: 'column', xl: 'row'}}>
                <Heading>
                    Clientes
                </Heading>

                <Flex align="center">
                    <Stack direction={{base: 'column', sm: 'column', xl: 'row'}} spacing="8" align="center" flexDirection={{base: 'column', sm: 'column', xl: 'row'}}>
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
                            onClick={onOpen}
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
                                    <Link href="/clientes/1">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Link href="/clientes/2">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Link href="/clientes/3">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Link href="/clientes/4">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Link href="/clientes/5">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Link href="/clientes/6">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Link href="/clientes/7">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                            <Tr height="70">
                                <Td>Emilia Silberg</Td>
                                <Td>HealPrev</Td>
                                <Td>São Paulo</Td>
                                <Td>10/09/2017</Td>
                                <Td>Med-III-BR</Td>
                                <Td>
                                    <Link href="/clientes/8">
                                        <IconButton aria-label='Ver cliente' bgColor="primary.normal" color="white" icon={<Icon as={RiEyeLine}/>} />
                                    </Link>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                <Pagination/>

                <Modal blockScrollOnMount={false}  size="xl" isCentered isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />

                    <ModalContent w="100%" minWidth="50%" borderRadius={20}>
                        <ModalHeader>Novo Usuário</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody display="flex" alignItems="center" justifyContent="center" flexDirection="column" w="100%" >
                            <WrapItem textAlign="center" m="auto">
                                <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                            </WrapItem>
                            <Text fontWeight='bold' my='1rem'>
                                Emilia Silberg
                            </Text>
                            
                            <VStack spacing="2" w="100%" px="20">
                                <InputBase placeholder="Nome completo" label="Nome" type="text" name="nome" icon={RiLockUnlockLine} />
                                <InputBase placeholder="Título" label="Título" type="text" name="titulo" icon={RiTeamLine} />
                                <InputBase placeholder="E-mail" label="E-mail" type="email" name="email" icon={RiMailLine} />
                                <InputBase placeholder="Telefone" label="Telefone" type="text" name="telefone" icon={RiSmartphoneLine} />
                                <InputBase placeholder="Senha" label="Senha" type="password" name="senha" icon={RiDoorLockBoxLine} />

                                <SelectBase name="permissões" label="Permissões" />
                            </VStack>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant='link' mr={3} onClick={onClose}>
                                Fechar
                            </Button>
                            <Button bgColor="primary.normal" onClick={onClose}>Salvar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>

        </DashboardLayout>

    )
}