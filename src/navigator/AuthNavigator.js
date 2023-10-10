import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../auth/Login";

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}