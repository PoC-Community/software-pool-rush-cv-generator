import React, { ReactElement, useState } from 'react';
import { Stack, Box, HStack, Spacer, Heading, Button, Input } from '@chakra-ui/react'
import { SmallCloseIcon, SmallAddIcon } from '@chakra-ui/icons'

const ShowExp = ({expEle, deleteExp}: {expEle: string, deleteExp: () => void}): JSX.Element => (
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
            <Button onClick={deleteExp} leftIcon={<SmallCloseIcon />} />
        </HStack>
    </Stack>
)

const ShowEdu = ({eduEle, deleteEdu}: {eduEle: string, deleteEdu: () => (void)}): JSX.Element => (
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
            <Button onClick={deleteEdu} leftIcon={<SmallCloseIcon />} />
        </HStack>
    </Stack>
)

export const Education = () : ReactElement => {
    const [eduEle, setEduEle] = useState('');
    const [education, setEducation] = useState<string[]>([]);
    const handleEdu = () => {
        setEducation([...education, eduEle])
    };
    return (
        <>
        <Stack align='center'>
            <Heading size="md" noOfLines={1} textAlign='center'>
                    Education
                </Heading>
                    {education.map((e, index) => <ShowEdu eduEle={e} key={index.toString()} deleteEdu={() => setEducation(education.filter((a) => a !== e))} />)}
                <Spacer />
                <Input size="md" variant='filled' placeholder="Add education..." width="950px" onChange={e => setEduEle(e.target.value)}/>
                <Button onClick={handleEdu} size="md" height="40px" width="950px" leftIcon={<SmallAddIcon />} colorScheme="facebook" variant="solid">
                    Add
                </Button>
                <Spacer />
        </Stack>
        </>
    )
}

export const Experience = () : ReactElement => {
    const [expEle, setExpEle] = useState('');
    const [experience, setExperience] = useState<string[]>([]);
    const handleExp = () => {
        setExperience([...experience, expEle])
    };
    return (
        <>
        <Stack align='center'>
            <Heading size="md" noOfLines={1} textAlign='center'>
                Experience
            </Heading>
                {experience.map((e, index) => {
                    return (
                    <ShowExp expEle={e} key={index.toString()} deleteExp={() => setExperience(experience.filter((f) => f !== e))}/>
                )})}
            <Spacer />
            <Input size="md" variant='filled' placeholder="Add experience..." width="950px" onChange={e => setExpEle(e.target.value)}/>
            <Button onClick={handleExp} size="md" height="40px" width="950px" leftIcon={<SmallAddIcon />} colorScheme='facebook' variant="solid">
                Add
            </Button>
            <Spacer />
        </Stack>
        </>
    )
}
