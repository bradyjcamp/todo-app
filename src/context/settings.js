import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {

  const [hideCompleted, setHideCompleted] = useState(false);
  const [pageItems, setpageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const toggleCompletedPage = () => {
    if (hideCompleted === false){
      setHideCompleted(!hideCompleted)
    } else {
      setHideCompleted(false);
    }
  }

  const displayNum = (num) => {
    if (typeof num === 'number' && !isNaN(num)) {
      setpageItems(num);
    }
  }

  const sortList = (string) => {
    if (typeof string === 'string') {
      setSort(string);
    }
  }

  const localSettings = (input) => {
    localStorage.setItem('listSettings', JSON.stringify(input))
  }

  const setLocalSettings = () => {
    let listSettings = localStorage.getItem('listSettings');
    listSettings = JSON.parse(listSettings);
    setHideCompleted(listSettings.hideCompleted);
    setpageItems(listSettings.pageItems);
    setSort(listSettings.sort);
  }

  useEffect(() => {
    if (localStorage.getItem('listSettings')) {
       setLocalSettings() 
       console.log(localStorage)
      }
}, [])

  let values = {
    hideCompleted,
    pageItems,
    sort,
    toggleCompletedPage,
    displayNum,
    sortList,
    localSettings,
  }

  return (
    <SettingsContext.Provider value={ values }>
      {children}
    </SettingsContext.Provider>
  );
}


export default SettingsProvider;