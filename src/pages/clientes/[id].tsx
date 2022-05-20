import { Box, Button, Flex, Heading, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftLine, RiLockUnlockLine, RiRefund2Line, RiSave3Line } from "react-icons/ri";
import { InputBase } from "../../components/Form/Input";
import { SelectBase } from "../../components/Form/SelctBase";
import { DashboardLayout } from "../../components/Layout";

export default function EditarClient(){
    const route = useRouter()

    function handleGoBack(e){
        e.preventDefault();

        route.push('/clientes')
    }
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Editar cliente
                </Heading>

                <Button
                    borderRadius={50}
                    leftIcon={<Icon fontSize="20" as={RiArrowLeftLine} color="primary.normal" />}
                    variant="solid"
                    bgColor="white"
                    onClick={handleGoBack}
                    color="gray.500"
                    colorScheme='white'
                >
                    Voltar
                </Button>
            </Flex>

            <Box bg="white" p="12" borderRadius={30}>
                <Box pb="8">
                    <HStack mb="6">
                        <Icon color="primary.normal" as={RiRefund2Line} fontSize="20"/>
                        <Text fontSize="lg" mb="4">
                            Informações Pessoais
                        </Text>
                    </HStack>

                    <SimpleGrid columns={[1, 2]} gap="8" alignItems="flex-start" mb="8">
                        <InputBase placeholder="Nome completo" label="Nome completo" type="text" name="Nome" icon={RiLockUnlockLine} />
                        <SelectBase placeholder="Sexo" label="Sexo" type="password" name="Sexo" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Email" label="Email" type="email" name="Email" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Estado civil" label="Estado civil" type="password" name="estado" icon={RiLockUnlockLine} />
                        <InputBase placeholder="CPF" label="CPF" type="text" name="cpf" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Data de nascimento" label="Data de nascimento" type="password" name="nascimento" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Nascionalidade" label="Nascionalidade" type="password" name="nascionalidade" icon={RiLockUnlockLine} />
                    </SimpleGrid>
                </Box>

                <Box pb="8">
                    <HStack mb="6">
                        <Icon color="primary.normal" as={RiRefund2Line} fontSize="20"/>
                        <Text fontSize="lg" mb="4">
                            Informações de Contato
                        </Text>
                    </HStack>

                    <SimpleGrid columns={[1, 2]} gap="8" alignItems="flex-start" mb="8">
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                    </SimpleGrid>
                </Box>

                <Box pb="8">
                    <HStack mb="6">
                        <Icon color="primary.normal" as={RiRefund2Line} fontSize="20"/>
                        <Text fontSize="lg" mb="4">
                            Dados complementares
                        </Text>
                    </HStack>

                    <SimpleGrid columns={[1, 2]} gap="8" alignItems="flex-start" mb="8">
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                        <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
                    </SimpleGrid>
                </Box>

                <Flex pt="10" align="center" justify="center">
                    <Button bg="primary.normal" color="white" leftIcon={<Icon as={RiSave3Line} fontSize="18" />}>Salvar</Button>
                </Flex>
            </Box>
        </DashboardLayout>
    )
}