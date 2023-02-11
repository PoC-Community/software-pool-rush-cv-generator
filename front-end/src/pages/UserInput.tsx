import React, { ReactElement, useState } from 'react';
import { HStack, Switch, Spacer, Link, Heading, Button, Input } from '@chakra-ui/react'
import { CheckCircleIcon, SmallAddIcon } from '@chakra-ui/icons'

const User = () : ReactElement => {
    const [profile, setProfile] = useState('');
    const handleClick = () => {
        console.log(`Profile : ${profile}`);
    }

    return (
        <>
        <Spacer />
        <Heading as="title" size="xl" noOfLines={1} textAlign='center'>
            Creating your CV...
        </Heading>
        <Heading size="md" noOfLines={1} textAlign='center'>
            Basic
        </Heading>
        <HStack spacing='20px'>
            <Input size="md" placeholder="First Name" width="30" />
            <Input size="md" placeholder="Last Name" width="30" />
            <Input size="md" variant='filled' placeholder="Profile Picture URL" onChange={e => setProfile(e.target.value)} width="60" />
            <Button onClick={handleClick} size="md" height="40px" width="400px" leftIcon={<CheckCircleIcon />} colorScheme="blue" variant="solid">
                Submit
            </Button>
        </HStack>
        <Heading size="md" noOfLines={1} textAlign='center'>
            Skills
        </Heading>
        <Input size="md" placeholder="Add" width="15" />
        <Heading size="md" noOfLines={1} textAlign='center'>
            Experience
        </Heading>
        <Input size="md" placeholder="Add" width="15" />
        <Heading size="md" noOfLines={1} textAlign='center'>
            Education
        </Heading>
        <Input size="md" placeholder="Add" width="15" />
        <Switch size='md' />
        <Link href="/create">
            <Button size="xl" id='homePage-register-button' height="40px" width="400px" leftIcon={<SmallAddIcon />} colorScheme="blue" variant="solid">
                Submit
            </Button>
        </Link>
        </>
    )
}

export default User;