import { Box, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { RiArrowUpSFill } from "react-icons/ri";

interface StatsBoardProps {
    label: string;
    title: string;
    subtitle: string;
    icon: ElementType;
    color?: string;
    children?: ReactNode
}

export function StatsBoard({label, color, title, subtitle, icon, children}:StatsBoardProps){
    return (
        <Flex 
            p="8"
            bg="white"
            borderRadius={30}
            pb="4"
            justify="space-between"
            flexDirection="column"
            minHeight="250px"
            boxShadow="xl"
        >
            <HStack>
                <Icon color={color} as={icon} fontSize="20" /> 
                <Text>{label}</Text>
            </HStack>
            <Heading textAlign="center" fontSize="40">
                {title}
            </Heading>
            <Box display="flex" justifyContent="center" textAlign="center">
                <Icon as={RiArrowUpSFill} color="green" fontSize={25} /> 
                <Text> {subtitle}</Text>
            </Box>

            {children}
        </Flex>
    )
}