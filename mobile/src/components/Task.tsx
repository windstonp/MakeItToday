import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Entypo, AntDesign, Foundation, Feather } from '@expo/vector-icons'; 
import { colors } from '../helpers/colors';
import { TaskProps, TaskInterface } from '../helpers/interfaces';
import { update } from '../api/TaskApi';


export function Task({Task, handleDelete}: TaskProps){
  const [isShowing, setIsShowing] = useState<Boolean>(false);
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [title, setTitle] = useState<string>(Task.title);
  const [NewItem, setNewItem] = useState<TaskInterface>(Task);
  const [message, setMessage] = useState<string>(Task.message ?? '');

  function toggleShowDescription(){
    setIsShowing(!isShowing);
  }
  function handleEdit(){
    setIsShowing(true);
    setIsEditing(true);
  }
  function cancelEdit(){
    setIsEditing(false);
    setMessage(NewItem.message ?? '');
    setTitle(NewItem.title);
  }
  async function handleSubmitEditForm(uuid: string, title: string, message?: string){
    if(title){
      const data: TaskInterface = await update(uuid,title, message);
      setMessage(data.message ?? '');
      setTitle(data.title);
      setNewItem(data);
      setIsEditing(false);
    }
  }
  return(
    <View  style={styles.MessageContainer}>
      <View style={[styles.cardMessage, (isEditing) ? styles.editingHeader : []]}>
        <Entypo name="new" size={32} color={colors.white} style={styles.icon}/>
        {(!isEditing) ? (
            <Text numberOfLines={1} style={styles.header}>
              {title}
            </Text>
        ): (
          <TextInput 
            value={title}
            placeholderTextColor={colors.white}
            style={[styles.header, styles.titleForm]}
            onChangeText={setTitle}
          />
        )}
      </View>
      {(message)  ? (
          <View style={(isShowing) ? styles.showDescription : styles.hideDescription}>
            {(!isEditing) ? (            
              <Text numberOfLines={3} style={styles.messageDescription}>
                {message}
              </Text>
            ) : (
              <TextInput 
                value={message}
                placeholder="Message..."
                placeholderTextColor={colors.white}
                style={[styles.header, styles.descriptionForm]}
                onChangeText={setMessage}
                multiline={true}
                numberOfLines={3}
              />
            )}
          </View>
      ) : (
        <View style={(isShowing) ? styles.showDescription : styles.hideDescription}>
          {(!isEditing) ? (            
            <Text numberOfLines={3} style={styles.messageDescription}>
              Edit this Task to add a description.
            </Text>
          ) : (
            <TextInput 
              value={message}
              placeholder="Message..."
              placeholderTextColor={colors.white}
              style={[styles.header, styles.descriptionForm]}
              onChangeText={setMessage}
              multiline={true}
              numberOfLines={3}
            />
          )}
        </View>
      )}

      <View style={styles.buttonContainer}>
        {(!isEditing) &&
          <TouchableOpacity activeOpacity={0.6} onPress={()=>{handleDelete(Task.uuid)}}>
            <Foundation name="trash" size={24} color={colors.white} />
          </TouchableOpacity>
        }
        <TouchableOpacity activeOpacity={0.6} onPress={toggleShowDescription}>
          <Feather name={(isShowing) ? "chevrons-up" : "chevrons-down"} size={18} color={colors.white}  />
        </TouchableOpacity>
        {(!isEditing) &&
          <TouchableOpacity activeOpacity={0.6}>
            <AntDesign name="checkcircle" size={18} color={colors.white}   onPress={()=>{handleDelete(Task.uuid)}}/>
          </TouchableOpacity>
        }
      </View>
      {(!isEditing) ? (
        <TouchableOpacity style={styles.editIcon} activeOpacity={0.6} onPress={handleEdit}>
          <Feather name="edit" size={18} color={colors.white} />
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity style={styles.confirmEdit} activeOpacity={0.6} onPress={()=>handleSubmitEditForm(Task.uuid, title, message)}>
            <Feather name="check" size={18} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelEdit} activeOpacity={0.6} onPress={cancelEdit}>
            <Feather name="x" size={18} color={colors.white} />
          </TouchableOpacity>
        </>
      )}
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
    textAlign: 'justify',
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
  },
  confirmEdit:{
    position: 'absolute',
    top: 10,
    right: 10
  },
  cancelEdit:{
    position: 'absolute',
    top: 10,
    right: 40
  },
  descriptionForm:{
    flex: 1, 
    backgroundColor: colors.light_purple,
    color: colors.white,
    padding:5,
    borderRadius: 5,
    borderColor: colors.white,
    borderWidth: 1,
    fontSize: 18,
  },
  titleForm: {
    flex: 1, 
    backgroundColor: colors.light_purple,
    color: colors.white,
    padding: 5,
    borderRadius: 5,
    borderColor: colors.white,
    borderWidth: 1,
    fontSize: 18,
    marginRight: 36,
  },
  editingHeader:{
    marginTop: 40
  }
})