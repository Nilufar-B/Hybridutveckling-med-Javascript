import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../styles";

/* TODO: DEFINE THE CART ITEM COMPONENT HERE */

/* Set labPart variable to 5, to view this part of the lab */
export default function CreatingCustomComponents() {
  const[milk, setMilk] = useState(0);
  const [bread, setBread] = useState(0);
  const [eggs, setEggs] = useState(0);

  const total = 0;
  
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>
          <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:"yellow"
          }}
        ><Text> Milk </Text>
          <Button title="-" 
          onPress={() => {
            setMilk((prevMilk) => {
              if(prevMilk == 0){
                return (milk);
              }else {
                return (prevMilk - 1);
              }
            })
          }}
          />
          <Text style={{ ...styles.bodyText }}>  {milk} </Text>
          <Button title="+"
          onPress={() => {
          setMilk((prevMilk) => prevMilk +1);
        }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
            marginTop: 10
          }}
        >
          <Text> Bread </Text>
          <Button title="-" 
          onPress={() => {
            setBread((prevBread) => {
              if(prevBread == 0){
                return (bread);
              }else {
                return (prevBread - 1);
              }
            })
          }}
          />
          <Text style={{ ...styles.bodyText }}>  {bread} </Text>
          <Button title="+"
          onPress={() => {
          setBread((prevBread) => prevBread +1);
        }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow", marginTop:10
          }}
        >
          <Text> Eggs </Text>
          <Button title="-" 
          onPress={() => {
            setEggs((prevEggs) => {
              if(prevEggs == 0){
                return (eggs);
              }else {
                return (prevEggs - 1);
              }
            })
          }}
          />
          <Text style={{ ...styles.bodyText }}>  {eggs} </Text>
          <Button title="+"
          onPress={() => {
          setEggs((prevEggs) => prevEggs +1);
        }}
          />
        </View>
        </View>
        <Text>You have ({milk})Milk, ({bread})Bread, ({eggs})Eggs in your cart</Text>
        <Text>Total items in your cart : {milk + bread + eggs}.</Text>
      
          
        
     
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
