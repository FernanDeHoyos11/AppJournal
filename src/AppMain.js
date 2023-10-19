import { useSelector } from "react-redux";
import { Tabs } from "./Tabs";
import { AuthStackNavigator } from "./navigator/AuthNavigator";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useCheckAuth } from "./hooks/useCheckAuth";


export const AppMain = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); 
  
  
  const {status} = useCheckAuth();

  if(status === 'checking'){
    return  'Cargando'
}
    
  return (
    <>
    <NavigationContainer>
    { (status === 'authenticated') ? <Tabs /> : <AuthStackNavigator />}
    </NavigationContainer>
  
    </>
  )
}
