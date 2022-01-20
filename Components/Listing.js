import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList  } from 'react-native';
import ListingItem from './ListingItem'

class Listing extends React.Component {
  constructor(props) {
    super(props)
    // Ici on va créer les propriétés de notre component custom Search
    //this.liste = this.props.liste
  }
    render() {
      // const liste = this.props.liste
      return (
        <View style={styles.main_container}>
            <FlatList
                data={this.props.liste}
                renderItem={({item}) => <ListingItem liste={item}/>}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  console.log("onEndReached")
                }}
            />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    main_container: {
      padding:5,
      flex:100,
      justifyContent:'flex-start',
      flexDirection: 'column'
    }
  })

export default Listing