import { StyleSheet, View } from "react-native";
import StartScreen from "./screens/Start/StartScreen";
import Onboarding2Screen from "./screens/Onboarding/Onboarding2Screen";
import Onboarding1Screen from "./screens/Onboarding/Onboarding1Screen";
import Onboarding3Screen from "./screens/Onboarding/Onboarding3Screen";

export default function App() {
  return (
    <View style={styles.main}>
      <Onboarding3Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
});
