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
import Cookies from 'js-cookie';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { products } from '../../../products';

function page({ params }) {
  const [count, setCount] = useState(1);
  const router = useRouter();

  const isCookieExist = Cookies.get('myCart')
    ? JSON.parse(Cookies.get('myCart'))
    : [];
  const [cartList, setCartList] = useState([...isCookieExist]);
  // console.log(cartList);
  const countIncrement = () => {
    count < products[params.products - 1].stock
      ? setCount((preValue) => preValue + 1)
      : alert(`Only ${count} is Available instock`);
  };
  const countDecrement = () => {
    setCount((preValue) => (preValue > 1 ? preValue - 1 : preValue));
  };
  const addTocart = (singleProduct, cart, setCart) => {
    const newItem = {
      id: singleProduct.id,
      productTitle: singleProduct.title,
      pricePerUnit: singleProduct.price,
      count,
      maxAmount: singleProduct.stock,
    };
    const newCart = [...cart, newItem];
    Cookies.set('myCart', JSON.stringify(newCart));
    setCart((preValue) => [...preValue, newItem]);
  };

  const updateCart = (singleProduct, cart, setCart) => {
    const newCart = [...cart];
    if (newCart.find((element) => element.id === singleProduct.id)) {
      newCart.find((element) => element.id === singleProduct.id).count = count;
    }

    // const matchFunction = (element) => element.id === product.id;
    // const indexOfItem = cartList.findIndex(matchFunction);
    // console.log(indexOfItem);
    setCart(newCart);
    Cookies.set('myCart', JSON.stringify(newCart));
  };

  const clickHandler = (singleProduct, cart, setCart) => {
    cart.find((element) => element.id === singleProduct.id)
      ? updateCart(singleProduct, cart, setCart)
      : addTocart(singleProduct, cart, setCart);
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
                  onClick={countDecrement}
                />

                <Button>{count}</Button>
                <IconButton
                  aria-label="Add to friends"
                  icon={<AddIcon />}
                  onClick={countIncrement}
                />
              </ButtonGroup>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={(e) => {
                  e.preventDefault();
                  clickHandler(
                    products[params.products - 1],
                    cartList,
                    setCartList,
                  );
                  router.refresh('/');
                }}
              >
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
