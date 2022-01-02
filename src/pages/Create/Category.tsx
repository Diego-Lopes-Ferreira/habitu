import Box from "../../components/Box";
import Text from "../../components/Text";
import ButtonPrimaryCallback from "../../components/ButtonPrimaryCallback";

export default function CreateSelectCategory({ navigation }: any) {
  function handleSelect(category: string) {
    // TODO(Diego): set the context with category
    navigation.navigate("CreateEditHabitHows");
  }
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Select the category
      </Text>
      <ButtonPrimaryCallback
        text="Go to the next page ..."
        iconName="chrome"
        callback={() => handleSelect('categoryyyyy')}
      />
    </Box>
  );
}
