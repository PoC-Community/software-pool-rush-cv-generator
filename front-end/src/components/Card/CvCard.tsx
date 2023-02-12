import { ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Divider, Flex, GridItem, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import Cv from 'Types/Cv';

const CvCard = ({ cv, actualisationCv }: { cv: Cv, actualisationCv: () => void }) => {
		const deleteCv = async (uuid: string) : Promise<void> => {
			try {
					await axios.delete(`http://localhost:8080/cv/${uuid}`, {
						headers: {
								Authorization: `Bearer ${localStorage.getItem('jwt')}`
						}
				});
					actualisationCv();
					return;
			} catch(error) {
					console.log(error);
					return;
			}
	};
	return (
		<GridItem w="100%" h="100%">
			<Card maxW="sm">
				<CardBody>
					<Flex>
            <Image width={20} height={20} src={cv.information.photoUrl} borderRadius="lg" />
            <Spacer />
            <CloseIcon style={{cursor: "pointer"}} onClick={() => deleteCv(cv.uuid)} />
            <Box w={5} />
            <ArrowRightIcon style={{cursor: "pointer"}} onClick={() => window.open(`http://localhost:8080/cv/${cv.uuid}/render`)} />
          </Flex>
          <Stack mt="6" spacing="3">
						<Heading size="md">{cv.information.name}</Heading>
						<Text color="gray" >
							{cv.templateName}
						</Text>
            <Text>
							<strong>Skills:</strong> {cv.information.competence.join(', ')}
						</Text>
            <Text>
							<strong>Experience:</strong> {cv.information.experience.join(', ')}
						</Text>
            <Text>
							<strong>Education:</strong> {cv.information.scolarship.join(', ')}
						</Text>
            <Text>
							<strong>Language:</strong> {cv.information.language.join(', ')}
						</Text>
					</Stack>
				</CardBody>
				<Divider />
			</Card>
		</GridItem>
	);
};

export default CvCard;