import React, { useState } from 'react';

const PageContext = React.createContext(null);

export function MenuContextProvider({ children }) {
  const [menu, setmenu] = useState('Vivair');
  return (
    <PageContext.Provider value={{ menu, setmenu }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
