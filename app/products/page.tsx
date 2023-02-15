'use client';

import { AddIcon, ArrowForwardIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { products } from '../../products';

const generateCard = (item) => {
  return (
    <Card key={item.id} m={4} maxW="sm" bg={'#ff914d'}>
      <Link
        as={NextLink}
        href={`/products/${item.id}`}
        style={{ textDecoration: 'none' }}
      >
        <CardBody>
          <Image
            h="350px"
            objectFit="fill"
            w="100%"
            src={item.image}
            alt={item.title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text noOfLines={2}>{item.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${item.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="White"
            variant="outline"
          >
            More
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

function page() {
  return (
    <div>
      <Center bg="inherit" h="100px">
        <Heading variant="h1"> Products </Heading>
      </Center>
      <SimpleGrid columns={4} spacing={2}>
        {products.map((product) => {
          return generateCard(product);
        })}
      </SimpleGrid>
    </div>
  );
}

export default page;
