import { AppBar, Button, IconButton } from "@react-native-material/core";
import { Text, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { startLogout } from "../store/auth/thunks";

export const IsLoading = () => {

  const dispatch = useDispatch()

  const onClickLogout = () => {
    dispatch(startLogout())
  }

  return (
    <>
      <AppBar
        color='#052659'
        style={{ alignItems: "flex-end" }}
        contentContainerStyle={{alignItems: "center", flexDirection: 'row-reverse'}}
        leading={props => (

          <IconButton icon={props => <Icon name="logout"   onPress={onClickLogout} {...props} />}  {...props} />

        )} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed!</Text>
      </View>
    </>

  );
}