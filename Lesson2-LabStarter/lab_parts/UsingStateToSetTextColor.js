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

/* Set labPart variable to 2, to view this part of the lab */
export default function UsingStateToSetTextColor() {
 // let textColor = "black";
 const [textColor, setTextColor] = useState('black');
 
  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.headerText}>Using State to Set Text Color</Text>

      <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
        <Text style={{ ...styles.bodyText, color: textColor }}>
          I am a text with {textColor} color
        </Text>
        <Button title="Set text color to blue" 
        onPress = {() => {
          setTextColor("blue");
        }}
        />
        <Button title="Set text color to green"
        onPress={() => {
          setTextColor("green");
        }}
        />
        <Button title="Set text color to red" 
        onPress={() => {
          setTextColor("red");
        }}
        />
        <Text></Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bodyText}>
          <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
          Modify the code so that the color of the text changes, with the 3
          buttons pressed.
          {"\n\n"}
          E.g. if you press the first button, the text that says "I am a text
          with black color" should change to a blue color. And the text should
          change to read "I am a text with blue color"
        </Text>
      </View>
    </SafeAreaView>
  );
}
