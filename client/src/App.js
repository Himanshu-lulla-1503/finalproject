import React,{useState,useContext,createContext} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from './Auth';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import  NewsCards  from './Dashboard';

const authContext=createContext();
const App=()=>{  
   const [loginStatus,setLoginStatus]=useState(null);
   const [oauth,setOauth]=useState(false);
   const handlelogin=(user)=>{

     setLoginStatus(user);
   }
   const handlelogout=()=>{

     setLoginStatus(null);
     
   }

   const handleoauth=()=>{
     setOauth(true);
   }

   const authvalue={
     loginStatus,
     handlelogin,
     handlelogout,
     oauth,
     handleoauth
     
   }
    return(
    <authContext.Provider value={authvalue}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Auth} />
        <Route exact path="/register"  component={Register} />
        <ProtectedRoute path="/home" component={NewsCards}/>

      </Switch>
    </BrowserRouter>
    </authContext.Provider>
    )
}
export default App;
export {authContext};