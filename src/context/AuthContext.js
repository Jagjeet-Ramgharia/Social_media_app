import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:false,//{
  //   _id:"60ec1d886ceba536b07e5de5",
  //   username:"jagjeet",
  //   profilePicture:"",
  //   coverPicture:"",
  //   isAdmin:false,
  //   email:"jagjeet@gmail.com",
  //   desc:"Everything is connected",
  //   city:"Ludhiana",
  //   from:"Punjab",
  //   relationship:2,
  //   followers:[],
  //   following:[]
  // },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
