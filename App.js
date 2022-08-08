import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
// import Search from './Components/Search'
import Navigation from './Navigation/Navigation';

export default function App() {
  // const [liste, setListe] = useState();
  return (
    <View style={styles.container}>
      <Navigation />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
});
