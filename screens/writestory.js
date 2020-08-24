
import React from 'react';
import { StyleSheet, Text, View ,KeyboardAvoidingView,TextInput} from 'react-native';

export default class Write extends React.Component{
  constructor(){
    super();
    this.state={
      storywritten:"",
    }
  }  
  render(){
     
  return (
    <KeyboardAvoidingView style={styles.container}  behaviour = "padding" enabled>
    <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
      
      
    <Text> Write a story </Text>
    </View>
    <View style={styles.inputview}>
          <TextInput style={styles.inputbox} placeholder="Once upon a time........." onChangeText={text=>this.setState({
            storywritten:text
          })}
          value = {this.state.storywritten}/>
    
  </View>
  </KeyboardAvoidingView>
  );}
}

const styles = StyleSheet.create({ 
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  inputbox:{width:205,height:50,fontSize:18,marginBottom:300},
});