import React, { ReactElement, useState } from 'react';
import { Image, Stack, Box, HStack, Spacer, Link, Heading, Button, Input } from '@chakra-ui/react'
import { SmallCloseIcon, CheckCircleIcon, SmallAddIcon } from '@chakra-ui/icons'

const ShowImage = ({sourc}: {sourc: string}): JSX.Element => (
    <Stack align='center'>
        <Box boxShadow='lg' p='3' rounded='md' bg='white'>
            <Image src={sourc} boxSize='150' objectFit='cover'/>
        </Box>
        <Spacer />
    </Stack>
)

const ShowExp = ({expEle}: {expEle: string}): ReactElement => {
    const removeExp = () => {
        console.log('delete pls ${expEle}')
    };

    return (
    <Stack align='center'>
        <HStack spacing='20px'>
            <Box maxW='prose' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='baseline'>
                <Box color='blue.700'
                    fontWeight='extrabold'
                    letterSpacing='wide'
                    fontSize='medium'
                    textTransform='uppercase'
                    ml='2' textAlign='center' >
                    {expEle}
                </Box>
            </Box>
            <Button onClick={removeExp} leftIcon={<SmallCloseIcon />} />
        </HStack>
    </Stack>
    )
}

const ShowEdu = ({eduEle}: {eduEle: string}): ReactElement => {
    const removeEdu = () => {
        console.log('delete pls ${eduEle}')
    };

    return (
    <Stack align='center'>
        <HStack spacing='20px'>
            <Box maxW='prose' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='baseline'>
                <Box color='blue.700'
                    fontWeight='extrabold'
                    letterSpacing='wide'
                    fontSize='medium'
                    textTransform='uppercase'
                    ml='2' textAlign='center' >
                    {eduEle}
                </Box>
            </Box>
            <Button onClick={removeEdu} leftIcon={<SmallCloseIcon />} />
        </HStack>
    </Stack>
    )
}

const ShowSkill = ({ele}: {ele: string}): ReactElement => {
    const removeEle = () => {
        console.log('delete pls ${ele}')
    };

    return (
    <Stack align='center'>
        <HStack spacing='20px'>
            <Box maxW='prose' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='baseline'>
                <Box color='blue.700'
                    fontWeight='extrabold'
                    letterSpacing='wide'
                    fontSize='medium'
                    textTransform='uppercase'
                    ml='2' textAlign='center' >
                    {ele}
                </Box>
            </Box>
            <Button onClick={removeEle} leftIcon={<SmallCloseIcon />} />
        </HStack>
    </Stack>
    )
}

const User = () : ReactElement => {
    const [profile, setProfile] = useState('https://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png');
    const handleClick = () => {
        console.log(`${profile}`);
    }
    const [elemen, setElemen] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const handleSkill = () => {
        setSkills([...skills, elemen])
    };
    const [expEle, setExpEle] = useState('');
    const [experience, setExperience] = useState<string[]>([]);
    const handleExp = () => {
        setExperience([...experience, expEle])
    };
    const [eduEle, setEduEle] = useState('');
    const [education, setEducation] = useState<string[]>([]);
    const handleEdu = () => {
        setEducation([...education, eduEle])
    };

    return (
        <>
        <Stack align='center'>
            <Spacer />
            <Heading as="title" size="xl" noOfLines={1} textAlign='center'>
                Creating your CV...
            </Heading>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center'>
                Basic
            </Heading>
            <Spacer />
            <ShowImage sourc={profile}/>
            <HStack spacing='20px'>
                <Input size="md" placeholder="First Name" width="30" />
                <Input size="md" placeholder="Last Name" width="30" />
                <Input size="md" variant='filled' placeholder="Profile Picture URL" onChange={e => setProfile(e.target.value)} width="60" />
                <Button onClick={handleClick} size="md" height="40px" width="150px" leftIcon={<CheckCircleIcon />} colorScheme="blue" variant="solid">
                    Submit
                </Button>
            </HStack>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center'>
                Skills
            </Heading>
                {skills.map((e) => {
                    return (
                    <ShowSkill ele={e} key={e}/>
                )})}
            <Spacer />
            <HStack spacing='20px'>
                <Input size="md" placeholder="Add" onChange={e => setElemen(e.target.value)} width="15" />
                <Button onClick={handleSkill} size="md" height="40px" width="150px" leftIcon={<CheckCircleIcon />} colorScheme="blue" variant="solid">
                    Submit
                </Button>
            </HStack>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center'>
                Experience
            </Heading>
                {experience.map((e) => {
                    return (
                    <ShowExp expEle={e} key={e}/>
                )})}
            <Spacer />
            <Input size="md" variant='filled' placeholder="Add" width="950px" onChange={e => setExpEle(e.target.value)}/>
            <Button onClick={handleExp} size="md" height="40px" width="950px" leftIcon={<CheckCircleIcon />} colorScheme="blue" variant="solid">
                Submit
            </Button>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center'>
                Education
            </Heading>
                {education.map((e) => {
                    return (
                    <ShowEdu eduEle={e} key={e}/>
                )})}
            <Spacer />
            <Input size="md" variant='filled' placeholder="Add" width="950px" onChange={e => setEduEle(e.target.value)}/>
            <Button onClick={handleEdu} size="md" height="40px" width="950px" leftIcon={<CheckCircleIcon />} colorScheme="blue" variant="solid">
                Submit
            </Button>
            <Spacer />
            <Link href="/create">
                <Button size='lg' id='homePage-register-button' height="50px" width="950px" leftIcon={<SmallAddIcon />} colorScheme="blue" variant='outline'>
                    Submit
                </Button>
                <Box boxSize='sm'/>
            </Link>
        </Stack>
        </>
    )
}

export default User;