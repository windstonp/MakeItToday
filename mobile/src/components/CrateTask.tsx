import React, { useState } from 'react';
import { AntDesign  } from '@expo/vector-icons'; 

import {
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../helpers/colors';
interface CreateTaskProps{
  handleSubmit: (task: string) => void
}
export default function CreateTask({handleSubmit}: CreateTaskProps){
  const [task, setTask] = useState<string>('');
  return(
    <KeyboardAvoidingView>
      <View style={styles.formContainer}>
        <TextInput 
          value={task} 
          placeholder="Message..."
          placeholderTextColor={colors.white}
          style={styles.form}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={()=>handleSubmit(task)}>
          <AntDesign name="pluscircle" size={24} color={colors.green}/>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  formContainer:{
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: StatusBar.currentHeight ?? 20,
  },
  form:{
    flex: 1, 
    backgroundColor: colors.light_purple,
    color: colors.white,
    padding: 5,
    borderRadius: 5,
    marginRight: 20,
    borderColor: colors.white,
    borderWidth: 1,
    fontSize: 18,
  }
});