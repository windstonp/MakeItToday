import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Entypo, AntDesign, Foundation, Feather } from '@expo/vector-icons'; 
import { colors } from '../helpers/colors';
import { TaskInterface } from '../helpers/interfaces';

interface TaskProps{
  Task: TaskInterface,
  handleDelete: (uuid: string) => void,
}
export function Task({Task, handleDelete}: TaskProps){

  return(
    <View  style={styles.MessageContainer}>
      <View style={styles.cardMessage}>
        <Entypo name="new" size={32} color={colors.green}  style={styles.icon}/>
        <Text numberOfLines={1} style={styles.header}>
          {Task.title}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={()=>{handleDelete(Task.uuid)}}>
          <Foundation name="trash" size={24} color={colors.red} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Feather name="chevrons-down" size={18} color={colors.white}  />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <AntDesign name="checkcircle" size={18} color={colors.light_green} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MessageContainer:{
    backgroundColor: "#6704b8",
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    borderColor: colors.green,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
  },
  cardMessage:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 30
  },
  header:{
    fontSize: 18,
    color: colors.white
  },
  icon: {
    paddingHorizontal: 10
  },
  buttonContainer:{
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})