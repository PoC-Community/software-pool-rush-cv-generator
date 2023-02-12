import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Spacer, Stack } from '@chakra-ui/react';
import axios from 'axios';
import { ReactElement, useState } from 'react';
import Overview from './InputGroups/BasicOverview';
import { Education, Experience } from './InputGroups/MassListing';
import Skills from './InputGroups/SmallListing';
import Help from './HelpPage';

const User = () : ReactElement => {
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('https://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png');
    const [skills, setSkills] = useState<string[]>([]);
    const [languages, setLanguages] = useState<string[]>([]);
    const [experience, setExperience] = useState<string[]>([]);
    const [education, setEducation] = useState<string[]>([]);

    if (!localStorage.getItem('jwt'))
        window.location.href = '/login';

    const onSubmit = async () => {
        try {
			await axios.post('http://localhost:8080/cv', {
                templateName: 'Modern template',
                information: {
                    name,
                    language: languages,
                    photoUrl,
                    competence: skills,
                    experience,
                    scolarship: education
                }
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwt')}`
                }
            });
            window.location.href = '/Dashboard';
			return;
		} catch(error) {
			console.log(error);
			return;
		}
        // SEND REQUEST TO BACK-END => redirect to /Dashboard
    };
    return (<Stack align='center' bgGradient='linear(to-l, #7F7FD5, #86A8E7, #91EAE4)' paddingTop='5px'>
        <Spacer />
        <Heading as="title" size="xl" noOfLines={1} textAlign='center' textColor="white">
            Creating your CV...
        </Heading>
        <Overview namee={name} photoUrl={photoUrl} onChangeName={(value: string) => setName(value)} onChangePhotoUrl={(value: string) => setPhotoUrl(value)} />
        <Box boxSize='5'/>
        <Skills skills={skills} onChangeSkills={(value: string[]) => setSkills(value)} languages={languages} onChangeLanguages={(value: string[]) => setLanguages(value)} />
        <Box boxSize='5'/>
        <Experience experience={experience} onChangeExperience={(value: string[]) => setExperience(value)} />
        <Box boxSize='5'/>
        <Education education={education} onChangeEducation={(value: string[]) => setEducation(value)} />
        <Box boxSize='5' paddingBottom="30px"/>
        <Button size='lg' id='homePage-register-button' height="50px" width="784px" leftIcon={<CheckCircleIcon />}
        variant="solid" onClick={onSubmit}
        bgColor="white" textColor="#86A8E7" borderRadius="20px" paddingLeft="25px">
            Submit
        </Button>
        <Box boxSize='5'/>
        <Help />
        <Box boxSize='20'/>
    </Stack>);
}

export default User;