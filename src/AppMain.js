import { useSelector } from "react-redux";
import { Tabs } from "./Tabs";
import { AuthStackNavigator } from "./navigator/AuthNavigator";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";


export const AppMain = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); 
  const { status } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (status === 'authenticated') {
      setUserIsLoggedIn(true);
    }else{
      setUserIsLoggedIn(false); 
    }
  }, [status]);

    console.log(status)
    
  return (
    <>
    <NavigationContainer>
    {userIsLoggedIn ? <Tabs /> : <AuthStackNavigator />}
    </NavigationContainer>
  
    </>
  )
}
