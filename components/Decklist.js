import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { getDecks,saveDeck, getInitialData,ResetDecks } from '../utils/api'
import Card from '../shared/card'
import { Feather } from "@expo/vector-icons";
import { styles } from '../utils/styles'

class Decklist extends Component {

	toDeckDetails = (title) => {
		this.props.navigation.navigate('DeckDetails', { title })
	}

	renderDeckItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => this.toDeckDetails(item.title)}>
            <Card>
            <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.title}</Text>
			<Text>{item.questions.length} Cards</Text>
            </View>
                <Feather name="arrow-right-circle" color='black' size={24} />
            </Card>            
			</TouchableOpacity>
		)
	}

    componentDidMount() {
		//ResetDecks()
		getDecks().then((results) => {
		this.props.dispatch(receiveDecks(results))  
        if (!results) {
            saveDeck(getInitialData());
            getDecks().then((decks) => console.log(decks));                       
          }
        })

	}
	
	handleOnPress = deckId => {
		const { navigate } = this.props.navigation;
		navigate("Deck", { deckId });
	  };

	render() {
		
		return (
			<View style={styles.container}>
            <Text style={styles.title}>My Decks</Text>
				<FlatList 
					data={this.props.decks}
					renderItem={this.renderDeckItem}
					keyExtractor={(item, index) => item.title}
				/>
			</View>
		)
	}

}


function mapStateToProps(decks) {
	return {
		decks: Object.keys(decks).map((deck) => decks[deck] )
	}
}

export default connect(mapStateToProps)(Decklist)