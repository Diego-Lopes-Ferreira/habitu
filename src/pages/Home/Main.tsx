import { TouchableHighlight } from "react-native";
import Box from "../../components/Box";
import Icon from "../../components/Icon";
import Text from "../../components/Text";

export default function Home({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Home Page Hurray!!!
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Shows every open task, every open checklist and all current habits
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Plus Button: Create Habit, Create task, Open Checklist
      </Text>
      <TouchableHighlight onPress={() => navigation.navigate("Settings")}>
        <Text color={"mainForeground"}>eeeeee</Text>
      </TouchableHighlight>
      <Icon name="home" />
    </Box>
  );
}
