import { Highlight, Text, Box, Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';

const Help = () : JSX.Element => (
    <Box maxW='4xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    <Box textAlign='left' width="894px" textColor="white">
                        <Heading>
                            Experience
                        </Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text textColor="white">
                        The work experience section is where you get to really sell yourself, so you have to make sure you really iron out the details and the formatting makes sense.
                        This is where you get to show off your best qualities.
                        <Box boxSize='2'/>
                        To make sure your resume is easy to follow, we recommend going with the standard work experience format, which looks a bit like this:
                        <br />
                        - Job Title and Position
                        <br />
                        - Company Name / Description / Location
                        <br />
                        - Dates Employed
                        <br />
                        - Responsibilities and Achievements
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <Heading textColor="white">
                            Education
                        </Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Text textColor="white">
                        There's more than one way to format your education section, depending on the amount of work experience you have and what details may be most relevant to the job you're applying for.
                        For each school you have attended, consider including some combination of the following (always include the three highlighted items):
                        <br />
                        <Highlight query='School name' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                        - School name
                        </Highlight>
                        <br />
                        <Highlight query='Degree obtained' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                        - Degree obtained
                        </Highlight>
                        <br />
                        <Highlight query='Location' styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}>
                        - Location
                        </Highlight>
                        <br />
                        - Dates attended or graduation date
                        <br />
                        - Field of study (major and minors)
                        <br />
                        - GPA (based on your results, see what makes you look best)
                        <br />
                        - Honors, achievements, relevant coursework, extracurricular activities, or study abroad programs
                        <br />
                        <br />
                        Rank your highest degrees first and continue in reverse chronological order.
                        And remember, when ranking your educational achievements, it's not necessary to list your high school graduation
                        <br />
                        if you have completed a college degree. If you haven't completed college, list your high school education.
                    </Text>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        <Heading textColor="white">
                            Languages
                        </Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            <AccordionPanel pb={4}>
                <Text textColor="white">
                    When listing your languages, consider how you can rate yourself. You can say that you are:
                    <br />
                    - Native
                    <br />
                    - Fluent
                    <br />
                    - Proficient
                    <br />
                    - Intermediate
                    <br />
                    - Beginner
                    <br />
                    <br />
                    or you can simply your level based language levels as so:
                    <br />
                    - A1/A2 ("Basic User")
                    <br />
                    - B1/B2 ("Independent User")
                    <br />
                    - C1/C2 ("Proficient User")
                    <br />
                    They're not going to take up a lot of space in your resume, so we want you to include this section whether you're confident about your language skills or not.
                </Text>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                    <Heading textColor="white">
                        Skills
                    </Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <Text textColor="white">
                    Your skills must consist of a balanced number of soft skills and hard skills or technical skills.
                </Text>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
</Box>
)

export default Help;