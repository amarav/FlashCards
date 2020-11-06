import React, { Component } from "react";
import { styles } from "../utils/styles";
import { Text, View, TouchableOpacity, Platform } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import Card from "../shared/card";

class DeckDetails extends Component {
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
            >
              <Feather name="play" size={24} color="#5c5555" />
              <Text style={styles.button_text}> Start quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                Platform.OS === "ios" ? styles.ios_btn : styles.android_btn
              }
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
