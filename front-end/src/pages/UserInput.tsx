import { Stack, Box, Spacer, Link, Heading, Button } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import Skills from './InputGroups/SmallListing'
import {Experience, Education} from './InputGroups/MassListing'
import Overview from './InputGroups/BasicOverview';

const User = () : JSX.Element => (
    <>
    <Stack align='center'>
        <Spacer />
        <Heading as="title" size="xl" noOfLines={1} textAlign='center'>
            Creating your CV...
        </Heading>
        <Overview />
        <Box boxSize='5'/>
        <Skills />
        <Box boxSize='5'/>
        <Experience />
        <Box boxSize='5'/>
        <Education />
        <Box boxSize='5'/>
        <Link href="/create">
            <Button size='lg' id='homePage-register-button' height="50px" width="950px" leftIcon={<CheckCircleIcon />} colorScheme="blue" variant='ghost'>
                Submit
            </Button>
        </Link>
        <Box boxSize='5'/>
    </Stack>
    </>
)

export default User;