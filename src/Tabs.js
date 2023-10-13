import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home, MyNotes, NewNote } from "./tabs";



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
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20}  />
          ),
        }}
      />
      <Tab.Screen
        name="MyNotes"
        component={MyNotes}
        options={{
          tabBarLabel: 'Mis Notas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="note-multiple" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="NewNote"
        component={NewNote}
        options={{
          tabBarLabel: 'Nueva',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-plus" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  
  );
}

