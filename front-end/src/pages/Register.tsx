import { Box, Button, Center, Heading, Input, Link, Stack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { ReactElement, useState } from 'react';

const Register = () : ReactElement => {
    const [show] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [error, setError] = useState('');

    // Faire un form
    const onRegister = async () : Promise<void> => {
        if (password !== confirmedPassword) {
            setError('Wrong password confirmation');
            return;
        }
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
            <Heading id="app-sub-title" as="h2" size="xl" textColor="white">
                Create your own CV
            </Heading>
                <VStack spacing="20px">
                    <Input
                    placeholder='Enter email'
                    onChange={e => setEmail(e.target.value)}
                    bgColor="white"
                    width='432px'
                    borderRadius="20px"
                    paddingLeft="20px"
                    />
                    <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    onChange={e => setPassword(e.target.value)}
                    bgColor="white"
                    width='432px'
                    borderRadius="20px"
                    paddingLeft="20px"
                    />
                    <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Confirm password'
                    onChange={e => setConfirmedPassword(e.target.value)}
                    bgColor="white"
                    width='432px'
                    borderRadius="20px"
                    paddingLeft="20px"
                    />
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
            </VStack>
            </Center>
        </Stack>
        </Box>
    )
}

export { Register };
