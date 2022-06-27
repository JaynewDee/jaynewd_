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
  const [modal, toggleModal] = useState({
    visibility: false,
    type: "login",
  });
  const off = () => {
    const newState = { visibility: false, type: "login" };
    return toggleModal(newState);
  };
  const on = (type) => {
    const newState = { visibility: true, type: type };
    return toggleModal(newState);
  };
  const initialContext = useMemo(
    () => ({
      modal,
      off,
      on,
    }),
    [modal, off, on]
  );

  return (
    <UtilityContext.Provider value={initialContext}>
      {children}
    </UtilityContext.Provider>
  );
};

export { useUtilsContext, UtilityContextProvider };
