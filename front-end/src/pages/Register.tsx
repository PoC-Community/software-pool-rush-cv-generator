import { Box, Button, Center, FormControl, FormErrorMessage, Heading, Input, Link, Stack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { ReactElement, useState } from 'react';

const Register = () : ReactElement => {
    const [show] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');

    const onRegister = async () : Promise<void> => {
        if (email.length === 0) {
            setError('missing-email');
            return;
        }
        if (password.length === 0) {
            setError('missing-password');
            return;
        }
        if (confirmedPassword.length === 0) {
            setError('missing-password-confirmation');
            return;
        }
        if (password !== confirmedPassword) {
            setError('wrong-password-confirmation');
            return;
        }
        console.log("Hey");
		try {
			const res = await axios.post('http://localhost:8080/auth/register', {
                email,
                password
            });
            localStorage.setItem('jwt', res.data.accessToken);
            window.location.href = '/Dashboard';
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
                        onChange={e => setEmail(e.target.value)}
                        isInvalid={error === 'missing-email'}
                        bgColor="white"
                        width='432px'
                        borderRadius="20px"
                        paddingLeft="20px"
                        />
                        {error === 'missing-email' && <FormErrorMessage>Email is required.</FormErrorMessage>}
                        <Input
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        isInvalid={error === 'missing-password'}
                        bgColor="white"
                        width='432px'
                        borderRadius="20px"
                        paddingLeft="20px"
                        />
                        {error === 'missing-password' && <FormErrorMessage>Password is required.</FormErrorMessage>}
                        <Input
                        type={show ? 'text' : 'password'}
                        isInvalid={error === 'wrong-password-confirmation' || error === 'missing-password-confirmation'}
                        placeholder='Confirm password'
                        value={confirmedPassword}
                        onChange={e => setConfirmedPassword(e.target.value)}
                        bgColor="white"
                        width='432px'
                        borderRadius="20px"
                        paddingLeft="20px"
                        />
                        {error === 'missing-password-confirmation' && <FormErrorMessage>Password confirmation is required.</FormErrorMessage>}
                        {error === 'wrong-password-confirmation' && <FormErrorMessage>Confirmation doesn't match.</FormErrorMessage>}
                        <Button id='registerPage-register-button' onClick={onRegister}
                        variant="solid" bgColor="white" textColor="#86A8E7"
                        borderRadius="20px" width='432px'>
                            Register
                        </Button>
                        <Link href='/login'>
                            <Button id='registerPage-login-button'
                            variant="solid" bgColor="transparent"
                            border="1px" borderColor="white" textColor="white"
                            borderRadius="20px" width='432px'
                            _hover={{ bg: "white",  textColor:"#86A8E7"}}
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href='/' id='registerPage-home-button' _hover={{}}
                        textColor="white">
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

export { Register };
