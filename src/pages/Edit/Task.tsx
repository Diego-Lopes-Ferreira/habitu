import Box from "../../components/Box";
import Text from "../../components/Text";

export default function EditChecklist({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Task [Task Name]
      </Text>
      <Text color="mainForeground" variant="bodyText">
        edit all the task things ...
      </Text>
    </Box>
  );
}
