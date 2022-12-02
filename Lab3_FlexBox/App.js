import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Rooms from './Rooms';
import Devices from './Devices';


export default function App() {

 
  return (
   <View style = {styles.container}>
    <View style = {{flexDirection: 'row'}}>
    <Image  style = {styles.image}
                source={require('./assets/house.png')} />
 <Text style = {styles.text} >
                 SmartHome</Text>

    </View> 
   
   <Rooms />
   <Devices />
 
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  image: {
    width:80,
    height:80,
    marginTop:40,
    marginLeft: 20,

  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F847D', 
    marginLeft: 10, 
    marginTop:70
  }
});
