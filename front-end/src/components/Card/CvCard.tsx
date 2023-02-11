import { ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Divider, Flex, GridItem, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react';
import Cv from 'Types/Cv';

const CvCard = ({ cv }: { cv: Cv }) => {
	return (
		<GridItem w="100%" h="100%">
			<Card maxW="sm">
				<CardBody>
					<Flex>
            <Image width={20} height={20} src={cv.information.photoUrl} borderRadius="lg" />
            <Spacer />
            <CloseIcon style={{cursor: "pointer"}} />
            <Box w={5} />
            <ArrowRightIcon style={{cursor: "pointer"}} />
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