import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  TextComponent,
} from "react-native";
import { styles } from "../styles";

   const CartItemMilk = ({product, counterMilk, setCounterMilk}) => {

   return(
    
    <View style = {{backgroundColor:'yellow', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    marginTop: 10,}}>
      <Text>{product}</Text>
     
      <Button title="-" onPress = {() => {
        setCounterMilk((prevCounterMilk) =>{
          if(prevCounterMilk == 0){
            return counterMilk;
          } else{
            return (prevCounterMilk -1);
          }
        } )
      }}/>
  <Text>{counterMilk}</Text>
      <Button title="+" onPress ={() => {
        setCounterMilk((prevCounterMilk) => prevCounterMilk +1)
      }}/>
    </View>
 
  );
} ;  

const CartItemBread = ({product, counterBread, setCounterBread}) =>{
  return(
    <View style = {{backgroundColor:'yellow', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    marginTop: 10,}}>

<Text>{product}</Text>
     
     <Button title="-" onPress = {() => {
       setCounterBread((prevCounterBread) =>{
         if(prevCounterBread == 0){
           return counterBread;
         } else{
           return (prevCounterBread -1);
         }
       } )
     }}/>
 <Text>{counterBread}</Text>
     <Button title="+" onPress ={() => {
       setCounterBread((prevCounterBread) => prevCounterBread +1)
     }}/>

    </View>

  );
};

const CartItemEggs = ({product, counterEggs, setCounterEggs}) =>{
  return(
    <View style = {{backgroundColor:'yellow', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    marginTop: 10,}}>

      <Text>{product}</Text>
      <Button title="-" onPress = {() => {
       setCounterEggs((prevCounterEggs) =>{
         if(prevCounterEggs == 0){
           return counterEggs;
         } else{
           return (prevCounterEggs -1);
         }
       } )
     }}/>
 <Text>{counterEggs}</Text>
     <Button title="+" onPress ={() => {
       setCounterEggs((prevCounterEggs) => prevCounterEggs +1)
     }}/>

    </View>

  );
};
export default function CreatingCustomComponents() {
  const [counterMilk, setCounterMilk] = useState(0);
  const [counterBread, setCounterBread] = useState(0);
  const [counterEggs, setCounterEggs] = useState(0);

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>
        {/* TODO: ADD THE CART ITEMS BELOW*/}
          <CartItemMilk product='Milk'  counterMilk={counterMilk} setCounterMilk ={setCounterMilk}/>
          <CartItemBread product='Bread' counterBread={counterBread} setCounterBread = {setCounterBread}/>
          <CartItemEggs product='Eggs' counterEggs={counterEggs} setCounterEggs = {setCounterEggs}/>
       
        </View>

        <Text>You have ({counterMilk})Milk, ({counterBread})Bread, ({counterEggs})Eggs in your cart.</Text>
        <Text>Total items in your cart: {counterMilk + counterBread + counterEggs}</Text>
        
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
