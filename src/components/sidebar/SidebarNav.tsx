import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiBallPenLine, RiFileListLine, RiFolderChartLine, RiLogoutCircleRLine, RiScan2Line, RiSettings2Line, RiShoppingCart2Line, RiUser3Line } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    const route = useRouter()

    return (
        <VStack spacing="20" align="flex-start" justifyContent="space-between" h="100%">
            <Box>
                <Text pb="10" fontSize="20">Logo</Text>

                <NavSection>
                    <NavLink icon={RiFolderChartLine}>
                        Dashboard
                    </NavLink>
                    
                    <NavLink icon={RiBallPenLine}>
                        Leads
                    </NavLink>
                    
                    <NavLink icon={RiScan2Line}>
                        Campanhas
                    </NavLink>
                    
                    <NavLink icon={RiShoppingCart2Line}>
                        Vendas
                    </NavLink>
                    
                    <NavLink icon={RiUser3Line}>
                        Clientes
                    </NavLink>
                    
                    <NavLink icon={RiFileListLine}>
                        Cobrança
                    </NavLink>
                    
                    <NavLink icon={RiSettings2Line}>
                        Configurações
                    </NavLink>
                </NavSection>
            </Box>

            <Box w="100%">
                <NavSection>
                    <NavLink onClick={() => route.push('/')} icon={RiLogoutCircleRLine}>
                        Sair
                    </NavLink>
                </NavSection>
            </Box>


        </VStack>
    )
}