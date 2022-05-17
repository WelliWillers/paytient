import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
    title?: string;
    children: ReactNode
}

export function NavSection({title, children}: NavSectionProps){
    return (
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
            <Stack spacing={["5", "5", "6", "7", "8", "9", "10"]} mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}