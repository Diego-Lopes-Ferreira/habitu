import { TouchableHighlight } from 'react-native';
import Box from '../../components/Box';
import Text from '../../components/Text';

export default function Home({ navigation }: any) {
  return (
    <Box
      flex={1}
      alignItems="center"
      backgroundColor="mainBackground">
      <Text
        color="mainForeground"
        variant="header">Home Page Hurray!!!</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('Settings')}>
          <Text
            color={'mainForeground'}>eeeeee</Text>
      </TouchableHighlight>
    </Box>
  );
}
