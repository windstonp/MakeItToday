import React from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons'; 
import { colors } from '../helpers/colors';
import { Swipeable } from 'react-native-gesture-handler';

export function Task(){
  return(
    <Swipeable
      overshootRight={false}
      renderRightActions={()=>(
        <Animated.View>
          <TouchableOpacity activeOpacity={0.6} style={styles.CompleteContainer}>
            <View>
              <Feather name="check-square" size={32} color={colors.white} />
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
      overshootLeft={false}
      renderLeftActions={()=>(
        <Animated.View>
          <TouchableOpacity activeOpacity={0.6} style={styles.DeleteContainer}>
            <View>
              <Feather name="trash" size={32} color={colors.white} />
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    >
      <View style={styles.MessageContainer}>
        <View style={styles.headerContainer} >
          <Entypo name="new" size={32} color={colors.green} />
          <Text numberOfLines={1} style={styles.header}>
            Lorem ipsum dolor sit. aaaaaaaaaaaaa
          </Text>
        </View>
        <Text style={styles.message}>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Fusce vestibulum nibh eu quam consequat, 
          eget dignissim purus posuere. Donec imperdiet tristique elit id aliquet.
        </Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  MessageContainer:{
    height: 150,
    padding: 25,
    backgroundColor: "#6704b8",
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    borderColor: colors.green,
    borderWidth: 1,
    
  },
  CompleteContainer:{
    height: '90%',
    width: 100,
    backgroundColor: colors.green,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    paddingRight: 10,
    paddingLeft: 20,
  },
  DeleteContainer:{
    height: '90%',
    width: 100,
    backgroundColor: 'red',
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    left: 30,
    paddingRight: 20,
    paddingLeft: 20,
  },
  headerContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header:{
    color: colors.white,
    marginLeft: 15,
    fontSize: 32,
    paddingRight: 30,
  },
  message: {
    color: colors.white,
    paddingLeft: 47,
    textAlign: 'justify'
  }
})