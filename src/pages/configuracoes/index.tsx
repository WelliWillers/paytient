import { Flex, Heading, SimpleGrid, HStack, Icon, Box } from "@chakra-ui/react";
import Link from "next/link";
import { RiShoppingCart2Line, RiUser3Line } from "react-icons/ri";
import { StatsBoard } from "../../components/Dashboard/StatsBoard";
import { DashboardLayout } from "../../components/Layout";

export default function Configuracoes(){
    return (
        <DashboardLayout>
            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Configurações
                </Heading>
            </Flex>

            <SimpleGrid columns={[1,2]} gap="8">
                <Box 
                    p="8"
                    bg="white"
                    borderRadius={30}
                    boxShadow="xl"
                    height="250px"
                    animation={200}
                    cursor="pointer"
                    _hover={{
                        border: '4px solid',
                        borderColor: 'primary.normal'
                    }}
                >
                    <Link href="/configuracoes/permissoes">
                        <Flex 
                            height="100%"
                            align="center"
                            justify="center"
                            flexDirection="column"
                        >
                            <Icon fontSize="50" mb="6" color="primary.normal" as={RiShoppingCart2Line} /> 
                            <Heading textAlign="center" fontSize="40">
                                Permissões
                            </Heading>
                        </Flex>
                    </Link>
                </Box>
                
                <Box 
                    p="8"
                    bg="white"
                    borderRadius={30}
                    boxShadow="xl"
                    height="250px"
                    animation={200}
                    cursor="pointer"
                    _hover={{
                        border: '4px solid',
                        borderColor: 'primary.normal'
                    }}
                >
                    <Link href="/configuracoes/usuarios">
                        <Flex 
                            height="100%"
                            align="center"
                            justify="center"
                            flexDirection="column"
                        >
                            <Icon fontSize="50" mb="6" color="primary.normal" as={RiUser3Line} /> 
                            <Heading textAlign="center" fontSize="40">
                                Usuários
                            </Heading>
                        </Flex>
                    </Link>
                </Box>

            </SimpleGrid>
        </DashboardLayout>
    )
}