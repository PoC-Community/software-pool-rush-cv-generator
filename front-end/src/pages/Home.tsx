import { Button, Center, Heading, Link, VStack, Box } from '@chakra-ui/react';
import { ReactElement } from 'react';

const HomePage = () : ReactElement => {
    return (
        <Box bgGradient='linear(to-l, #7F7FD5, #86A8E7, #91EAE4)' height={'100vh'}>
        <Center mt="50px">
            <VStack spacing="50px">
                <VStack spacing="20px">
                    <Heading id="app-title" as="h1" size="4xl" noOfLines={1} textColor="white"
                    paddingTop='150px'>
                        CV Generator
                    </Heading>
                    <Heading id="app-sub-title" as="h2" size="xl" textColor="white">
                        Create your own CV
                    </Heading>
                </VStack>
                <VStack spacing="20px">
                    <Link href="/login">
                        <Button id="homePage-login-button" variant="solid" bgColor="white" textColor="#86A8E7"
                        borderRadius="20px" width='432px'>
                            Login
                        </Button>
                    </Link>
                    <Link href="/register" id="homePage-register-button">
                        <Button id="homePage-register-button" variant="solid" bgColor="transparent"
                        border="1px" borderColor="white" textColor="white"
                        borderRadius="20px"  width='432px'
                        _hover={{ bg: "white",  textColor:"#86A8E7"}}>
                            Create an account
                        </Button>
                    </Link>
                </VStack>
            </VStack>
        </Center>
        </Box>
    )
}

export { HomePage };
