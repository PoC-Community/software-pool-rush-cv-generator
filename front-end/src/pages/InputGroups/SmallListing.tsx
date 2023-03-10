import { PlusSquareIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Input, Spacer, Stack, useToast } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

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

const Skills = ({skills, onChangeSkills, languages, onChangeLanguages} : {skills: string[], onChangeSkills: (value: string[]) => void, languages: string[], onChangeLanguages: (value: string[]) => void}) : ReactElement => {
    const toast = useToast();
    const [elemen, setElemen] = useState('');
    const handleSkill = () => {
        if (elemen){
            if (skills.indexOf(elemen) === -1)
                onChangeSkills([...skills, elemen]);
            else
                toast({title: 'Error', description: "Repeated Input.", status: 'error', duration: 1500, isClosable: true,});
        } else
            toast({title: 'Error', description: "No Input.", status: 'error', duration: 1500, isClosable: true,});
    };
    const [lang, setLangEle] = useState('');
    const handleLang = () => {
        if (lang){
            if (languages.indexOf(lang) === -1)
                onChangeLanguages([...languages, lang])
            else
                toast({title: 'Error', description: "Repeated Input.", status: 'error', duration: 1500, isClosable: true,});
        } else
            toast({title: 'Error', description: "No Input.", status: 'error', duration: 1500, isClosable: true,});
    };
    return (
        <>
        <Stack align='center'>
            <Spacer />
            <Heading size="md" noOfLines={1} textAlign='center' textColor="white">
                Skills
            </Heading>
            {skills.map((e, index) => <ShowSkill ele={e} key={index.toString()} deleteEle={() => onChangeSkills(skills.filter((s) => s !== e))} />)}
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
                {languages.map((e, index) => <ShowLang ele={e} key={index.toString()} deleteEle={() => onChangeLanguages(languages.filter((g) => g !== e))} />)}
                <Spacer />
                <Input size="md" placeholder="Add a language...*" onChange={e => setLangEle(e.target.value)} width="15"
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