import React, { Component } from "react";
import { Alert, KeyboardAvoidingView, View, ScrollView } from "react-native";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { styles } from "../utils/styles";
import Card from "../shared/card";
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import * as yup from "yup";

class AddQuest extends Component {
  state = { deckTitle: "" };

  onChangeTitle = (text) => {
    this.setState({ deckTitle: text });
  };

  render() {
    return (
     
        <Formik
          initialValues={{ question: "",answer: "" }}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values));
          }}
          validationSchema={yup.object().shape({
            question: yup.string().required("Question is required"),
          },{
            answer: yup.string().required("Answer is required"),              
          })}
        >
          {(props) => (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.deckInput}
                placeholder="Enter the question here..."
                onChangeText={props.handleChange("question")}
                value={props.values.question}
                onBlur={() => props.setFieldTouched("question")}
              />
              {props.touched.question && props.errors.question && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {props.errors.question}
                </Text>
              )}
              <TextInput
                style={styles.deckInput}
                placeholder="Enter the answer here..."
                onChangeText={props.handleChange("answer")}
                value={props.values.answer}
                onBlur={() => props.setFieldTouched("answer")}
              />
              {props.touched.answer && props.errors.answer && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {props.errors.answer}
                </Text>
              )}
              <Button
                title="Submit"
                color="maroon"
                disabled={!props.isValid}
                onPress={props.handleSubmit}
              >
                Submit
              </Button>
            </View>
          )}
        </Formik>
     
    );
  }
}

export default AddQuest;
