import Box from "../../components/Box";
import Text from "../../components/Text";
import ButtonPrimaryCallback from "../../components/ButtonPrimaryCallback";

export default function CreateType({ navigation }: any) {
  function handleSelect(type: "Habit" | "Task" | "Checklist") {
    // TODO(Diego): set the context
    if (type === "Habit") {
      navigation.navigate("CreateSelectCategory");
    } else {
      navigation.navigate(`CreateEdit${type}`);
    }
  }

  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        What are you creating?
      </Text>
      <ButtonPrimaryCallback
        text="habit"
        iconName="sun"
        callback={() => handleSelect("Habit")}
      />
      <ButtonPrimaryCallback
        text="Task"
        iconName="check"
        callback={() => handleSelect("Task")}
      />
      <ButtonPrimaryCallback
        text="Checklist"
        iconName="check-square"
        callback={() => handleSelect("Checklist")}
      />
    </Box>
  );
}
