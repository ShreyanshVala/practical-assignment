import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  isLoggedIn: false,
  user: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        isLoggedIn: false,
        user: null,
      };

    case "UPDATE_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };

    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
