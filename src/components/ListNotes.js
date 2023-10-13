import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export const SideBarItem = ({ id, title = '', body, date, imageUrls = [], onOff }) => {
    const dispatch = useDispatch();
  
    const newTitle = useMemo(() => {
      return title.length > 17 ? title.substring(0, 17) + '...' : title;
    }, [title]);
  
    const onActiveNoteSelected = () => {
      /* dispatch(setActionNotes({ id, title, body, date, imageUrls }));
      onOff(); */
      console.log({ id, title, body, date, imageUrls, onOff })
    };
  
    return (
      <TouchableOpacity onPress={onActiveNoteSelected}>
        <View style={styles.listItem}>
          <Image  style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{newTitle}</Text>
            <Text style={styles.body}>{body}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };