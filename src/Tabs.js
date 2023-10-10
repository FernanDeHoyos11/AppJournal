import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { IsLoading, MyNotes, NewNote } from "./tabs";
import { LoginScreen } from "./auth/Login";


const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => { 
  return (
   
    <Tab.Navigator
      initialRouteName="IsLoading"
      activeColor="#191D63"
      inactiveColor="#C1E8FF"
      barStyle={{backgroundColor: '#021024'}}
    >
      
      <Tab.Screen
        name="IsLoading"
        component={IsLoading}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20}  />
          ),
        }}
      />
      <Tab.Screen
        name="MyNotes"
        component={MyNotes}
        options={{
          tabBarLabel: 'MyNotes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="NewNote"
        component={NewNote}
        options={{
          tabBarLabel: 'NewNote',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  
  );
}

