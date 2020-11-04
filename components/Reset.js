import React,{Component} from "react";
import { View, Text } from "react-native";
import { ResetDecks } from '../utils/api'

class Reset extends Component {	

    componentDidMount() {
        ResetDecks()
    }

    render(){
        return(<View>
          <Text> Reset screen</Text> 
        </View>)        
    }

}

export default Reset