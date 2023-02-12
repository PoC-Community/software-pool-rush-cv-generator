import {
    CloseIcon, HamburgerIcon
} from '@chakra-ui/icons';
import {
  Box, Button, Flex, IconButton, Link,
  Popover, PopoverContent, PopoverTrigger, Stack, Text, useBreakpointValue, useColorModeValue, useDisclosure
} from '@chakra-ui/react';

const TopBar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Box>
        <Flex
          bgGradient='linear(to-l, #7F7FD5, #86A8E7)'
          color='#91EAE4'
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontWeight={"bold"}
              fontSize={'xl'}
              color={'white'}>
              CV Generator
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Link href="/create">
              <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'xl'}
                fontWeight={600}
                color={'white'}
                bg="transparent"
                href={'/create'}
                _hover={{
                  textDecoration: 'underline',
                }}
                _active={{
                    border:"none"
                }}>
                Create a CV
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Box>
    );
  }

const DesktopNav = () => {
    const linkColor = 'white';
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'xl'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'My CVs',
      href: '/Dashboard'
    }
  ];

export { TopBar };
