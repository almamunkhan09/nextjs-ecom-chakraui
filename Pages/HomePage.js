// eslint-disable-next-line no-unused-expressions
'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const boxStyles = {
  bg: 'orange',
  m: '20px',
  p: '20px',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  ':hover': {
    color: 'black',
    bg: 'blue.200',
  },
};

const flexBox = {
  bg: 'gray.200',
  justifyContent: 'space-around',
  wrap: 'wrap',
  gap: '2',
};

function HomePage() {
  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">
        Welcome to my Nextjs E Commerce Site.
      </Heading>
      <Text ml="10px" p="10px" color="red" fontWeight="bold">
        It is under construction.You Can Visit to products Route make a fake buy
      </Text>
    </Container>
  );
}

export default HomePage;
