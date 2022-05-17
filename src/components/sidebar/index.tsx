import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar(){
    const {onClose, isOpen} = useSidebarDrawer()

    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isDrawerSidebar){
        return (
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}> 
                <DrawerOverlay>
                    <DrawerContent bg="white" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader> Menu </DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Flex>
            <Box bg="white" p="8" width={isOpen ? "300px" : "auto"} maxWidth={350} h="100vh" maxHeight="100%" boxShadow="xl" >
                <SidebarNav />
            </Box>
        </Flex>
    )
}