'use client';

import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import CartList from '../../Components/CartList';

function page() {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    const cookie = Cookies.get('myCart')
      ? setCartList(JSON.parse(Cookies.get('myCart')))
      : setCartList([]);
  }, []);

  return (
    <Container
      mt={5}
      maxW="100%"
      h={'100%'}
      // bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
      justifyContent="center"
      display="flex"
    >
      {cartList.length > 0 ? <CartList cartList={cartList} /> : ''}
    </Container>
  );
}

export default page;
