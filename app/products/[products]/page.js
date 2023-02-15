'use client';
import { AddIcon, ArrowForwardIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { products } from '../page';

function page({ params }) {
  const [initialCount, setInitialCount] = useState(1);
  const addOne = () => {
    setInitialCount((preValue) => preValue + 1);
  };
  const removeOne = () => {
    setInitialCount((preValue) => (preValue > 1 ? preValue - 1 : preValue));
  };
  return (
    <Card
      variant="elevated"
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      minH={400}
      m={10}
      border="solid 5px"
      borderColor={'orange'}
    >
      <Image
        ml={5}
        p={2}
        objectFit="contain"
        maxW={{ base: '100%', sm: '200px', md: '300px' }}
        src={products[params.products - 1].image}
        alt={products[params.products - 1].title}
      />

      <Stack ml={10} p={10} justifyContent={'space-around'}>
        <Stack spacing={3}>
          <CardBody>
            <Heading as="h1" size="md">
              {products[params.products - 1].title}
            </Heading>

            <Text py="2">{products[params.products - 1].description}</Text>
            <ButtonGroup spacing={2} alignItems="center">
              <ButtonGroup size="sm" isAttached variant="outline">
                <IconButton
                  aria-label="Add to friends"
                  icon={<MinusIcon />}
                  onClick={removeOne}
                />

                <Button>{initialCount}</Button>
                <IconButton
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={addOne}
                />
              </ButtonGroup>
              <Button variant="solid" colorScheme="blue">
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardBody>
          <CardFooter>
            <Link
              as={NextLink}
              href={`/products/checkout/}`}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="solid"
                colorScheme="teal"
                rightIcon={<ArrowForwardIcon />}
              >
                Check Out
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Stack>
    </Card>
  );
}

export default page;
