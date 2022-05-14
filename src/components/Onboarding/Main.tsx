import { ReactNode } from "react"
import { Flex, Heading, Text } from "@chakra-ui/react";

interface MainProps {
    children: ReactNode;
    title: string;
}

export function MainBase({title, children}:MainProps){
    return (
        <Flex
            as="main" 
            boxShadow='dark-lg' 
            align="center" 
            justify="space-between" 
            h="100vh" 
            p={["8", "20"]} 
            maxWidth={["100%", "550"]} 
            minWidth={["100%", "500"]}  
            position={['fixed', 'relative']} 
            flex="2" 
            bg="white" 
            direction="column"
        >

            {/* <Image src="" alt="" /> */}

            <Text fontSize="40">LOGO</Text>
            <Heading fontSize="25">{title}</Heading>

            { children }
        </Flex>
    )
}