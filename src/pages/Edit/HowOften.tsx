import Box from "../../components/Box";
import Text from "../../components/Text";
import ButtonPrimaryCallback from "../../components/ButtonPrimaryCallback";

export default function CreateType({ navigation }: any) {
  function handleSelect() {
    // TODO: e
  }

  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Select how often
      </Text>
      <ButtonPrimaryCallback
        text="This is a mess"
        iconName="circle"
        callback={() => handleSelect()}
      />
    </Box>
  );
}
