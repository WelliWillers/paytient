import { Avatar, Box, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, VStack } from "@chakra-ui/react";
import { RiChat3Line, RiCloseLine, RiMenuLine, RiNotification3Line } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function HeaderBase() {
    const { isOpen, onOpen, onClose } = useSidebarDrawer()

    return (
        <Flex w="100%" bg="white" align="center" justify="space-between" px="8" py="4">
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
                    <Icon as={RiChat3Line} fontSize="20" />
                    <Icon as={RiNotification3Line} fontSize="20" />

                    <Menu isLazy>
                        <MenuButton>
                            <Avatar name='Dan Abrahmov'/>
                        </MenuButton>
                        <MenuList>
                            <VStack spacing="4">
                                <MenuItem>Meus Dados</MenuItem>
                                <MenuItem>Alterar senha</MenuItem>
                                <MenuItem>Serviços</MenuItem>
                                <MenuItem>Dúvidas frequentes</MenuItem>
                                <MenuItem>Contato</MenuItem>
                                <MenuItem>Sair</MenuItem>
                            </VStack>
                        </MenuList>
                    </Menu>
                    
                </HStack>
            </Box>
        </Flex>
    )
}