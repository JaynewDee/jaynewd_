import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const UserContext = createContext();

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(
      "useUserContext consumption was attempted outside of provider component"
    );
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signout = useCallback(() => {
    setUser(null);
  }, []);

  const signin = useCallback((userObject) => {
    setUser(userObject);
  }, []);

  const initialContext = useMemo(
    () => ({
      user,
      signout,
      signin,
    }),
    [user, signout, signin]
  );

  return (
    <UserContext.Provider value={initialContext}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserContextProvider };
