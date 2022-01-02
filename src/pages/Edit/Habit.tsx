import Box from "../../components/Box";
import Text from "../../components/Text";
import ButtonPrimaryCallback from "../../components/ButtonPrimaryCallback";

export default function EditHabit({ navigation }: any) {
  function handleCreate() {
    // TODO(Diego): set the context
    // TODO(Diego): reset navigation to Home
  }
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Habit [Habit Name]
      </Text>
      <Text color="mainForeground" variant="bodyText">
        edit all the habit things ...
      </Text>
      <ButtonPrimaryCallback
        text="Create"
        iconName="plus"
        callback={handleCreate}
      />
    </Box>
  );
}
