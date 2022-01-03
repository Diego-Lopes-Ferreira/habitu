import Box from "../../components/Box";
import Text from "../../components/Text";
import ButtonPrimaryCallback from "../../components/ButtonPrimaryCallback";
import { useHeaderTitle } from "../../contexts/HeaderTitle";

export default function Today({ navigation }: any) {
  const { setTitle } = useHeaderTitle();
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Text color="mainForeground" variant="header">
        Today
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Shows every open task, every open checklist and all current habits
      </Text>
      <Text color="mainForeground" variant="bodyText">
        Plus Button: Create Habit, Create task, Open Checklist
      </Text>
      <ButtonPrimaryCallback
        text="Create new Thing"
        iconName="plus"
        callback={() => navigation.navigate("CreateType")}
      />
      <ButtonPrimaryCallback
        text="Test Button :)"
        iconName="code"
        callback={() => setTitle("Hello " + Math.random().toString().slice(2, 8))}
      />
    </Box>
  );
}
