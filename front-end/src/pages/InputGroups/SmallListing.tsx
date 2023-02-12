import React, { ReactElement, useState } from 'react';
import { Stack, Box, HStack, Spacer, Heading, Button, Input } from '@chakra-ui/react'
import { SmallCloseIcon, PlusSquareIcon } from '@chakra-ui/icons'

const ShowSkill = ({ele, deleteEle}: {ele: string, deleteEle: () => (void) }): JSX.Element => (
    <Stack align='center'>
        <HStack spacing='20px'>
            <Box maxW='prose' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='baseline'>
                <Box color='white'
                    fontWeight='extrabold'
                    fontSize='medium'
                    textTransform='uppercase'
                    padding="10px"
                    textAlign='center' >
                    {ele}
                </Box>
            </Box>
            <Button onClick={deleteEle} leftIcon={<SmallCloseIcon />} variant="solid"
                bgColor="white" textColor="#86A8E7" borderRadius="20px" paddingLeft="25px"/>
        </HStack>
    </Stack>
)

const ShowLang = ({ele, deleteEle}: {ele: string, deleteEle: () => (void) }): JSX.Element => (
    <Stack align='center'>
        <HStack spacing='20px'>
            <Box maxW='prose' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='baseline'>
                <Box color='white'
                    fontWeight='extrabold'
                    fontSize='medium'
                    textTransform='uppercase'
                    padding="10px"
                    textAlign='center' >
                    {ele}
                </Box>
            </Box>
            <Button onClick={deleteEle} leftIcon={<SmallCloseIcon />} variant="solid"
                bgColor="white" textColor="#86A8E7" borderRadius="20px" paddingLeft="25px"
                />
        </HStack>
    </Stack>
)

const Skills = () : ReactElement => {
    const [elemen, setElemen] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const handleSkill = () => {
        setSkills([...skills, elemen])
    };
    const [lang, setLangEle] = useState('');
    const [languages, setLang] = useState<string[]>([]);
    const handleLang = () => {
        setLang([...languages, lang])
    };
    return (
        <>
        <Stack align='center'>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center' textColor="white">
                Skills
            </Heading>
            {skills.map((e, index) => <ShowSkill ele={e} key={index.toString()} deleteEle={() => setSkills(skills.filter((s) => s !== e))} />)}
            <Spacer />
            <HStack spacing='20px'>
            <Input size="md" placeholder="Add competent skills..." onChange={e => setElemen(e.target.value)} width="30" 
            borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
            <Button onClick={handleSkill} size="md" height="40px" width="100px" leftIcon={<PlusSquareIcon />} 
            variant="solid" bgColor="white" textColor="#86A8E7"
            borderRadius="20px">
                Add
            </Button>
            </HStack>
            <Box boxSize='8'/>
            <HStack spacing='20px'>
                <Heading size="md" noOfLines={1} textAlign='center' textColor="white">
                    Language(s)
                </Heading>
                {languages.map((e, index) => <ShowLang ele={e} key={index.toString()} deleteEle={() => setLang(languages.filter((g) => g !== e))} />)}
                <Spacer />
                <Input size="md" placeholder="Add languages..." onChange={e => setLangEle(e.target.value)} width="15" 
                borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
                <Button onClick={handleLang} size="md" height="40px" width="100px" leftIcon={<PlusSquareIcon />}
                variant="solid" bgColor="white" textColor="#86A8E7"
                borderRadius="20px">
                    Add
                </Button>
            </HStack>
            <Spacer />
        </Stack>
        </>
    )
}

export default Skills;