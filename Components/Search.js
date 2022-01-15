import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import Listing from './Listing'
import l from '../Data/liste.json'

class Search extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // Ici on va créer les propriétés de notre component custom Search
  //   this.state = { liste: l }

  //   // this.liste = this.props.liste
  // }
  state = { liste: l }
  render() {
    // console.log(this.state.liste)
    return (
      <View style={styles.main}>
        <View style={styles.main_container}>
          <TextInput placeholder='Recherche' style={styles.textinput} />
          <View style={styles.btn}>
              <Button title='Rechercher' onPress={() => {
                const newList = [];
                this.state.liste.forEach(element => {
                  if(element.name.includes("2")){
                    newList.push(element);
                  }
                });
                this.setState({ liste: newList });
              }} />
          </View>
        </View>
        {this.state.liste.length > 0 ? <Listing liste={this.state.liste}/> : "" }
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start'
  },
    main_container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 40, 
      // height: 200
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