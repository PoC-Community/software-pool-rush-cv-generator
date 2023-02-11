import { ReactElement } from 'react';
import { Heading, Stack, Link, Button } from '@chakra-ui/react';

const HomePage = () : ReactElement => {
    return ( 
        <Stack>
            <Heading id='app-title' size='2xl'>CV Generator</Heading>
            <Heading id='app-sub-title' size='xl'>Create your own CV</Heading>
            <Button>
                <Link id='homePage-register-button' href='/register'>
                    Create an account
                </Link>
            </Button>
            <Button>
                <Link id='homePage-login-button' href='/login'>
                    Login
                </Link>
            </Button>
        </Stack>
    )
}

export { HomePage };
