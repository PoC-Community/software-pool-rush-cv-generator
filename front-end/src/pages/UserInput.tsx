import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Link, Spacer, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Overview from './InputGroups/BasicOverview';
import { Education, Experience } from './InputGroups/MassListing';
import Skills from './InputGroups/SmallListing';

const User = () : ReactElement => {
    if (!localStorage.getItem('jwt'))
        window.location.href = '/login';

    return (<Stack align='center' bgGradient='linear(to-l, #7F7FD5, #86A8E7, #91EAE4)' paddingTop='5px'>
        <Spacer />
        <Heading as="title" size="xl" noOfLines={1} textAlign='center' 
        textColor="white">
            Creating your CV...
        </Heading>
        <Overview />
        <Box boxSize='5'/>
        <Skills />
        <Box boxSize='5'/>
        <Experience />
        <Box boxSize='5'/>
        <Education />
        <Box boxSize='5' paddingBottom="30px"/>
        <Link href="/dashboard">
            <Button size='lg' id='homePage-register-button' height="50px" width="784px" leftIcon={<CheckCircleIcon />}
            variant="solid"
            bgColor="white" textColor="#86A8E7" borderRadius="20px" paddingLeft="25px">
                Submit
            </Button>
        </Link>
        <Box boxSize='5'/>
    </Stack>);
}

export default User;