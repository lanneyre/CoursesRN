import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator, Image, TouchableHighlight } from 'react-native'
import Listing from './Listing'
// import l from '../Data/liste.json'
import getData from './getData'
import constante from '../constante/const'
import Loader from './Loader'

class Search extends Loader {
  constructor(props) {
    super(props)
    // Ici on va créer les propriétés de notre component custom Search

    this.state = {
      liste: [], // contient toute la liste de course
      search: "", // contiendra le text recherché 
      isLoading: true, // Permet de savoir si on cherche un élément ou pas
      last: 0, // Permet de savoir si nous sommes à la dernière page ou pas
      nbResult: 0, // Combien y a t il de resultat pour ma recherche
      page: 1 // La page de recherche mais ne sera utile que pour les bouton plus et moins
    }
  }

  // Récupère la liste de course en fonction du moteur de recherche
  _loadListe() {
    this.setState({ isLoading: true })
    getData(this.state.search, this.state.last, constante.nbResult, this.state.page).then(data => {
      this.setState({ liste: data.results, last: data.last, nbResult: data.nbResult, page: data.page }, () => {
        this.setState({ isLoading: false });
      })
    });
  }

  componentDidMount() {
    this._loadListe()
  }

  _displayAddItem() {
    // console.log("display Add Item")
    this.props.navigation.navigate('AddItem')
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
          <TouchableHighlight styles={styles.imgBtn} onPress={() => {
            console.log("Plus");
            this._displayAddItem()
          }}>
            <Image
              style={styles.img}
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/7/77/Plus_blue.svg" }}
            />
          </TouchableHighlight>
        </View>

        {this._displayLoading()}
        <Listing liste={this.state.liste} />
        <View style={styles.nav}>
          <View style={styles.btnNav}>
            {/* Quand je suis sur la première page */}
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
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    // marginTop: 20,
    // height: 200
  },
  textinput: {
    marginLeft: 5,

    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    padding: 5,
    borderRadius: 5,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: "80%"
  },
  btn: {
    marginBottom: 30,
    padding: 5
  },
  nav: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  btnNav: {
    width: "45%",
    flex: 1,

  },
  imgBtn: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,

  },
  img: {
    // width: "100%",
    // height: "100%"
    width: 32,
    height: 32,
    marginRight: 15
  }
})

export default Search