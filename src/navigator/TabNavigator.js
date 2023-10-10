import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../views/HomeScreen";
import { DetailsScreen } from "../views/DetailsScreen";

const Tab = createMaterialBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      {/* Agrega más pantallas aquí según tus necesidades */}
    </Tab.Navigator>
  );
}