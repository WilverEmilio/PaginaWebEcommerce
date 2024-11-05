"use client";

import React, { createContext, useState } from "react";
import { AppContextType } from "@/interFace/interFace";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  const [inputValue, setInputValue] = useState<boolean>(false);
  const [closeMenuItem, setCloseMenuItem] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>("");
  const MenuCloseToggle = () => {
    setCloseMenuItem(!closeMenuItem);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  const inputTogglePage = () => {
    setInputValue(!inputValue);
  };

  const contextValue: AppContextType = {
    sideMenuOpen,
    toggleSideMenu,
    MenuCloseToggle,
    setCloseMenuItem,
    closeMenuItem,
    scrollDirection,
    setScrollDirection,
    inputValue,
    setInputValue,
    inputTogglePage,
    filterType, setFilterType, setSideMenuOpen

  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
