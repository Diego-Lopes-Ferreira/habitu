import Box from "../../components/Box";
import Text from "../../components/Text";

export default function Checklists({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Checklists
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Show every checklist; Goes to the edit checklist
      </Text>
    </Box>
  );
}
