import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator } from 'react-native'
import Listing from './Listing'
// import l from '../Data/liste.json'
import getData from './getData'
import constante from '../constante/const'

class Search extends React.Component {
  constructor(props) {
    super(props)
    // Ici on va créer les propriétés de notre component custom Search
    this.state = {
      liste: [], // contient toute la liste de course
      search: "", // contiendra le text recherché 
      isLoading: true, // Permet de savoir si on cherche un élément ou pas
      last: 0,
      nbResult: 0,
      page: 1
    }
  }

  _loadListe() {
    this.setState({ isLoading: true })
    getData(this.state.search, this.state.last, constante.nbResult, this.state.page).then(data => {
      console.log(data);
      this.setState({ liste: data.results, last: data.last, nbResult: data.nbResult, page: data.page }, () => {
        //console.log(this.state.page)
        this.setState({ isLoading: false });
      })
    });
  }
  _displayLoading() {
    if (this.state.isLoading) {
      console.log("Load in progress")
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }
  componentDidMount() {
    this._loadListe()
  }

  render() {
    // this._loadListe()
    return (
      <View style={styles.main}>
        <View style={styles.main_container}>
          <TextInput
            placeholder='Recherche'
            style={styles.textinput}
            onChangeText={(text) => {
              this.setState({ search: text, liste: [], last: 0, nbResult: 0, page: 1 }, () => this._loadListe());
            }}
          />
        </View>

        {this._displayLoading()}
        <Listing liste={this.state.liste} />
        <View style={styles.nav}>
          <View style={styles.btnNav}>
            {this.state.page <= 1 ?
              <Button title='Moins' disabled="true" />
              :
              <Button title='Moins' onPress={() => {
                this.setState({ page: this.state.page - 1 }, () => { this._loadListe() });

              }} />
            }
          </View>
          <View style={styles.btnNav}>
            {/* si j'ai encore des résultats j'active le bouton plus (je n'ai plus de résultat quand last == nbresult) */}
            {this.state.nbResult - constante.nbResult > this.state.last ?
              <Button title='Plus' onPress={() => {
                this.setState({ page: this.state.page + 1 }, () => { this._loadListe() });
              }} />
              :
              <Button title='Plus' disabled="true" onPress={() => { }} />
            }
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  main_container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    // height: 200
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  btn: {
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
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  btnNav: {
    width: "45%",
    flex: 1,

  }
})

export default Search