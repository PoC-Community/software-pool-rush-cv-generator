import { Box, Button, Center, FormControl, FormErrorMessage, Heading, useToast, Input, Link, Stack, VStack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import axios from "axios";
import React, { ReactElement, useState } from 'react';

const Login = () : ReactElement => {
    const [show, setShow] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleClickShowPasswd = () => setShow(!show);
    const toast = useToast();

    const onLogin = async () : Promise<void> => {
		if (email.length === 0) {
            setError('missing-email');
            return;
        }
        if (password.length === 0) {
            setError('missing-password');
            return;
        }
        try {
			const res = await axios.post('http://localhost:8080/auth/login', {
                email,
                password
            });
            localStorage.setItem('jwt', res.data.accessToken);
            window.location.href = '/Dashboard';
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
			return;
		} catch(error) {
			console.log(error);
			return;
		}
        
    };

    return (
        <Box bgGradient='linear(to-l, #7F7FD5, #86A8E7, #91EAE4)' height={'100vh'}>
        <Stack>
            <Center mt="50px">
            <VStack spacing="20px">
            <Heading id="app-title" as="h1" size="4xl" noOfLines={1} textColor="white"
            paddingTop='150px'>
                CV Generator
            </Heading>
            <Heading id="app-sub-title" as="h2" size="xl" textColor="white" paddingBottom="20px">
                Create your own CV
            </Heading>
                <FormControl isInvalid={error.length > 0}>
                    <VStack spacing="20px">
                        <Input
                        placeholder='Enter email'
                        value={email}
                        isInvalid={error === 'missing-email'}
                        bgColor="white"
                        textColor="gray.600"
                        onChange={e => setEmail(e.target.value)}
                        width='432px'
                        borderRadius="20px"
                        paddingLeft="20px"
                        />
                        {error === 'missing-email' && <FormErrorMessage>Email is required.</FormErrorMessage>}
                        <InputGroup>
                        <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        isInvalid={error === 'missing-password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        bgColor="white"
                        width="432px"
                        margin="auto"
                        textColor="gray.600"
                        borderRadius="20px"
                        paddingLeft="20px"
                        />
                        <InputRightElement paddingRight="50px">
                            <Button height="40px" onClick={handleClickShowPasswd} borderRightRadius="20px"
                            bgColor="transparent" variant="solid" _hover={{bgColor:"transparent"}}>
                            {show ? <ViewIcon/> : <ViewOffIcon/>}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                        {error === 'missing-password' && <FormErrorMessage>Password is required.</FormErrorMessage>}
                        <Button id='loginPage-login-button' onClick={onLogin}
                            variant="solid" bgColor="white" textColor="#86A8E7"
                            borderRadius="20px" width='432px'>
                            Login
                        </Button>
                        <Link href='/register'>
                            <Button id='loginPage-register-button'
                            variant="solid" bgColor="transparent"
                            border="1px" borderColor="white" textColor="white" 
                            borderRadius="20px" width='432px' 
                            _hover={{ bg: "white",  textColor:"#86A8E7"}}>
                                Don't have an account? Register now
                            </Button>
                        </Link>
                        <Link href='/' id='loginPage-home-button' textColor="white"
                            _hover={{}}>
                            Return to home page
                        </Link>
                    </VStack>
                </FormControl>
            </VStack>
            </Center>
        </Stack>
        </Box>
    )
}

export { Login };
