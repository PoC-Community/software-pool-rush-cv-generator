import { ReactElement } from 'react';
import { Heading, Stack, Link, Button } from '@chakra-ui/react';
import { TopBar } from 'components/Bar/TopBar';

const Dashboard = () : ReactElement => {
    return ( 
        <Stack>
            <TopBar/>
            {/* <Heading id='app-title' size='2xl'>CV Generator</Heading>
            <Heading id='app-sub-title' size='xl'>Create your own CV</Heading>
            <Link id='Dashboard-create-CV-button' href=''>
                <Button>
                    Create a CV
                </Button>
            </Link>
            <Link id='Dashboard-list-CVs-button' href=''>
                <Button>
                    List my CVs
               </Button>
            </Link>
            <Link id='Dashboard-logout-button' href='/'>
                <Button>
                    Log Out
               </Button>
            </Link> */}
        </Stack>
    )
}

export { Dashboard };
