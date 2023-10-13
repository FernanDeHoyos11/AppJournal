import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../auth/Login";
import { RegisterScreen } from "../auth/Register";

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#052659', elevation: 10,},
      headerTintColor: '#FFFFFF',
    }}>
      <AuthStack.Screen   name="login" component={LoginScreen} />
      <AuthStack.Screen   name="register" component={RegisterScreen}/>
    </AuthStack.Navigator>
  );
}