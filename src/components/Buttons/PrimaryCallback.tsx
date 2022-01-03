import { TouchableOpacity } from "react-native";
import Box from "../Box";
import Text from "../Text";
import Icon, { IconProps } from "../Icon";
import gruvbox from "../../theme/colors";

interface ButtonPrimaryCallbackProps {
  text: string,
  iconName: IconProps["name"],
  callback(): void,
}

export default function ButtonPrimaryCallback({ text, iconName, callback }: ButtonPrimaryCallbackProps) {
  return (
    <TouchableOpacity
      style={{ width: "80%" }}
      onPress={callback}
    >
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        backgroundColor="mainForeground"
        marginVertical="m"
        paddingHorizontal="m"
        paddingVertical="s"
        borderRadius={8}
      >
        <Icon name={iconName} color={gruvbox.primary.background} />
        <Text color="mainBackground" variant="innerComponentText">
          {text}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
