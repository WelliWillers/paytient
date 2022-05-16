import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { HeaderBase } from "../Header";
import { Sidebar } from "../sidebar";

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({children}:DashboardLayoutProps){
    return (
        <Box display="flex" position="fixed" w="100%" height="100%">

            <Sidebar />

            <Box w="100%">
                <HeaderBase />

                <Box p="8" mb="15" height="100%" minWidth="100%" overflowY="scroll">
                    {children}
                </Box>
        
            </Box>

        </Box>
    )
}