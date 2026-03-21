'use client';

import React, { createContext, useContext } from 'react';

type TranslationDictionary = Record<string, any>;

const TranslationContext = createContext<TranslationDictionary | null>(null);

export const TranslationProvider = ({
  dictionary,
  children
}: {
  dictionary: TranslationDictionary;
  children: React.ReactNode;
}) => {
  return (
    <TranslationContext.Provider value={dictionary}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const dict = useContext(TranslationContext);
  if (!dict) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  
  // simple lodash.get style resolver
  return (key: string): string => {
    return (key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : undefined, dict) as unknown as string) || key;
  };
};
