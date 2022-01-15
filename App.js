import { StyleSheet, View } from 'react-native';
import Search from './Components/Search'


export default function App() {
  // const [liste, setListe] = useState();
  return (
    <View style={styles.container}>
      <Search/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding:5,
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start'
  },
});
