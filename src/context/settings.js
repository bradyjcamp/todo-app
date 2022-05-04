import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {

  const [completed, setComplete] = useState(false);
  const [pageItems, setpageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const addCompletedItem(item){
    //add item to our completed list

  }

  return (
    <SettingsContext.Provider value={{ completed, pageItems, sort, addCompletedItem }}>
      {children}
    </SettingsContext.Provider>
  );
}


export default SettingsProvider;