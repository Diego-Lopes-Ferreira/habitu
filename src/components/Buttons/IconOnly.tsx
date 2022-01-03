import { StyleSheet, TouchableOpacity } from "react-native";
import Box from "../Box";
import Icon, { IconProps } from "../Icon";
import gruvbox from "../../theme/colors";

interface BtnProps {
  iconName?: IconProps["name"];
  iconSize?: number;
  callback(): void;
}

export default function ButtonIconOnly({
  iconName,
  iconSize,
  callback,
}: BtnProps) {
  if (!iconSize) {
    iconSize = 16;
  }
  return (
    <TouchableOpacity style={styles.wrapper} onPress={callback}>
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        backgroundColor="mainForeground"
        marginVertical="m"
        paddingHorizontal="s"
        paddingVertical="s"
        borderRadius={8}
      >
        <Icon
          name={iconName}
          color={gruvbox.primary.background}
          size={iconSize}
        />
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 0,
    margin: 0,
  },
});
