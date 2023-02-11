import { ReactElement } from 'react';
import { Heading, Stack, Link, Button } from '@chakra-ui/react';

const HomePage = () : ReactElement => {
    return ( 
        <Stack>
            <Heading id='app-title' size='2xl'>CV Generator</Heading>
            <Heading id='app-sub-title' size='xl'>Create your own CV</Heading>
                <Link id='homePage-register-button' href='/register'>
                    <Button>
                        Create an account
                    </Button>
                </Link>
                <Link id='homePage-login-button' href='/login'>
                    <Button>
                        Log In
                    </Button>
                </Link>
        </Stack>
    )
}

export { HomePage };
