import { AppBar, Button, TextInput } from "@react-native-material/core";
import { Text, View } from "react-native";
import { useForm } from "../hooks/useForm";
import { startSaveNote } from "../store/journal/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setActionNotes } from "../store/journal/journalSlice";
import { useEffect, useMemo, useState } from "react";



export const NewNote = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation();
 

  const {active:note,  messageSaved, isSaving} = useSelector(state => state.journal)
  const {formState, onInputChange, title, body, date} = useForm( note)

  console.log(note)
  const [isNothing, setIsNothing] = useState('')

  useEffect(() => {
    dispatch(setActionNotes(formState))
 }, [formState])

 const dateString = useMemo(() => {
  const newDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  };
  return newDate.toLocaleDateString(undefined, options);
}, [date]);

  const onSaveNote = () => {
    if(title.trim() !== '' && body.trim() !== ''){
    dispatch(startSaveNote());
    navigation.navigate('MyNotes');
    return
    }

    setIsNothing('Debe ingresar un titulo y un cuerpo para la nota')
    
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
      <Text style={{ fontSize: 21, fontWeight: 'bold' }}> {dateString} </Text>



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
        style={{ fontSize: 20, marginBottom: 8, verticalAlign: 'top' }}
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

        <Button
          color="error"
          title="Eliminar"
          onPress={onDelete}
         
        />
      </View>

      
    </>
  );
}
