import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
// @ts-ignore
import Cookies from 'js-cookie';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
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

// type cartItem ={
//   id: number
//   productTitle: string
//   pricePerUnit: number,
//   count: number,
//   maxAmount: number,
// }

function NavWrapper({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isCookieExist = Cookies.get('myCart')
    ? JSON.parse(Cookies.get('myCart'))
    : [];
  const [cartList, setCartList] = useState([...isCookieExist]);
  const [totalItemInCartList, setTotalItemInCartList] = useState(0);

  useEffect(() => {
    if (cartList.length > 0) {
      const numberOfItems = cartList.map((item) => item.count);
      return setTotalItemInCartList(
        numberOfItems.reduce((sum, value) => sum + value, 0),
      );
    }
  });

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
              aria-label="Notifications"
              icon={
                <>
                  <MdAddShoppingCart size="1.5rem" />
                  <Box
                    as="span"
                    position="absolute"
                    top="0px"
                    right="2px"
                    fontSize="1rem"
                    zIndex={9999}
                    fontWeight="700"
                  >
                    {totalItemInCartList ? totalItemInCartList : ''}
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
          />
        </HStack>
      </Flex>
      <Divider color={'yellow'} />
      {children}
      <Footer />
    </Flex>
  );
}

export default NavWrapper;
