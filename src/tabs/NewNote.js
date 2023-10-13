import { AppBar, TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { useForm } from "../hooks/useForm";

const data = {
  title: 'titulo',
  body: 'nota',
  date: new Date().getTime()
}
export const NewNote = () => {

  const {formState, onInputChange, title, body, date} = useForm(data)

  const onSaveNote = () => {
    //dispatch(startSaveNote());
  };

  const onInputFile = () => {
    // Implementa la lógica para seleccionar archivos aquí
  };

  const onDelete = () => {
    //dispatch(startDeletingNote());
  };
  return (
    <>
      <AppBar
        color='#052659'
        title='Nueva nota'
        style={{ alignItems: "flex-end" }}
        contentContainerStyle={{ alignItems: "center", flexDirection: 'row-reverse' }}
      />
      <Text style={{ fontSize: 38, fontWeight: 'light' }}> 13-13-2022</Text>

      {/* Botón para seleccionar archivos */}
      <TouchableOpacity onPress={onInputFile}>
        <Text>Subir Archivo</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          title="Guardar"
          onPress={onSaveNote}
         
        />

        {/* Botón para eliminar */}
        <Button
          title="Eliminar"
          onPress={onDelete}
         
        />
      </View>

      <TextInput
       label="Titulo"
        style={{ fontSize: 20, marginBottom: 8 }}
        placeholder="Ingrese un título"
        value={title}
        name='title'
        onChangeText={(text) => onInputChange('title', text)}
      />

      <TextInput
      label="Nota"
        style={{ fontSize: 20, marginBottom: 8, textAlignVertical: 'top' }}
        placeholder="¿Qué sucedió hoy?"
        value={body}
        name='body'
        onChangeText={(text) => onInputChange('body', text)}
      />

     {/*  {/* Galería de imágenes 
      note?.imageUrls && note.imageUrls.length > 0 && (
        <ImageGallery images={note.imageUrls} />
      )
 */}
      {/* Mensaje de éxito 
      {messageSaved.length > 0 && (
        <Text>{messageSaved}</Text>
      )}*/}
    </>
  );
}
