import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ActivityIndicator, MD2Colors, Snackbar, TextInput, Button } from 'react-native-paper';
import {useState} from 'react';



const App = () => {
  const theme = useTheme();

  const [send,setSend] = useState(false);
  const [showSnackBar, SetShowSnackBar] = useState(false);
  const [text,setText]= useState();
  const [subject,setSubject]= useState();

  const onToggleSnackBar = () => SetShowSnackBar(!showSnackBar);

  const onDismissSnackBar = () => {
    SetShowSnackBar(false)
    setSend(false);
  };




  const container_main = {
    flex: 1,
    backgroundColor: theme.colors.red,
    justifyContent: 'center',  
    alignItems: 'center', 
    marginLeft:10,
    marginRight:10    
  };

  return (
    
    <View style={container_main}>

        
      <Text style={styles.main_txt}>Email App</Text>
      <TextInput
      style={{width:'100%'}}
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />

<TextInput
      style={{width:'100%',marginTop:20}}
      label="Subject"
      value={subject}
      onChangeText={subject => setSubject(subject)}
    />


    <TextInput multiline={true}  style={{width:'100%',height:100,marginTop:20}} contentStyle={{paddingTop: 30}} label="Message"/>
     
<View style={styles.button}>

<Button 
style={{display: send ? 'none' : 'flex',width:'100%'}}
              name="send"
              mode='contained-tonal'
              textAlign='center'
              onPress={() => {
                setSend(true);
                onToggleSnackBar();
              }
              }
              >
              Send Email
              
             
            </Button>

           
</View>
<ActivityIndicator animating={send} color={MD2Colors.primary} />

<Snackbar 
        visible={showSnackBar}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Done',
          onPress: () => {
            // Do something
          },
        }}>
        Email sent successfully!!
      </Snackbar>
    </View>
  )
}

export default App


//can hold static syling
const styles = StyleSheet.create({

  button:{
    width:'100%',
    alignItems:'center',
    marginTop:20
  },

  main_txt:{
    fontFamily:'Sarif',
    color:'#000',
    paddingBottom:10
  }
})