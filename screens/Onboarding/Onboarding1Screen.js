import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PlaceholderImage = require("../../assets/images/flavorly-on1.png");
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Onboarding1Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>{`Identify \n Materials Easy`}</Text>
        <Text style={styles.subquote}>{`Quickly import all the ingredients \n in seconds \n Don't have to wait long!`}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => alert("You pressed a button 1")}
        >
          <Text style={styles.buttonLabel}>Next</Text>
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => alert("You pressed a button 2")}
        >
          <Text style={styles.buttonLabel2}>Or go to the Home now!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const IMAGE_WIDTH = windowWidth / 2;
const MARGIN_TF = windowHeight / 10;
const MARGIN_TB = windowHeight / 100;
const PADDING_F = 24;
const PADDING_B = 12;
const BUTTON_L = windowWidth / 1.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DF7861",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: PADDING_F,
    paddingRight: PADDING_F,
  },
  imageContainer: {
    flex: 1.5,
    marginTop: MARGIN_TF,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 90,
    borderColor: "#DF7861",
    borderWidth: 1,
    backgroundColor: "#DF7861",
  },
  quoteContainer: {
    flex: 3,
    marginTop: MARGIN_TB,
    justifyContent: "center",
    alignItems: "center",
  },
  quote: {
    fontSize: 30,
    fontWeight: 700,
    color: "#fff",
    textAlign: "center",
  },
  subquote: {
    marginTop: (MARGIN_TB + MARGIN_TB),
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    width: BUTTON_L,
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: PADDING_B,
    paddingRight: PADDING_B,
    paddingTop: PADDING_B,
    paddingBottom: PADDING_B,
    borderRadius: 16,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 700,
    color: "#000",
  },
  button2: {
    marginTop: MARGIN_TB,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel2: {
    fontSize: 15,
    fontWeight: 700,
    color: "#fff",
  },
});
