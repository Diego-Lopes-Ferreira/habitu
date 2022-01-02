import Constants from "expo-constants";
import { View } from "react-native";
import gruvbox from "../theme/colors";

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: gruvbox.primary.background,
        paddingTop: Constants.statusBarHeight,
      }}
    ></View>
  );
}
