import { Box, Button, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { RiLockUnlockLine, RiUserLine } from 'react-icons/ri'

export default function Home() {
  return (
    <Flex align="center" h="100vh" w="100vw">
      
      <Stack as="main" boxShadow='lg' z-index="999" spacing="8" align="center" justify="space-between" h="100vh" p="16" flex="4" bg="white" direction="column">

        {/* <Image src="" /> */}

        <Text fontSize="40">LOGO</Text>
        <Text fontSize="25">Faça o seu login</Text>

        <Stack spacing="4" w="100%">
          <Input placeholder="Seu e-mail aqui" label="Insira seu e-mail" name="login" icon={RiUserLine} />
          <Input placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="login" icon={RiLockUnlockLine} />
        </Stack>

        <Link color="primary.normal">Esqueci a senha</Link>

        <Button 
          _hover={
            {
                bgColor: 'primary.hover'
            }
          }
          bg='primary.normal' 
          w="100%" 
          size='lg' 
          color="white"
        >
          Entrar
        </Button>

        <p>OU</p>

        <Stack spacing="4" w="100%">
          <Button colorScheme='secondary' bg="secondary" w="100%" size='lg'>
            Entrar com Facebook
          </Button>
          <Button colorScheme='secondary' bg="secondary" w="100%" size='lg'>
            Entrar com Twitter
          </Button>
        </Stack>

        <Text>Ainda não possui sua conta? <Link color="primary.normal">Clique aqui</Link></Text>
      </Stack>

      <Box as="aside" h="100vh" z-index="99" flex="9" bg="gray.300">
        <Image src="https://passeiosturquia.com/wp-content/uploads/2020/06/turquia.jpg" boxSize='100%' objectFit='cover' />
      </Box>
    
    </Flex>
  )
}
