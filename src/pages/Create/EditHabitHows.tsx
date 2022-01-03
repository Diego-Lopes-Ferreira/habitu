import Box from "../../components/Box";
import Text from "../../components/Text";
import ButtonPrimaryCallback from "../../components/Buttons/PrimaryCallback";

export default function EditHabitHows({ navigation }: any) {
  function handleSelect(category: "yes_no" | "number" | "checklist") {
    // TODO(Diego): set the context
    navigation.navigate("CreateEdithabits");
    console.log(category);
  }
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        How do you want to evaluate your progress?
      </Text>
      <ButtonPrimaryCallback
        text="With a Yes or No"
        iconName="circle"
        callback={() => handleSelect("yes_no")}
      />
      <ButtonPrimaryCallback
        text="With a numeric value"
        iconName="circle"
        callback={() => handleSelect("number")}
      />
      <ButtonPrimaryCallback
        text="With a Checklist"
        iconName="circle"
        callback={() => handleSelect("checklist")}
      />
    </Box>
  );
}
