import { createContext, PropsWithChildren, useContext } from "react";

export interface IMainContext {
 goTo: (id: string) => void;
}
export const MainContext = createContext<IMainContext>({} as any);
export const MainProvider: React.FC<PropsWithChildren> = ({ children }) => {
 const goTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
   el.scrollIntoView({ behavior: "smooth" });
  }
 };
 return (
  <MainContext.Provider
   value={{
    goTo,
   }}
  >
   {children}
  </MainContext.Provider>
 );
};

export function useMainContext() {
 return useContext(MainContext);
}
