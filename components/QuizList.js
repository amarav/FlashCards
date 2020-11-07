import React,{Component} from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux'

class Quiz extends Component {

    render(){

      const { route } = props;
      const { item } = route.params;
      const { title, questions } = item;
        return (
          <View style={{ flex: 1,padding:25 }}>
            <Text>title</Text>
          </View>
        );
      }
    }

export default connect()(Quiz)
