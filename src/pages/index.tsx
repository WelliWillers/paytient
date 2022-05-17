import { Box, Button, Flex, Icon, Image, Text, VStack, Link, useToast} from "@chakra-ui/react";
import { InputBase } from "../components/Form/Input";
import { RiFacebookCircleFill, RiLockUnlockLine, RiMailLine, RiTwitterFill } from "react-icons/ri";
import { MainBase } from "../components/Onboarding/Main";
import { useRouter } from "next/router";

import { FormEvent } from "react";


export default function Home() {

  const route = useRouter()
  const toast = useToast()

  function handleSingIn(e: FormEvent) {
    e.preventDefault();
    toast({
      title: `Login feito com sucesso`,
      position: "top-right",
      duration: 3000,
      status: "success",
      variant: 'solid',
      isClosable: true,
    })
    route.push('/dashboard')
  }

  return (
    <Flex align="center" h="100vh" w="100vw">
      
      <MainBase title="Faça o seu login">
        <VStack spacing="8" w="100%">
          <InputBase placeholder="Seu e-mail aqui" label="Insira seu e-mail" name="login" icon={RiMailLine} />
          <InputBase placeholder="Sua senha aqui" label="Insira sua senha" type="password" name="password" icon={RiLockUnlockLine} />
        </VStack>

        <Link href="#" color="primary.normal">Esqueci a senha</Link>

        <Button 
          bg='primary.normal' 
          w="100%" 
          size='lg'
          onClick={handleSingIn}
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
          <Button as="a" leftIcon={<Icon as={RiFacebookCircleFill}/>} colorScheme='secondary' bg="secondary" w="100%" size='lg'>
            Entrar com Facebook
          </Button>
          <Button as="a" leftIcon={<Icon as={RiTwitterFill}/>} colorScheme='secondary' bg="secondary" w="100%" size='lg'>
            Entrar com Twitter
          </Button>
        </VStack>

        <Text>Ainda não possui sua conta? <Link href="/sing-up" color="primary.normal">Clique aqui</Link></Text>
      </MainBase>

      <Box as="aside" h="100vh" w="100%" flex={["1", "6"]} bg="gray.300">
        <Image src="https://passeiosturquia.com/wp-content/uploads/2020/06/turquia.jpg" boxSize='100%' objectFit='cover' />
      </Box>
    
    </Flex>
  )
}
