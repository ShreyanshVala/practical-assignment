import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const user = {
    name: "Shreyansh",
    city: "Ahmedabad",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
