import { FlatList, Text, View } from "react-native";
import { SideBarItem } from "../components/ListNotes";
import { AppBar } from "@react-native-material/core";

const data = [
  
  {
    id: 1,
    title: 'Título 1',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 2,
    title: 'Título 2',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 3,
    title: 'Título 3',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 4,
    title: 'Título 4',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },

  {
    id: 5,
    title: 'Título 15',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 6,
    title: 'Título 6',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 7,
    title: 'Título 7',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 8,
    title: 'Título 8',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },

  {
    id: 9,
    title: 'Título 9',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 10,
    title: 'Título 10',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 11,
    title: 'Título 11',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
  {
    id: 12,
    title: 'Título 12',
    body: 'Cuerpo de la nota 1',
    date: 'Fecha 1',
    imageUrls: ['url-de-la-imagen-1'],
  },
 
];

export const MyNotes = () => {
  return (
      <>
      <AppBar
        color='#052659'
        title='Mis notas'
        style={{ alignItems: "flex-end" }}
        contentContainerStyle={{alignItems: "center", flexDirection: 'row-reverse'}}
        />
      <FlatList
        style={{ flex: 1 }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SideBarItem
            id={item.id}
            title={item.title}
            body={item.body}
            date={item.date}
            imageUrls={item.imageUrls}
           // onOff={onOffFunction}  Reemplaza por la función adecuada
          />
        )}
      />
  </>
  );
}
