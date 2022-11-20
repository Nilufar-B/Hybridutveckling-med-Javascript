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

/* Set labPart variable to 1, to view this part of the lab */
export default function WhyNeedState() {
 // let age = 10;
const [age, setAge] = useState(10);


  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.headerText}>Why we need State</Text>
      <View style={styles.section}>
        <Text style={styles.explanationText}>
          {`Notice how in the block below, you can see the age is 10 initially.
            \nNow try pressing the button underneath it to set it to 20.
            \nBut the screen still shows the age as 10! (You'll notice the console logs the update to 20 though) 
            `}
        </Text>
      </View>
      <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
        <Text style={styles.bodyText}>This is my age: {age}</Text>
        <Button
          title="Press me to update age to 20"
          onPress={() => {
           // age = 20;
          setAge((prevAge) => prevAge + 10);
           console.log("age variable is now set to: " + age);
         }}
       // onPress = {() => setAge(age+10)}
        />
        <Text></Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bodyText}>
          <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
          Modify the code so that the age updates to 20 when you press the
          button as you'd expect.
          {"\n\n"}
          Hint: you'll need to use a state variable to store the age, instead of
          a regular variable.
        </Text>
      </View>
    </SafeAreaView>
  );
}
