import { Avatar, Box, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiChat3Line, RiCloseLine, RiMenuLine, RiNotification3Line, RiQuestionLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function HeaderBase() {
    const { isOpen, onOpen, onClose } = useSidebarDrawer()

    return (
        <Flex w="100%" bg="white" align="center" height="8vh" justify="space-between" px="8" boxShadow="md">
            <IconButton 
                alignItems="center"
                aria-label="Open navigation"
                icon={!isOpen ? (<Icon as={RiMenuLine} />) : (<Icon as={RiCloseLine} />)}
                fontSize="24"
                bg="transparent"
                _hover={
                    {
                        color: 'primary.normal'
                    }
                }
                onClick={isOpen ? onClose : onOpen}
                mr="2"
            ></IconButton>

            <Box display="flex" alignItems="center">
                <HStack spacing="8">
                    <Link href="/perguntas-frequentes"><Icon cursor="pointer" as={RiQuestionLine} fontSize="20" /></Link>
                    <Icon as={RiChat3Line} fontSize="20" />
                    <Icon as={RiNotification3Line} fontSize="20" />

                    <Menu isLazy>
                        <MenuButton>
                            <Avatar name='Dan Abrahmov'/>
                        </MenuButton>
                        <MenuList boxShadow="lg" border="none">
                            <MenuItem>Meus Dados</MenuItem>
                            <MenuDivider borderColor="gray.200" />
                            <MenuItem>
                                <Link href="/configuracoes/usuarios/1/atualiza-senha">Alterar senha</Link>
                            </MenuItem>
                            <MenuDivider borderColor="gray.200" />
                            <MenuItem>Serviços</MenuItem>
                            <MenuDivider borderColor="gray.200" />
                            <MenuItem>Dúvidas frequentes</MenuItem>
                            <MenuDivider borderColor="gray.200" />
                            <MenuItem>Contato</MenuItem>
                            <MenuDivider borderColor="gray.200" />
                            <MenuItem>Sair</MenuItem>
                        </MenuList>
                    </Menu>
                    
                </HStack>
            </Box>
        </Flex>
    )
}