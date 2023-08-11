import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createContext} from "react";

export const server = "https://nodejs-todoapp-507u.onrender.com/api/v1";

export const Context = createContext({isauthenticated:false});

const AppWrapper = ()=>{
  const [isauthenticated, setIsauthenticated] = useState(false);
  const [isLoading , setIsLoading] = useState(false);
  const [user , setUser] = useState({});

  return(
    <Context.Provider value={
      {isauthenticated,setIsauthenticated,
      isLoading,setIsLoading,
      user,setUser}
      }> 
      <App />
    </Context.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);


