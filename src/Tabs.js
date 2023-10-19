import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home, MyNotes, NewNote } from "./tabs";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "./store/journal/thunks";
import { useCheckAuth } from "./hooks/useCheckAuth";



const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => { 

  const dispatch = useDispatch()

   const {isSaving, active } = useSelector(state => state.journal)

   const onNewNote = () => {
      dispatch(startNewNote())
      console.log('first')
   }
   

 


  return (
   
    <Tab.Navigator
      initialRouteName="IsLoading"
      activeColor="#9CD2D3"
      inactiveColor="#C1E8FF"
      barStyle={{backgroundColor: '#114C5F'}}
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
        listeners={{
          tabPress: (e) => {
            onNewNote();
          },
        }}
        options={{
          tabBarLabel: 'Nueva',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons onPress={onNewNote} name="newspaper-plus" color={color} size={20} />
          ), 
        } }
      />
    </Tab.Navigator>
  
  );
}

