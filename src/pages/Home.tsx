import Box from '../components/Box';
import Text from '../components/Text';

export default function Home() {
  return (
    <Box
      flex={1}
      alignItems="center"
      backgroundColor="mainBackground">
      <Text
        color="mainForeground"
        variant="header">Home Page yay</Text>
    </Box>
  );
}
