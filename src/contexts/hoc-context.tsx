import { createContext, useContext, useState } from 'react';

const Context = createContext<any>({
  unit: null,
});

export function LearnProvider({ children }: any) {
  const [learn, setLearn] = useState({
    unit: null,
  });
  return (
    <Context.Provider value={[learn, setLearn]}>{children}</Context.Provider>
  );
}

export function useLearnContext() {
  return useContext(Context);
}
