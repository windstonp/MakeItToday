import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import { Entypo, AntDesign, Foundation, Feather } from '@expo/vector-icons'; 
import { colors } from '../helpers/colors';

export function Task(){
  return(
    <View  style={styles.MessageContainer}>
      <View style={styles.cardMessage}>
        <Entypo name="new" size={32} color={colors.green}  style={styles.icon}/>
        <Text numberOfLines={1} style={styles.header}>
          Lorem ipsum dolor sit. aaaaaaaaaaaaa
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.expandContainer}>
          <Foundation name="trash" size={24} color={colors.red} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.expandContainer}>
          <Feather name="chevrons-down" size={18} color={colors.white}  />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.expandContainer}>
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