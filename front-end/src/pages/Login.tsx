import React, { ReactElement, useState } from 'react';
import { Input, Stack, Button, Link, Heading } from '@chakra-ui/react';

const Login = () : ReactElement => {
    const [show] = React.useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        console.log("Email : %s\n", email);
        console.log("Password : %s\n", password);
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
            <Button onClick={handleClick} id='loginPage-login-button'>Login</Button>
            <Button id='loginPage-register-button'>
                <Link href='/register'>
                    Register
                </Link>
            </Button>
            <Button id='loginPage-home-button'>
                <Link href='/'>
                    Return to home page
                </Link>
            </Button>
        </Stack>
    )
}

export { Login };
