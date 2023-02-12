import React, { ReactElement, useState } from 'react';
import { Image, Stack, Box, HStack, Spacer, Heading, Button, Input } from '@chakra-ui/react'
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
            <Heading size="md" noOfLines={1} textAlign='center' textColor="white">
                Basic
            </Heading>
            <Spacer />
            <ShowImage sourc={profile}/>
            <HStack spacing='20px' paddingBottom="20px" paddingTop="20px">
                <Input size="md" placeholder="First Name" width="30" borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
                <Input size="md" placeholder="Last Name" width="30" borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
                <Input size="md" placeholder="Profile Picture URL" onChange={e => setProfile(e.target.value)} width="60" 
                borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
            </HStack>
            <Button onClick={handleClick} size="md" height="40px" width="150px" leftIcon={<CheckCircleIcon />} variant="solid"
                bgColor="white" textColor="#86A8E7" borderRadius="20px">
                    Upload
                </Button>
        </Stack>
        </>
    )
}

export default Overview;