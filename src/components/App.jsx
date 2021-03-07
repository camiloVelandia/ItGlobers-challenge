import React from 'react';
import Header from './Header';
import Form from './Form';
import { MenuContextProvider } from '../context/PageContext';
import '../styles/components/App.css';

const App = () => {
  return (
    <>
      <MenuContextProvider>
        <Header />
        <Form />
      </MenuContextProvider>
    </>
  );
};

export default App;
