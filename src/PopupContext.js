import React, { createContext, useState, useEffect, useContext } from 'react';
import HomePopup from './Components/HomePopup';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);

  useEffect(() => {
    // Check if the popup has been displayed before
    const isPopupAlreadyDisplayed = localStorage.getItem('popupDisplayed');
    if (!isPopupAlreadyDisplayed) {
      setIsPopupDisplayed(true);
      // Set a flag in localStorage to indicate that the popup has been displayed
      localStorage.setItem('popupDisplayed', 'true');
    }
  }, []);

  const closePopup = () => {
    setIsPopupDisplayed(false);
  };

  return (
    <PopupContext.Provider value={{ isPopupDisplayed, closePopup }}>
      {isPopupDisplayed && <HomePopup />}
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};
