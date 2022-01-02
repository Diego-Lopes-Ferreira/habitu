import Box from "../../components/Box";
import Text from "../../components/Text";

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
    </Box>
  );
}
