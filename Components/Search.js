import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator } from 'react-native'
import Listing from './Listing'
import l from '../Data/liste.json'

class Search extends React.Component {
   constructor(props) {
     super(props)
     // Ici on va créer les propriétés de notre component custom Search
     this.state = { 
       liste: [], // contient toute la liste de course
       search:"", // contiendra le text recherché 
       isLoading: true // Permet de savoir si on cherche un élément ou pas
      }
   }

  _loading(){
    const listing = l;
    return listing;
  }
  _loadListe(){
    const newList = [];
    this.setState({ liste: this._loading() }, () => {
      this.setState({ isLoading: true }) // Lancement du chargement
      if(this.state.search.length > 2 ){
        this.state.liste.forEach(element => {
          if(element.name.includes(this.state.search)){
            newList.push(element);
          }
        })
        this.setState({ liste: newList, isLoading:false });
      } else if(this.state.search != "") {
        alert("Recherche trop courte")
      }
      this.setState({ isLoading: false })
    });
  }
  _displayLoading() {
    if (this.state.isLoading) {
      console.log("Load in progress")
      this._loadListe()
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.main_container}>
          <TextInput 
            placeholder='Recherche' 
            style={styles.textinput} 
            onChangeText={(text)=>{
              this.setState({ search: text });
            }}
            onSubmitEditing={() => this._loadListe()} />
          <View style={styles.btn}>
              <Button title='Rechercher' onPress={() => this._loadListe()} />
          </View> 
        </View>

        {this._displayLoading()}
        <Listing liste={this.state.liste}/>
        
        
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
    }, 
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default Search