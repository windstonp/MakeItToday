import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Entypo, AntDesign, Foundation, Feather } from '@expo/vector-icons'; 
import { colors } from '../helpers/colors';
import { TaskProps } from '../helpers/interfaces';


export function Task({Task, handleDelete}: TaskProps){
  const [show, setShow] = useState(false);

  function toggleShowDescription(){
    setShow(!show);
  }
  return(
    <View  style={styles.MessageContainer}>
      <View style={styles.cardMessage}>
        <Entypo name="new" size={32} color={colors.white} style={styles.icon}/>
        <Text numberOfLines={1} style={styles.header}>
          {Task.title}
        </Text>
      </View>
      {(Task.message)  ? (
          <View style={(show) ? styles.showDescription : styles.hideDescription}>
            <Text numberOfLines={3} style={styles.messageDescription}>
              {Task.message}
            </Text>
          </View>
      ) : (
        <View style={(show) ? styles.showDescription : styles.hideDescription}>
          <Text numberOfLines={3} style={styles.messageDescription}>
            Edit this Task to add a description.
          </Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={()=>{handleDelete(Task.uuid)}}>
          <Foundation name="trash" size={24} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={toggleShowDescription}>
          <Feather name={(show) ? "chevrons-up" : "chevrons-down"} size={18} color={colors.white}  />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <AntDesign name="checkcircle" size={18} color={colors.white}   onPress={()=>{handleDelete(Task.uuid)}}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.editIcon} activeOpacity={0.6}>
        <Feather name="edit" size={18} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  MessageContainer:{
    backgroundColor: "#6704b8",
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    borderColor: colors.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
  },
  showDescription:{
    display: 'flex',
    paddingVertical: 20,
    width: '90%',
    paddingLeft: 52,
  },
  hideDescription:{
    display: 'none'
  },
  cardMessage:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  header:{
    fontSize: 18,
    color: colors.white
  },
  messageDescription:{
    fontSize: 14,
    color: colors.white,
    textAlign: 'justify'
  },
  icon: {
    paddingHorizontal: 10
  },
  buttonContainer:{
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  editIcon:{
    position: 'absolute',
    top: 10,
    right: 10
  }
})