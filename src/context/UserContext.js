import { createContext, useState } from "react";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [usersActive, setUsersActive] = useState([]);

  return (
    <UserContext.Provider
      value={{
        usersActive,
        setUsersActive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
