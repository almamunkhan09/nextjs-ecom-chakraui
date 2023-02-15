'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../app/redux/store';
import theme from '../chakraTheme';
import NavWrapper from './NavWrapper';

// pages/_app.js
// import React from 'react';

function ChakraWrapper({ children }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />

        <NavWrapper>{children} </NavWrapper>
      </ChakraProvider>
    </Provider>
  );
}

export default ChakraWrapper;
