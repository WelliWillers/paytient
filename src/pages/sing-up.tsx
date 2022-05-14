import { Box, Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react";
import { InputBase } from "../components/Form/Input";
import { RiLockUnlockLine, RiMailLine, RiSmartphoneLine, RiUser3Line } from "react-icons/ri";
import { MainBase } from "../components/Onboarding/Main";

export default function SingUp() {
  return (
    <Flex align="center" h="100vh" w="100vw">
      
      <MainBase title="Crie sua conta">

        <VStack spacing="8" w="100%">
          <InputBase placeholder="Nome" label="Nome" name="nome" icon={RiUser3Line} />
          <InputBase placeholder="Insira seu e-mail aqui" label="Insira seu e-mail" name="email" icon={RiMailLine} />
          <InputBase placeholder="(51) 99261-8520" label="Telefone" name="telefone" icon={RiSmartphoneLine} />
          <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
        </VStack>

        <Button 
          bg='primary.normal' 
          w="100%" 
          size='lg' 
          color="white"
          _hover={
            {
              bgColor: 'primary.hover'
            }
          }
        >
          Salvar
        </Button>

        <Link href="/sing-up" color="primary.normal">Voltar</Link>

        <Text>Já possui conta? <Link href="/" color="primary.normal">Clique aqui</Link></Text>

      </MainBase>

      <Box as="aside" h="100vh" w="100%" flex={["1", "6"]} bg="gray.300">
        <Image src="https://passeiosturquia.com/wp-content/uploads/2020/06/turquia.jpg" boxSize='100%' objectFit='cover' />
      </Box>
    
    </Flex>
  )
}
