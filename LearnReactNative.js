import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Data from "./Data.json";
const LearnReactNative = () => {
  const myAlert = () => {
    Alert.alert("Alert Title", "This is Alert", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later"),
      },
      {
        text: "cancel",
        onPress: () => console.log("Cancel"),
      },
      {
        text: "ok",
        onPress: () => console.log("Ok"),
      },
    ]);
  };
  return (
    <View>
      <Text style={{ marginTop: 30 }}>Hello React Native</Text>
      {/* learn React Native sytle first method is upper case  that is inline and second is below we use there diffrenent component */}
      <Text style={styles.main}>Hello React Native</Text>
      {/* if we want multiple style object in one thing ex below */}
      <Text style={[styles.main, styles.main2]}>Hello React Native</Text>
      <Button
        title="click me"
        onPress={() => {
          console.log("clicked");
        }}
      />
      <Button
        title="click me"
        onPress={() => {
          Alert.alert("clicked");
        }}
      />
      <Button title="click me" onPress={myAlert} />

      <ActivityIndicator size="large" />
      {/* if we use map use scroll view because withoud this only display data not more than this  */}
      {/* <ScrollView >
        {Data.map((item)=><Text style={{padding:25}} >{item.name}</Text>)}
      </ScrollView> */}
      {/* if we have more data we dont use map method becuase it slow down the performance instead we use flat list */}
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <Text key={item.id} style={{ padding: 10 }}>
            {item.city}
          </Text>
        )}
        onRefresh={() => {
          console.log("Data Refreshed");
        }}
        refreshing={false}
      />
      {/* touchable */}
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log("touch")}>
            <Text key={item.id} style={{ padding: 5 }}>
              {item.city}
            </Text>
          </TouchableOpacity>
        )}
        onRefresh={() => {
          console.log("Data Refreshed");
        }}
        refreshing={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    color: "blue",
  },
  main2: {
    backgroundColor: "yellow",
  },
});
export default LearnReactNative;
