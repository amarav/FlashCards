import React, { Component } from "react";
import { styles } from "../utils/styles";
import { Text, View, TouchableOpacity, Platform, Alert } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import Card from "../shared/card";

class DeckDetails extends Component {

	toNewQuestion = () => {
		const { route } = this.props;
		const { deck } = route.params;
		this.props.navigation.navigate('AddQuest', {item: deck})

	}

	toStartQuiz = () => {
		
		const { route } = this.props;
    const { deck } = route.params;
    console.log('inside start quiz')
    console.log(deck)
    console.log(deck.questions.length)
		if (deck.questions.length > 0)
		{
			this.props.navigation.navigate('Quiz', {item: deck})
		}
		else
		{
			Alert.alert(
				'The deck doesnt have any cards!', 
				[
					{ text: 'Add Card', onPress: this.toNewQuestion },
					{ text: 'Cancel' }
				]
			)
		}
	}


  render() {
    const { route } = this.props;
    const { deck } = route.params;
    return (
      <View style={styles.formContainer}>
        <Card>
          <View style={styles.cardInfo}>
            <Text>{deck.questions.length} Cards</Text>
            <TouchableOpacity
              style={
                Platform.OS === "ios" ? styles.ios_btn : styles.android_btn
              }
			  onPress={this.toStartQuiz}
            >
              <Feather name="play" size={24} color="#5c5555" />
              <Text style={styles.button_text}> Start quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                Platform.OS === "ios" ? styles.ios_btn : styles.android_btn
              }
			  onPress={this.toNewQuestion}
            >
              <Feather name="plus-circle" size={24} color="#5c5555" />
              <Text style={styles.button_text}> New question</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}

export default connect()(DeckDetails);
