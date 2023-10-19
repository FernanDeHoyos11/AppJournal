import { AppBar, Button, TextInput } from "@react-native-material/core";
import { Text, TouchableOpacity, View } from "react-native";
import { useForm } from "../hooks/useForm";
import { startNewNote, startSaveNote } from "../store/journal/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setActionNotes } from "../store/journal/journalSlice";
import { useEffect } from "react";


export const NewNote = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation();
 

  const {active:note,  messageSaved, isSaving} = useSelector(state => state.journal)
  const {formState, onInputChange, title, body, date} = useForm(note)

  useEffect(() => {
    dispatch(setActionNotes(formState))
 }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote());
    navigation.navigate('MyNotes');
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
        color='#114C5F'
        title='Nueva nota'
        style={{ alignItems: "flex-end" }}
        contentContainerStyle={{ alignItems: "center", flexDirection: 'row-reverse' }}
      />
      <Text style={{ fontSize: 38, fontWeight: 'light' }}> 13-13-2022</Text>

      {/* Botón para seleccionar archivos */}
      <TouchableOpacity onPress={onInputFile}>
        <Text>Subir Archivo</Text>
      </TouchableOpacity>

     

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

<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          color="#052659"
          title="Guardar"
          onPress={onSaveNote}
         
        />

        {/* Botón para eliminar */}
        <Button
          color="error"
          title="Eliminar"
          onPress={onDelete}
         
        />
      </View>

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
