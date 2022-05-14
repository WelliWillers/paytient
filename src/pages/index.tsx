import { Box, Button, Flex, Heading, Icon, Image, Link, VStack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { RiFacebookCircleFill, RiLockUnlockLine, RiMailLine, RiTwitterFill } from 'react-icons/ri'

export default function Home() {
  return (
    <Flex align="center" h="100vh" w="100vw">
      
      <Flex 
        as="main" boxShadow='dark-lg' 
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
        <Heading fontSize="25">Faça o seu login</Heading>

        <VStack spacing="8" w="100%">
          <Input placeholder="Seu e-mail aqui" label="Insira seu e-mail" name="login" icon={RiMailLine} />
          <Input placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
        </VStack>

        <Link color="primary.normal">Esqueci a senha</Link>

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
          Entrar
        </Button>

        <p>OU</p>

        <VStack spacing="4" w="100%">
          <Button leftIcon={<Icon as={RiFacebookCircleFill}/>} colorScheme='secondary' bg="secondary" w="100%" size='lg'>
            Entrar com Facebook
          </Button>
          <Button leftIcon={<Icon as={RiTwitterFill}/>} colorScheme='secondary' bg="secondary" w="100%" size='lg'>
            Entrar com Twitter
          </Button>
        </VStack>

        <Text>Ainda não possui sua conta? <Link color="primary.normal">Clique aqui</Link></Text>
      </Flex>

      <Box as="aside" h="100vh" w="100%" flex={["1", "6"]} bg="gray.300">
        <Image src="https://passeiosturquia.com/wp-content/uploads/2020/06/turquia.jpg" boxSize='100%' objectFit='cover' />
      </Box>
    
    </Flex>
  )
}
