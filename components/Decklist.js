// React Imports
import React, { Component } from 'react'

// React Native Imports 
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

// React Redux Imports
import { connect } from 'react-redux'

// Action Creators Imports
import { receiveDecks } from '../actions'

// AsyncStorage Helpers Imports
import { getDecks,saveDeck, getDummyData } from '../utils/api'

class Decklist extends Component {

	renderDeckItem = ({ item }) => {
		return (
			<TouchableOpacity 
				style={styles.deck}
			>
				<Text>{item.title}</Text>
				<Text>{item.questions.length}</Text>
			</TouchableOpacity>
		)
	}

    componentDidMount() {

		getDecks().then((results) => {
			this.props.dispatch(receiveDecks(results))
        
        
        if (results === null) {
            saveDeck(getDummyData());
            decks = getDecks();
            
          console.log(decks)
          }
        })

	}

	render() {
		
		return (
			<View style={styles.container}>
				<FlatList 
					data={this.props.decks}
					renderItem={this.renderDeckItem}
					keyExtractor={(item, index) => item.title}
				/>
			</View>
		)
	}

}

// Component Styles
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	deck: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		borderBottomColor: 'black',
		borderBottomWidth: 1
	}
})

function mapStateToProps(decks) {
	return {
		decks: Object.keys(decks).map((deck) => decks[deck] )
	}
}

export default connect(mapStateToProps)(Decklist)