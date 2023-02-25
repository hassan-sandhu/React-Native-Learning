import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

     <View style={{flex:0.3, backgroundColor:"black", justifyContent:"center",alignItems:"center"}}>
     <Image source={require('./download.jpg')} 
     style={{width:150, height:200, borderRadius:500}}/>
     </View>
     <View style={{flex:0.6, backgroundColor:"yellow"}}>
      <TextInput style={{backgroundColor:"white", height:50, width:300, marginTop:30 , marginLeft:10}}>

      </TextInput>
      <TextInput style={{backgroundColor:"white", height:50, width:300, marginTop:20 , marginLeft:10}}>

      </TextInput>
     </View>
     <View style={{flex:0.2, backgroundColor:"purple",justifyContent:'center',alignItems:'center'  }}>
     <Button 
            title='login'
            color="blue"
            style={{width:100}}
            
            />
          
     </View>
           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize:20
  }
});
