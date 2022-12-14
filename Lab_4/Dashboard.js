import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, 
    Text, 
    View,
    Image, 
    SafeAreaView, 
    Alert, 
    TouchableWithoutFeedback, 
    ScrollView, 
    Button, 
    ActivityIndicator, 
    TextInput, 
    ImageBackground,
    TouchableOpacity, Modal} from 'react-native';

    


   

export default function Dashboard () {
  const [name, setName] = useState("");
  const [loggIn, setLoggIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);
  const [userNameInput, setUserNameInput] = useState("");

  const stopLoadingAlert = () => {
    setIsLoading(false)
    
  }


  const loadingAlert =() => {
    setIsLoading(true)
        Alert.alert ("Unable To Load", 
        "The was en error. Please try again",
        [{
            text:'OK',
            onPress: stopLoadingAlert
         
          
        
        }]
          ) 
   }

    // const handleIconPress = () => {
    //   Alert.prompt("Name", " ",[
    //     {
    //         text: "Submit",
    //         onPress:(text) => setName(text),
        
    //     },
 
    //   ])     
    // }
  return (
    <SafeAreaView style = {styles.container}>
    
<View style={styles.header}>
        <Text style = {styles.text}> Hello, {loggIn ? name : 'Guest'}! </Text>
        <TouchableWithoutFeedback onPress={() => setModalWindow(true)}>        
     {/* <Image style = {styles.imageHeader} source={loggIn ? require ('./assets/icon2.png') : require ('./assets/icon.png')} />  */}
     {loggIn ? (
            <ImageBackground style={styles.imageHeader} source={require("./assets/profile.png")}>
              <Text style={styles.textOnIcon} > {name} </Text>
            </ImageBackground>) 
            : (
            <Image
              style={styles.imageHeader}
              source={require("./assets/icon.png")}
            />
          )}
    </TouchableWithoutFeedback>
   
    <Modal
        visible={modalWindow}
        transparent={true}
         >
       

    <View style={styles.modal}>
 
        <Text style = {{top: 185,right:70, fontSize: 20, fontWeight:'bold'}}> Name: </Text>

       

        <TextInput style = {styles.input}  
        placeholder = "Enter name"
        onChangeText={setUserNameInput}
        value={userNameInput}
         
        />
      
        <Button
              title="Submit"
              onPress={() => {
                if (userNameInput == "") {
                  setLoggIn(false);
                  setName("Guest");
                } else {
                  setLoggIn(true);
                  setName(userNameInput);
                }

                setModalWindow(false);
              }}
        />
         <TouchableOpacity onPress={() => setModalWindow(false)}>

             <Image style={{bottom:140, right: 130}} source={require ('./assets/close.png')}/>

         </TouchableOpacity>
      
        </View>
        </Modal>
       
    </View>
 

        <View>
        <Text style = {{fontSize: 28, fontWeight: 'bold'}}> Today's Highlights</Text>
    </View>
     
     <ScrollView>

        <Text  style = {styles.content}>
             <Text style={{fontWeight:'bold', fontSize: 20}}>First Article {"\n"} </Text> 
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum..</Text> 
  
        <Text style = {styles.content}> 
        <Text style={{fontWeight:'bold', fontSize: 20}}>Another Article {"\n"} </Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum,quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.. </Text>
        <Text style = {styles.content}> 
        <Text style={{fontWeight:'bold', fontSize: 20}}> Important one {"\n"}  </Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum,quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum..</Text> 

       <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
{/*      
        <Button title={buttonText} onPress={isLoading ? {buttonText} : loadingAlert}/>
       {isLoading && (<ActivityIndicator animating={setIsLoading} size = 'small' color={'grey'}/>)}  */}


<Button title={isLoading ? 'Loading...' : 'Load More'} onPress={loadingAlert}/>
       {isLoading && (<ActivityIndicator animating={setIsLoading} size = 'small' color={'grey'}/>)} 


       </View>
   
   
    
    </ScrollView>
    
     </SafeAreaView>
  
   

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
      },
  
  header: {    
    flexDirection:'row',
    width: '100%',
    height: 100, 
    backgroundColor: '#9A2BAB',
    alignItems: 'center',
  },

  text:{
  fontSize: 30,
  fontWeight:'bold',
  color: 'white',
  left:20
  },

  imageHeader:{    
  width: 80,
  height:80,
  borderRadius: 100,
  left: 140,
  },

  modal:{
    top:300,
    right: 200,
    height: 170,
    width: 300,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
    left: 60
          
  },
  textOnIcon:{
    fontStyle: "italic",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor:'white',
    width:80,
    textAlign: 'center' ,
    top: 45,
  },

  content:{
    fontSize: 18,
    backgroundColor: '#FEE2B8',
    margin:15
   
  },
  input: {
    top: 100,
    height: 30,
    margin: 100,
    borderWidth: 1,
    padding: 15,
    width:200
  },

});