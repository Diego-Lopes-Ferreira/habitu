import Constants from "expo-constants";
import { useHeaderTitle } from "../contexts/HeaderTitle";
import gruvbox from "../theme/colors";
import { View } from "react-native";
import Text from "./Text";
import ButtonIconOnly from "./Buttons/IconOnly";

import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const { title } = useHeaderTitle();
  const navigation = useNavigation();

  function handleNavigateToSettings() {
    navigation.navigate("Settings");
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View
      style={{
        backgroundColor: gruvbox.primary.background,
        paddingTop: Constants.statusBarHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <ButtonIconOnly iconName="arrow-left" callback={handleGoBack} />
      <Text color="mainForeground">{title}</Text>
      <ButtonIconOnly iconName="settings" callback={handleNavigateToSettings} />
    </View>
  );
}
