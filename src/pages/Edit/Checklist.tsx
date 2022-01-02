import Box from "../../components/Box";
import Text from "../../components/Text";

export default function EditTask({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Checklist [Checklist Name]
      </Text>
      <Text color="mainForeground" variant="bodyText">
        edit all the checklist things ...
      </Text>
    </Box>
  );
}
