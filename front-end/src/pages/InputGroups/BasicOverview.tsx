import React, { ReactElement, useState } from 'react';
import { Text, Image, Stack, Box, HStack, Spacer, Heading, Button, Input } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const ShowImage = ({sourc}: {sourc: string}): JSX.Element => (
    <Stack align='center'>
        <Box boxShadow='lg' p='3' rounded='md' bg='white'>
            <Image src={sourc} boxSize='150' objectFit='cover'/>
        </Box>
        <Spacer />
    </Stack>
)

const Overview = () : ReactElement => {
    const [profile, setProfile] = useState('https://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png');
    const handleClick = () => {
        console.log(`${profile}`);
    };
    return (
        <>
        <Stack align='center'>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center'>
                Basic
            </Heading>
            <Spacer />
            <ShowImage sourc={profile}/>
            <HStack spacing='20px'>
                <Input size="md" placeholder="First Name" width="30"/>
                <Input size="md" placeholder="Last Name" width="30" />
                <Input size="md" variant='filled' placeholder="Profile Picture URL" onChange={e => setProfile(e.target.value)} width="60" />
                <Button onClick={handleClick} size="md" height="40px" width="150px" leftIcon={<CheckCircleIcon />} colorScheme="blue" variant="solid">
                    Upload
                </Button>
            </HStack>
        </Stack>
        </>
    )
}

export default Overview;