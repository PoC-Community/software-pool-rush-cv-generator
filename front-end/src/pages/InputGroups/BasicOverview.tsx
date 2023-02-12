import { Box, Heading, HStack, Image, Input, Spacer, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';

const ShowImage = ({sourc}: {sourc: string}): JSX.Element => (
    <Stack align='center'>
        <Box boxShadow='lg' p='3' rounded='md' bg='white'>
            <Image src={sourc} boxSize='150' objectFit='cover'/>
        </Box>
        <Spacer />
    </Stack>
)

const Overview = ({namee, photoUrl, onChangeName, onChangePhotoUrl}: {namee: string, photoUrl: string, onChangeName: (value: string) => void, onChangePhotoUrl: (value: string) => void}) : ReactElement => {
    return (
        <>
        <Stack align='center'>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center' textColor="white">
                Basic
            </Heading>
            <Spacer />
            <ShowImage sourc={photoUrl}/>
            <HStack spacing='20px' paddingBottom="20px" paddingTop="20px">
                <Input size="md" placeholder="Name*" value={namee} onChange={(namee) => onChangeName(namee.target.value)} width="30" borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
                <Input size="md" placeholder="Profile Picture URL" value={photoUrl} onChange={e => onChangePhotoUrl(e.target.value)} width="60"
                borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
            </HStack>
        </Stack>
        </>
    )
}

export default Overview;