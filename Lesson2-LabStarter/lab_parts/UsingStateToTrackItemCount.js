import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../styles";

/* Set labPart variable to 3, to view this part of the lab */
export default function UsingStateToTrackItemCount() {
  const[item, setItem] = useState(0);
  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.headerText}>Using State to Track Item Count</Text>

      <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
        <Text style={{ fontWeight: "bold" }}>Shopping Cart</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button title="-" 
                onPress={() => {
                  setItem((prevItem) => {
                    if(prevItem == 0){
                      return (item);
                    }else {
                      return (prevItem - 1);
                    }
                  })
                }}/>
          <Text style={{ ...styles.bodyText }}>{item}</Text>
          <Button title="+" 
            onPress={() => {
              setItem((prevItem) => prevItem +1);
            }}/>
        </View>
        <Text>You have {item} items in your cart</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.bodyText}>
          <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
          Modify the code so that X displays a number instead that keeps track
          of the amount. And the plus and minus buttons add or reduce the amount
          respectively.
          {"\n\n"}
          Initially the value should be 0. And then any time you press the plus
          button, it should increment by 1. And any time you press the minus
          button on the left it should decrement the item count by 1.
        </Text>
      </View>
    </SafeAreaView>
  );
}
