import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import ListingItem from './ListingItem'

class Listing extends React.Component {
  constructor(props) {
    super(props)
    // Ici on va créer les propriétés de notre component custom Search
    //this.liste = this.props.liste
  }

  render() {
    // const liste = this.props.liste

    //console.log(this.props)
    return (
      <View style={styles.main}>
        <View style={styles.main_container}>
          <FlatList
            data={this.props.liste}
            renderItem={({ item }) => <ListingItem liste={item} />}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  main_container: {
    padding: 5,
    flex: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
})

export default Listing