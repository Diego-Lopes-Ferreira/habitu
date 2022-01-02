import { TouchableOpacity } from "react-native";
import Box from "../../components/Box";
import Text from "../../components/Text";
import Icon from "../../components/Icon";
import ButtonPrimaryCallback from "../../components/ButtonPrimaryCallback";

export default function Today({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Today
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Shows every open task, every open checklist and all current habits
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Plus Button: Create Habit, Create task, Open Checklist
      </Text>
      <ButtonPrimaryCallback
        text="Create new Thing"
        iconName="plus"
        callback={() => navigation.navigate("CreateType")}
      />
    </Box>
  );
}
