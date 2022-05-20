import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiBallPenLine, RiFileListLine, RiFolderChartLine, RiLogoutCircleRLine, RiScan2Line, RiSettings2Line, RiShoppingCart2Line, RiUser3Line } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    const route = useRouter()
    const {isOpen} = useSidebarDrawer()

    return (
        <VStack spacing="20" align="flex-start" justifyContent="space-between" h="100%">
            <Box>
                <Box textAlign="center">
                    {
                        isOpen ? <Image src="/logo.png"height="auto" /> :  <Image src="/favicon.png"height="14" />
                    }
                </Box>

                <NavSection>
                    <NavLink label="Dashboard" href="/dashboard" icon={RiFolderChartLine}>
                        Dashboard
                    </NavLink>
                    
                    <NavLink label="Leads" href="/leads" icon={RiBallPenLine}>
                        Leads
                    </NavLink>
                    
                    <NavLink label="Campanhas" href="/campanhas" icon={RiScan2Line}>
                        Campanhas
                    </NavLink>
                    
                    <NavLink label="Vendas" href="/vendas" icon={RiShoppingCart2Line}>
                        Vendas
                    </NavLink>
                    
                    <NavLink label="Clientes" href="/clientes" icon={RiUser3Line}>
                        Clientes
                    </NavLink>
                    
                    <NavLink label="Cobrança" href="/cobranca" icon={RiFileListLine}>
                        Cobrança
                    </NavLink>
                    
                    <NavLink label="Configuraçõe" href="/configuracoes" icon={RiSettings2Line}>
                        Configurações
                    </NavLink>
                </NavSection>
            </Box>

            <Box w="100%">
                <NavSection>
                    <NavLink label="Sair" href="#" onClick={() => route.push('/')} icon={RiLogoutCircleRLine}>
                        Sair
                    </NavLink>
                </NavSection>
            </Box>


        </VStack>
    )
}