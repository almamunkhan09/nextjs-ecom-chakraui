import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  MenuButton,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import {
  MdAddShoppingCart,
  MdDarkMode,
  MdOutlineLightMode,
} from 'react-icons/md';
import Footer from './Footer';

const navStyles = {
  p: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navMenu = ['Home', 'Products', 'MyCart'];

function NavWrapper({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      maxW={'100%'}
      height={'100vh'}
      marginBottom={'auto'}
      style={{
        display: 'flexbox',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Flex as="nav" sx={navStyles}>
        <Heading size="2xl" as="h1">
          {' '}
          KKOM{' '}
        </Heading>
        <Spacer />
        <HStack spacing="1rem">
          {navMenu.map((item) => {
            return (
              // <Text fontSize="xl" fontWeight={'bold'} key={item}>
              //   {item}
              // </Text>
              <Link
                key={item}
                as={NextLink}
                href={`/${item === 'Home' ? '' : item.toLocaleLowerCase()}`}
              >
                {item}
              </Link>
            );
          })}
          <Link as={NextLink} href="/mycart">
            <IconButton
              py="1"
              colorScheme="teal"
              aria-label="Notifications"
              icon={
                <>
                  <MdAddShoppingCart size="1.5rem" color="white" />
                  <Box
                    as="span"
                    color="black"
                    position="absolute"
                    top="0px"
                    right="2px"
                    fontSize="1rem"
                    zIndex={9999}
                    fontWeight="700"
                  >
                    {4}
                  </Box>
                </>
              }
            />
          </Link>

          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="dark-mode"
            fontSize="20px"
            icon={
              colorMode === 'light' ? (
                <MdOutlineLightMode size="2rem" />
              ) : (
                <MdDarkMode size="2rem" />
              )
            }
            onClick={() => {
              toggleColorMode();
            }}
          >
            {colorMode === 'light' ? 'Dark' : 'Light'}
          </IconButton>
        </HStack>
      </Flex>
      <Divider color={'yellow'} />
      {children}
      <Footer />
    </Flex>
  );
}

export default NavWrapper;
