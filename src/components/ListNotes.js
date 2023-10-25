import {  Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { setActionNotes } from '../store/journal/journalSlice';
import { useNavigation } from '@react-navigation/native';
import {  FAB } from '@react-native-material/core';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { startDeletingNote } from '../store/journal/thunks';

export const SideBarItem = ({ id, title = '', body, date, imageUrls = [], onOff }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  const onActiveNoteSelected = () => {
    dispatch(setActionNotes({ id, title, body, date, imageUrls }));
    //onOff(); 
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
        <FAB color='#114C5F'  size='5px'  icon={<MaterialIcons name="delete" size={14} color="black" />}
          visible={true}
          onPress={onDeleteNote}
        />
      </View>
    </TouchableOpacity>
  );
};