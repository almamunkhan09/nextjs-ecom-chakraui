import {
  AddIcon,
  ArrowForwardIcon,
  MinusIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  Divider,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Square,
  Stack,
  StackDivider,
  Stat,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

function CartList({ cartList }) {
  const router = useRouter();
  console.log(cartList, 'From list');
  if (cartList.length < 1) return <Text> No Item in your CartList </Text>;
  return (
    <div>
      <Box
        p={4}
        alignItems={'center'}
        justifyContent={'center'}
        display={'flex'}
      >
        <Heading variant={'h1'}> My Cart</Heading>
      </Box>

      <List spacing={3}>
        {cartList.map((item) => {
          return (
            <ListItem
              key={item.id}
              border={'2px solid'}
              borderRadius={'10px'}
              bg="#ffaa66"
            >
              <HStack>
                <Text p={4} fontWeight={'bold'}>
                  {item.productTitle}
                </Text>

                <Spacer />
                <HStack p={2}>
                  <Text pl={10} fontWeight={'bold'}>
                    {item.count}
                  </Text>
                  <Text p={4} fontWeight={'bold'}>
                    <span>&#215;</span>
                  </Text>
                  <Text p={4} fontWeight={'bold'}>
                    {item.pricePerUnit}
                  </Text>
                  <Text p={4} fontWeight={'bold'}>
                    {item.pricePerUnit * item.count}
                  </Text>
                  <Button> Delete</Button>
                </HStack>
              </HStack>
            </ListItem>
          );
        })}
      </List>
      <Center
        mt={5}
        ml="auto"
        p={4}
        maxW="md"
        border={'2px solid'}
        borderRadius={'10px'}
        bg="#ffaa66"
      >
        <Heading variant={'h6'}> Toatl Price: {100}</Heading>
      </Center>
      <Center
        mt={5}
        ml="auto"
        p={4}
        maxW="md"
        justifyContent={'center'}
        display="flex"
        border={'2px solid'}
        borderRadius={'10px'}
        bg="#ffaa66"
      >
        <Button
          border={'none'}
          size="lg"
          rightIcon={<ArrowForwardIcon />}
          variant="outline"
          onClick={() => router.push('/checkout')}
        >
          <Heading variant={'h6'}>Checkout</Heading>
        </Button>
      </Center>
    </div>
  );
}

export default CartList;
