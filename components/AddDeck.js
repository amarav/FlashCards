import React, { Component } from 'react'
import { Alert, KeyboardAvoidingView, View, ScrollView } from "react-native";
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { styles } from '../utils/styles'
import Card from '../shared/card'
import Icon from "react-native-vector-icons/Ionicons";
import { Formik } from 'formik'
import { Button } from 'react-native-paper';
import * as yup from 'yup'


class AddDeck extends Component {
    state = { deckTitle: "" };

    onChangeTitle = text => {
    this.setState({ deckTitle: text });
  };

  render() {
    return (
      <Card>
      <Formik initialValues={{title:''}} onSubmit={(values)=>{
          Alert.alert(JSON.stringify(values)) 
      }}  validationSchema={yup.object().shape({
        title: yup
            .string()
            .required("Deck title is required"),
        })}>
         {
             (props)=>(
                <View>
                <Text style={styles.cardTitle}>Enter title</Text>
                <TextInput 
						style={styles.deckInput}
						placeholder='Deck Title'
						onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        onBlur={() => props.setFieldTouched('title')}
					/>  
          {props.touched.title && props.errors.title &&
              <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.title}</Text>
            }
                    <Button title='Add Deck' color='maroon' disabled={!props.isValid} onPress={props.handleSubmit}>Add Deck</Button>        
                </View>
             )
         }
      </Formik>
      </Card>
    );
  }
}

export default AddDeck