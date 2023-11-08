import {  Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { setActionNotes } from '../store/journal/journalSlice';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { startDeletingNote } from '../store/journal/thunks';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export const SideBarItem = ({ id, title = 'titulo', body='nota', date, imageUrls = [], onOff }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  const onActiveNoteSelected = () => {
    dispatch(setActionNotes({ id, title, body, date, imageUrls }));
    navigation.navigate('NewNote');
    console.log({ id, title, body, date, imageUrls, onOff })
  };

  const onDeleteNote = () => {
    dispatch(setActionNotes({ id, title, body, date, imageUrls }));
    dispatch(startDeletingNote())
  }

  return (
    <TouchableOpacity onPress={onActiveNoteSelected}>
      <View  style={styles.listItem}>
      <FontAwesome style={{paddingRight: 10}} name="sticky-note-o" size={14} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{newTitle}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>

        <Icon.Button 
        name="trash"
        backgroundColor="#114C5F"
        onPress={onDeleteNote}
        iconStyle={{ marginRight: 0, paddingRight: 0 }} // Ajusta el espacio a la derecha del icono
        textStyle={{ marginLeft: 0, paddingLeft: 0 }}
        >
          
        </Icon.Button>
      </View>
    </TouchableOpacity>
  );
};