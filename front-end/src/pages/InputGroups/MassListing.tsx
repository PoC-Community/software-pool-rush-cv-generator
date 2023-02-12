import { SmallAddIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, HStack, Input, Spacer, Stack, useToast } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';

const ShowExp = ({expEle, deleteExp}: {expEle: string, deleteExp: () => void}): JSX.Element => (
    <Stack align='center'>
        <HStack spacing='20px'>
            <Box maxW='prose' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='baseline'>
                <Box color='white'
                    fontWeight='extrabold'
                    fontSize='medium'
                    textTransform='uppercase'
                    padding="10px"
                    textAlign='center' >
                    {expEle}
                </Box>
            </Box>
            <Button onClick={deleteExp} leftIcon={<SmallCloseIcon />} variant="solid"
                bgColor="white" textColor="#86A8E7" borderRadius="20px" paddingLeft="25px"/>
        </HStack>
    </Stack>
)

const ShowEdu = ({eduEle, deleteEdu}: {eduEle: string, deleteEdu: () => (void)}): JSX.Element => (
    <Stack align='center'>
        <HStack spacing='20px'>
            <Box maxW='prose' borderWidth='1px' borderRadius='lg' overflow='hidden' alignItems='baseline'>
                <Box color='white'
                    fontWeight='extrabold'
                    fontSize='medium'
                    textTransform='uppercase'
                    padding="10px"
                    textAlign='center'>
                    {eduEle}
                </Box>
            </Box>
            <Button onClick={deleteEdu} leftIcon={<SmallCloseIcon />} variant="solid"
                bgColor="white" textColor="#86A8E7" borderRadius="20px" paddingLeft="25px"/>
        </HStack>
    </Stack>
)

export const Education = ({education, onChangeEducation}: {education: string[], onChangeEducation: (value: string[]) => void}) : ReactElement => {
    const toast = useToast();
    const [eduEle, setEduEle] = useState('');
    const handleEdu = () => {
        if (eduEle){
            if (education.indexOf(eduEle) === -1)
                onChangeEducation([...education, eduEle])
            else
                toast({title: 'Error', description: "Repeated Input.", status: 'error', duration: 1500, isClosable: true,});
        } else
            toast({title: 'Error', description: "No Input.", status: 'error', duration: 1500, isClosable: true,});
    };
    return (
        <>
        <Stack align='center'>
            <Heading size="md" noOfLines={1} textAlign='center' textColor="white">
                    Education
                </Heading>
                    {education.map((e, index) => <ShowEdu eduEle={e} key={index.toString()} deleteEdu={() => onChangeEducation(education.filter((a) => a !== e))} />)}
                <Spacer />
                <Input size="md" placeholder="Add education..." width="784px" onChange={e => setEduEle(e.target.value)}
                borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
                <Spacer paddingBottom="10px"/>
                <Button onClick={handleEdu} size="md" leftIcon={<SmallAddIcon />}
                height="40px" width="150px" bgColor="white" textColor="#86A8E7" borderRadius="20px">
                    Add
                </Button>
                <Spacer />
        </Stack>
        </>
    )
}

export const Experience = ({experience, onChangeExperience}: {experience: string[], onChangeExperience: (value: string[]) => void}): ReactElement => {
    const toast = useToast();
    const [expEle, setExpEle] = useState('');
    const handleExp = () => {
        if (expEle){
            if (experience.indexOf(expEle) === -1)
                onChangeExperience([...experience, expEle])
            else
                toast({title: 'Error', description: "Repeated Input.", status: 'error', duration: 1500, isClosable: true,});
        } else
            toast({title: 'Error', description: "No Input.", status: 'error', duration: 1500, isClosable: true,});
    };
    return (
        <>
        <Stack align='center'>
            <Heading size="md" noOfLines={1} textAlign='center' textColor="white">
                Experience
            </Heading>
                {experience.map((e, index) => {
                    return (
                    <ShowExp expEle={e} key={index.toString()} deleteExp={() => onChangeExperience(experience.filter((f) => f !== e))}/>
                )})}
            <Spacer />
            <Input size="md" placeholder="Add experience..." width="784px" onChange={e => setExpEle(e.target.value)}
            borderRadius="20px" paddingLeft="20px" bgColor="white" textColor="gray.600"/>
            <Spacer paddingBottom="10px"/>
            <Button onClick={handleExp} size="md" leftIcon={<SmallAddIcon />} variant="solid"
            height="40px" width="150px" bgColor="white" textColor="#86A8E7" borderRadius="20px">
                Add
            </Button>
            <Spacer />
        </Stack>
        </>
    )
}
