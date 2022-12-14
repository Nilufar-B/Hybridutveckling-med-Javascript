import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';





const DeviceComponent = ({device, counter, newCounter}) => {
    const [color, setColor] = useState("red");
    return(
     
        <View style = {styles.elements}>
          <View style = {{width: 20, height: 20, backgroundColor: color}}></View>
              <Text style = {styles.text}> {device} </Text>
              <View style = {styles.buttonOnOff}>
              <Button title='On' 
              onPress={() => {setColor('green');
            if (color !== 'green'){
                newCounter((prevCounter)=> {
                   let totalCounter = {...prevCounter,[device] : prevCounter[device] +1}
              return totalCounter;
            })}
            }} />
              <Button title='Off' 
              onPress={() => {setColor ('red')
              if(color !== 'red'){
                newCounter((prevCounter)=> {
                    let totalCounter = {...prevCounter,[device] : prevCounter[device] -1}
               return totalCounter;
                 })
              }}}/>
              </View>
              
              
         </View>

    )
}

export default function Devices() {
   const [counter, setCounter] = useState({
    'Living Room Lamp':0,
    Heater:0,
    TV:0
   });

    return(
        <View style = {styles.container}>
       
             <Text style = {{fontSize: 28, fontWeight: 'bold', marginTop: 20}}>Devices</Text>
           <DeviceComponent device = 'Living Room Lamp' counter={counter['Living Room Lamp']} newCounter={setCounter} />
           <DeviceComponent device = 'Heater' counter={counter.Heater} newCounter={setCounter}/>
           <DeviceComponent device = 'TV' counter={counter.TV} newCounter={setCounter}/>

           <Text style={{fontWeight: 'bold'}}> Total Devices On: {counter['Living Room Lamp'] + counter.Heater + counter.TV}</Text>
       
        </View>

      
    )

}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        paddingTop: 10,
        paddingLeft:20,
        paddingRight: 20

    },
     elements:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#F4F184',
    marginTop: 10,
    paddingLeft:20,
    justifyContent:'space-between' ,
    textAlign: 'left'
    },
    text: {
  fontSize: 20,
  padding: 30,

  
    
   },
   buttonOnOff: {
   marginRight: 10,
   backgroundColor: '#fff',

   },
   button: {
    width: 20, 
    height: 20, 
    backgroundColor: 'red'
   }

})