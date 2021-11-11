import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

export function Home(){
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Welcome Fabio</Text>
          <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    fontSize: 18,
    color: '#fff',
    padding: 15,
    marginTop: 30,
    borderRadius: 5

  }
})