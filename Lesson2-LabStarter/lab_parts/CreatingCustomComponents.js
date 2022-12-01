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

   const CartItem = ({product, counter, itemCounter}) => {

   return(
    
    <View style = {{backgroundColor:'yellow', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    marginTop: 10,}}>
    
    <Text>{product}</Text>
      <Button title="-" onPress = {() => 
        itemCounter((currCounter) =>{
          let newCounter = {
            ...currCounter, [product] : currCounter[product] -1};
            return newCounter;
          }
          
        //  if(prevCounter == 0){
        //    return counter;
        //  } else{
         //   return (prevCounter -1);
         // }
       // } )
   )}
    />
  <Text>{counter}</Text>
      <Button title="+" onPress ={() => 
        itemCounter((currCounter) =>{
          let newCounter = {
            ...currCounter, [product] : currCounter[product] +1};
            return newCounter;
          }
   )}/>
    </View>
 
  );
} ;  

 
export default function CreatingCustomComponents() {
 

  const [counter, setCounter] = useState({
    Milk:0, Eggs:0, Bread: 0
  })

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>
        {/* TODO: ADD THE CART ITEMS BELOW*/}
          <CartItem product= 'Milk'  counter={counter.Milk} itemCounter={setCounter}/>
          <CartItem product='Bread' counter={counter.Bread} itemCounter={setCounter}/>
          <CartItem product='Eggs' counter={counter.Eggs} itemCounter={setCounter}/>
       
        </View>

        <Text>You have ({counter.Milk})Milk, ({counter.Bread})Bread, ({counter.Eggs})Eggs in your cart.</Text>
        <Text>Total items in your cart: {counter.Milk + counter.Bread + counter.Eggs}</Text>
        
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
