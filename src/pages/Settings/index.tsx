import Box from "../../components/Box";
import Text from "../../components/Text";

export default function Settings({ navigation }: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Today
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Oh look, settings ...
      </Text>
    </Box>
  );
}
