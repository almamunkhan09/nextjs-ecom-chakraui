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
import CartList from '../../Components/CartList';

function page() {
  return (
    <Container
      mt={5}
      maxW="100%"
      h={'100%'}
      // bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
      justifyContent="center"
      display="flex"
    >
      <CartList />
    </Container>
  );
}

export default page;
