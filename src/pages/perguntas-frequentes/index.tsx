import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { Ri24HoursLine, RiAddLine, RiCloseLine } from "react-icons/ri";
import { DashboardLayout } from "../../components/Layout";

export default function DuvidasFrequentes(){
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Dúvidas Frequentes
                </Heading>
            </Flex>

            <Accordion defaultIndex={[0]}>
                <VStack spacing="4">
                    <AccordionItem w="100%" bg="white" py="3" borderRadius={25} border="none">
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    {isExpanded ? (
                                        <Icon color="primary.normal" mr="4" as={RiCloseLine} fontSize='25' />
                                    ) : (
                                        <Icon color="primary.normal" mr="4" as={RiAddLine} fontSize='25' />
                                    )}
                                    <Box flex='1' textAlign='left'>
                                        Inserir e Visualizar Documentos
                                    </Box>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel p="8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem w="100%" bg="white" py="3" borderRadius={25} border="none">
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    {isExpanded ? (
                                        <Icon color="primary.normal" mr="4" as={RiCloseLine} fontSize='25' />
                                    ) : (
                                        <Icon color="primary.normal" mr="4" as={RiAddLine} fontSize='25' />
                                    )}
                                    <Box flex='1' textAlign='left'>
                                        Inserir e Visualizar Fotos
                                    </Box>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel p="8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem w="100%" bg="white" py="3" borderRadius={25} border="none">
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    {isExpanded ? (
                                        <Icon color="primary.normal" mr="4" as={RiCloseLine} fontSize='25' />
                                    ) : (
                                        <Icon color="primary.normal" mr="4" as={RiAddLine} fontSize='25' />
                                    )}
                                    <Box flex='1' textAlign='left'>
                                        Inserir e Consultar Membros
                                    </Box>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel p="8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                    <AccordionItem w="100%" bg="white" py="3" borderRadius={25} border="none">
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                <AccordionButton>
                                    {isExpanded ? (
                                        <Icon color="primary.normal" mr="4" as={RiCloseLine} fontSize='25' />
                                    ) : (
                                        <Icon color="primary.normal" mr="4" as={RiAddLine} fontSize='25' />
                                    )}
                                    <Box flex='1' textAlign='left'>
                                        Visualizar Indicadores Financeiros
                                    </Box>
                                </AccordionButton>
                                </h2>
                                <AccordionPanel p="8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                </VStack>

            </Accordion>
        </DashboardLayout>
    )
}