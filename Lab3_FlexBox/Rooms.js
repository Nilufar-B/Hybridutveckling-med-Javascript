import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const Roomspicture = () => {

    return(
        <View  style = {styles.container}>
            
             <View  style = {styles.background}>
          <Image style = {styles.image}
                source={require('./assets/living-room.png')} />
                 <Text style = {{textAlign: 'center', marginTop: 5}}>  Living Room </Text>
            </View>
            <View style = {styles.background}>
            <Image  style = {styles.image}
                source={require('./assets/bed.png')} />
               <Text style = {{textAlign: 'center',marginTop: 5}}> Bedroom </Text> 
            </View>
            <View style = {styles.background}>
            <Image  style = {styles.image}
                source={require('./assets/kitchen.png')} />
               <Text style = {{textAlign: 'center',marginTop: 5}}> Kitchen </Text> 
            </View>

        </View>
    )
}

export default function Rooms() {
    return(

        <View>
         <Text style = {{fontSize: 28, fontWeight: 'bold', paddingTop: 10, paddingLeft: 20}}>Rooms</Text>
          <Roomspicture />


        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    background: {
        width:110,
        height:105,
        backgroundColor: '#16AEB3',
        justifyContent:'center',
       margin:20
    },
    image:{
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        width: 65,
        height: 65,
       
    }

})