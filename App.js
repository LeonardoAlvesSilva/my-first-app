import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from'react-native';


export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>

        <TextInput style={styles.input} placeholder='Entrar com usuário'/>
        <TextInput style={styles.input} secureTextEntry= {true} placeholder='Entrar com senha'/>

        <TouchableOpacity style={styles.bttn}>
          <Text style={styles.bttntext}>
            >>  
          </Text>
        </TouchableOpacity>

      </View>
    )
    }
  }

  const styles = StyleSheet.create({
    container: {
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
      
    },
    input:{
      marginTop: 10 ,
      paddingLeft: 70,
      backgroundColor:'#444',
      width: 250,
      borderRadius: 10
    },
    bttn:{
      borderRadius :100,
      backgroundColor: '#444',
      marginTop: 70,
      width: 50,
      height: 50

    },
    bttntext:{
      fontSize: 35,
      color: '#fff',
      marginLeft: 7

    }
  })

