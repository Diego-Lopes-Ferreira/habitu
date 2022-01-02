import Box from "../../components/Box";
import Text from "../../components/Text";

export default function Tasks({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Tasks
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Show every task; Button for showing archived; Goes to the edit task
      </Text>
    </Box>
  );
}
