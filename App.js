import { StyleSheet, Text, View, FlatList  } from 'react-native';
import liste from './Data/liste.json'
import Search from './Components/Search'
import Listing from './Components/Listing'


export default function App() {
  return (
    <View style={styles.container}>
      <Search/>
      <Listing liste={liste}/>
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
