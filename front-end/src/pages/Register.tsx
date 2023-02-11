import React, { ReactElement, useState } from 'react';
import { Input, Stack, Button, Link, Heading } from '@chakra-ui/react';

const Register = () : ReactElement => {
    const [show] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const handleClick = () => {
        console.log("Email : %s\n", email);
        console.log("Password : %s\n", password);
        console.log("Confirmed password: %s\n", confirmedPassword);
    }

    return (
        <Stack>
            <Heading id='app-title' size='2xl'>CV Generator</Heading>
            <Heading id='app-sub-title' size='xl'>Create your own CV</Heading>
            <Input
            placeholder='Enter email'
            onChange={e => setEmail(e.target.value)}
            />
            <Input
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            onChange={e => setPassword(e.target.value)}
            />
            <Input
            type={show ? 'text' : 'password'}
            placeholder='Confirm password'
            onChange={e => setConfirmedPassword(e.target.value)}
            />
            <Link href='/Dashboard'>
                <Button id='registerPage-register-button' onClick={handleClick}>
                    Register
                </Button>
            </Link>
            <Link href='/login'>
                <Button id='registerPage-login-button'>
                    Login
                </Button>
            </Link>
            <Link href='/'>
                <Button id='registerPage-home-button'>
                    Return to home page
               </Button>
            </Link>
        </Stack>
    )
}

export { Register };
