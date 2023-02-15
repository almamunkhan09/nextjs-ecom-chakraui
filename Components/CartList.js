import { AddIcon, MinusIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
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
import React from 'react';

function CartList() {
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
        <ListItem border={'2px solid'} borderRadius={'10px'} bg="#ffaa66">
          <HStack>
            <Text p={4} fontWeight={'bold'}>
              T Shirtvxcvxccccccccccccccccccc
            </Text>

            <Spacer />
            <HStack p={2}>
              <Text pl={10} fontWeight={'bold'}>
                3pc
              </Text>
              <Text p={4} fontWeight={'bold'}>
                <span>&#215;</span>
              </Text>
              <Text p={4} fontWeight={'bold'}>
                300
              </Text>
              <Text p={4} fontWeight={'bold'}>
                900
              </Text>
              <Button> Delete</Button>
            </HStack>
          </HStack>
        </ListItem>
        <ListItem border={'2px solid'} borderRadius={'10px'} bg="#ffaa66">
          <HStack>
            <Text p={4} fontWeight={'bold'}>
              T Shirtvxcvxccccccccccccccccccc
            </Text>

            <Spacer />
            <HStack p={2}>
              <Text pl={10} fontWeight={'bold'}>
                3pc
              </Text>
              <Text p={4} fontWeight={'bold'}>
                <span>&#215;</span>
              </Text>
              <Text p={4} fontWeight={'bold'}>
                300
              </Text>
              <Text p={4} fontWeight={'bold'}>
                900
              </Text>
              <Button> Delete</Button>
            </HStack>
          </HStack>
        </ListItem>
      </List>
    </div>
  );
}

export default CartList;
