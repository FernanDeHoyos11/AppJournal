import { FlatList } from "react-native";
import { SideBarItem } from "../components/ListNotes";
import { AppBar } from "@react-native-material/core";
import { useSelector } from "react-redux";



export const MyNotes = () => {

  //const { displayName } = useSelector(state => state.auth)
  const { notes } = useSelector(state => state.journal)

  console.log(notes)

  return (
      <>
      <AppBar
        color='#114C5F'
        title='Mis notas'
        style={{ alignItems: "flex-end" }}
        contentContainerStyle={{alignItems: "center", flexDirection: 'row-reverse'}}
        />
      <FlatList
        style={{ flexDirection: "column", backgroundColor: '#FDFFFF'}}
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SideBarItem
            id={item.id}
            title={item.title}
            body={item.body}
            date={item.date}
            imageUrls={item.imageUrls}
      
          />
        )}
      />
  </>
  );
}
