import Box from "../../components/Box";
import Text from "../../components/Text";

export default function Habits({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Habits
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Show every habit; Button for showing archived; Goes to the edit habit
      </Text>
    </Box>
  );
}
