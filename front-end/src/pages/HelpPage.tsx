import { Box, Heading, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';

const Help = () : JSX.Element => (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Accordion>
            <AccordionItem>
                <Heading>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            Experience
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                The work experience section is where you get to really sell yourself, so you have to make sure you really iron out the details and the formatting makes sense.
                This is where you get to show off your best qualities.
                To make sure your resume is easy to follow, we recommend going with the standard work experience format, which looks a bit like this:
                - Job Title and Position
                - Company Name / Description / Location
                - Dates Employed
                - Responsibilities and Achievements
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <Heading>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Education
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                There's more than one way to format your education section, depending on the amount of work experience you have and what details may be most relevant to the job you're applying for.
                For each school you have attended, consider including some combination of the following (always include the three highlighted items):
                - School name*
                - Degree obtained*
                - Location*
                - Dates attended or graduation date
                - Field of study (major and minors)
                - GPA (based on your results, see what makes you look best)
                - Honors, achievements, relevant coursework, extracurricular activities, or study abroad programs
                Rank your highest degrees first and continue in reverse chronological order.
                And remember, when ranking your educational achievements, it's not necessary to list your high school graduation if you have completed a college degree. If you haven't completed college, list your high school education.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <Heading>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Languages
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                When listing your languages, consider how you can rate yourself. You can say that you are:
                - Native
                - Fluent
                - Proficient
                - Intermediate
                - Beginner
                or you can simply your level based language levels as so:
                - A1/A2 ("Basic User")
                - B1/B2 ("Independent User")
                - C1/C2 ("Proficient User")
                They're not going to take up a lot of space in your resume, so we want you to include this section whether you're confident about your language skills or not.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Box>
)

export default Help;