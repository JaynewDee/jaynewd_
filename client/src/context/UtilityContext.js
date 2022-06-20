import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";


const UtilityContext = createContext();

const useUtilsContext = () => {
  const context = useContext(UtilityContext);
  if (context === null) {
    throw new Error(
      `useUtilityContext consumption was attempted outside of provider component`
    );
  }
  return context;
};

const UtilityContextProvider = ({ children }) => {
  const [modal, setModal] = useState({
    visibility: false,
    type: "login"
  })

  
  const initialContext = useMemo(
    () => ({
      modal,
    }),
    [modal]
  );

  return (
    <UtilityContext.Provider value={initialContext}>
      {children}
    </UtilityContext.Provider>
  );
};

export { useUtilsContext, UtilityContextProvider };
