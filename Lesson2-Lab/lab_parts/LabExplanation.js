import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../styles";

/* Set labPart variable to 0, to view this part of the lab */
export default function LabExplanation() {
  return (
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.headerText}>Lesson 2 Lab</Text>
        <Text style={{ paddingTop: 10 }}>
          This lab will help understand how to work with state and components.
        </Text>

        <View style={{ marginTop: 50 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
            How to Complete the Lab
          </Text>
          <Text>
            There are multiple exercises in this lab to help you become more
            familiar with what we covered in the lesson today. You'll notice
            that in the App.js file of this starter code, there are multiple
            functions defined. Each function returns the screen for a different
            part of the lab. {"\n\n"}
            You'll notice that there's a "labPart" variable that you can assign
            a number to. Depending on which part of the lab you're currently
            working on, set that variable to the relevant number. There will be
            a description of what you need to do in each part.{"\n"}
            Each part will mention what number to use on the comment above that
            part. {"\n"}
            E.g. if you're doing part 3 of the lab, you'll need to set labPart =
            3. And then save to reload the device you're running the code on.
            {"\n"}
            Make whatever changes to the code to each part to complete the task
            in that section. The final version you have should have the code
            that completes the task.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   content: {
//     margin: 50,
//   },
//   headerText: {
//     fontWeight: "bold",
//     fontSize: 30,
//     marginVertical: 20,
//   },
//   bodyText: {
//     fontSize: 16,
//     padding: 10,
//   },
//   section: {
//     margin: 10,
//     padding: 15,
//   },
//   explanationText: {
//     fontSize: 15,
//   },
// });
