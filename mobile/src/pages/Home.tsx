import React, { useState } from 'react';
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native"
import { Task } from '../components/Task';

export default function Home(){
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    async function getData(){
      const response = await fetch('http://192.168.25.108:3333/');
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    getData();
  },[]);
  if(loading){
    return <View/>;
  }
  return(
    <View>
      <FlatList
        data={data}
        renderItem={({item})=>(<Task title={item.title}/>)}
        keyExtractor={data => data.uuid}
      />
    </View>
  )
}
const styles = StyleSheet.create({

});