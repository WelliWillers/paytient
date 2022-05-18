import { Box, Button, Flex, Heading, HStack, Icon, Stack } from "@chakra-ui/react";
import { RiLockUnlockLine, RiSave3Line } from "react-icons/ri";
import { InputBase } from "../../../../components/Form/Input";
import { DashboardLayout } from "../../../../components/Layout";

export default function AtualizaSenha(){
    return (
        <DashboardLayout>

            <Flex align="center" justify="space-between" pb="8" flexDirection={{sm: 'column', xl: 'row'}}>
                <Heading>
                    Alterar Senha
                </Heading>

            </Flex>

            <Box bg="white" p="12" borderRadius={30}>
                <Stack direction={{base: 'column', sm: 'column', lg: 'row', xl: 'row'}} spacing="8" flexDirection={{base: 'column', lg: 'row'}} w="100%">
                    <InputBase placeholder="Digite aqui" label="Senha atual" name="passwordOld" type="password" icon={RiLockUnlockLine} />
                    <InputBase placeholder="Digite aqui" label="Nova senha" name="passwordNew" type="password" icon={RiLockUnlockLine} />
                    <InputBase placeholder="Digite aqui" label="Confirmar senha" name="passwordRepeat" type="password" icon={RiLockUnlockLine} />
                </Stack>

                <Flex pt="10" align="center" justify="center">
                    <Button bg="primary.normal" color="white" leftIcon={<Icon as={RiSave3Line} fontSize="18" />}>Salvar</Button>
                </Flex>
            </Box>
        </DashboardLayout>
    )
}