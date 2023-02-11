import { Button, Center, Heading, Link, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

const HomePage = () : ReactElement => {
    return (
        <Center mt="50px">
            <VStack spacing="50px">
                <VStack spacing="20px">
                    <Heading id="app-title" as="h2" size="3xl" noOfLines={1}>
                        CV Generator
                    </Heading>
                    <Heading id="app-sub-title" as="h2" size="xl">
                        Create your own CV
                    </Heading>
                </VStack>
                <VStack spacing="20px">
                    <Link href="/login">
                        <Button id="homePage-login-button" colorScheme="teal" variant="solid">
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button id="homePage-register-button" colorScheme="teal" variant="outline">
                            Create an account
                        </Button>
                    </Link>
                </VStack>
            </VStack>
        </Center>
    )
}

export { HomePage };
