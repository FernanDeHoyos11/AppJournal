
import { Tabs } from "./Tabs";
import { AuthStackNavigator } from "./navigator/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useCheckAuth } from "./hooks/useCheckAuth";
import { Text } from "react-native";


export const AppMain = () => {
  
  
  const {status} = useCheckAuth();

  if(status === 'checking'){
    return  <><Text>Cargando...</Text></>
}
    
  return (
    <>
    <NavigationContainer>
    { (status === 'authenticated') ? <Tabs /> : <AuthStackNavigator />}
    </NavigationContainer>
    </>
  )
}
