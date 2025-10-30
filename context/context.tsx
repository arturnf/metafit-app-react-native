import { createContext, ReactNode, useState } from 'react';

type User = {
  name: string;
  weight: string;
  age: string;
  height: string;
  sexo: string,
  level: string,
  objetivo: string,
};

type ContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const Context = createContext<ContextType>({
  user: { name: '', weight: '', age: '', height: '', sexo: '', level: '', objetivo: '' },
  setUser: () => { },
});



export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({
    name: '',
    weight: '',
    age: '',
    height: '',
    sexo: '',
    level: '',
    objetivo: '',
  });

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
}