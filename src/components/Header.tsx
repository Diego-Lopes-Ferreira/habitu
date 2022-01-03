import Constants from "expo-constants";
import { useHeaderTitle } from "../contexts/HeaderTitle";
import gruvbox from "../theme/colors";
import { View } from "react-native";
import Text from './Text'

export default function Header() {
  const { title } = useHeaderTitle();
  return (
    <View
      style={{
        backgroundColor: gruvbox.primary.background,
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <Text color="mainForeground">{title}</Text>
    </View>
  );
}
