import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput placeholder='Recherche' style={styles.textinput}/>
        <View style={styles.btn}>
            <Button title='Rechercher' onPress={() => {}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 40, 
      height: 200
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    btn:{
        marginBottom: 30,
        padding: 5
    }
})

export default Search