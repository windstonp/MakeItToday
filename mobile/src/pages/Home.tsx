import React, { useState } from 'react';
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native"
import CreateTask from '../components/CrateTask';
import { DeleteTask, index, store } from '../api/TaskApi';
import { Task } from '../components/Task';
import { TaskInterface } from '../helpers/interfaces';

export default function Home(){
  const [data, setData] = useState([] as TaskInterface[]);
  const [loading, setLoading] = useState(true);

  async function getData(){
    const response = await index();
    setData(response);
    setLoading(false);
  }

  async function handleDelete(uuid: string){
    await DeleteTask(uuid);
    getData();
  }

  async function handleSubmit(text: string){
    const message = await store(text);
    setData([...data, message]);
  }

  useEffect(()=>{
    getData();
  },[]);

  if(loading){
    return <View/>;
  }
  return(
    <View style={styles.homeController}>
      <FlatList
        data={data}
        renderItem={({item})=>(<Task Task={item} handleDelete={handleDelete}/>)}
        keyExtractor={data => data.uuid}
      />
      <CreateTask handleSubmit={handleSubmit}/>
    </View>
  )
}
const styles = StyleSheet.create({
  homeController:{
    justifyContent: 'space-between',
    flex: 1
  }
});