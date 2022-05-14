import { VStack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav(){
    return (
        <VStack spacing="20" align="flex-start" justifyContent="space-between">
            <NavSection>
                <NavLink icon={RiDashboardLine}>
                    Dashboard
                </NavLink>
                
                <NavLink icon={RiContactsLine}>
                    Leads
                </NavLink>
                
                <NavLink icon={RiInputMethodLine}>
                    Campanhas
                </NavLink>
                
                <NavLink icon={RiGitMergeLine}>
                    Vendas
                </NavLink>
                
                <NavLink icon={RiGitMergeLine}>
                    Clientes
                </NavLink>
                
                <NavLink icon={RiGitMergeLine}>
                    Cobrança
                </NavLink>
            </NavSection>

            <NavSection>
                <NavLink icon={RiLogoutCircleRLine}>
                    Sair
                </NavLink>
            </NavSection>

        </VStack>
    )
}