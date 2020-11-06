import React, { Component } from 'react'
import { styles } from '../utils/styles'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Feather } from "@expo/vector-icons";

class DeckDetails extends Component {

    render() {
		const { route } = this.props
        const { title } = route.params
		return (
			<View style={styles.formContainer}>
                <TouchableOpacity 
						style={Platform.OS === 'ios' ? styles.ios_btn : styles.android_btn}
					>
                    <Feather name='plus-circle' size={24} color='#5c5555'/>
						<Text style={styles.button_text}> {title}  New question</Text>
					</TouchableOpacity>
					
					<TouchableOpacity 
						style={Platform.OS === 'ios' ? styles.ios_btn : styles.android_btn}
					>
                    
                    <Feather name='play' size={24} color='#5c5555'/>
						<Text style={styles.button_text}>  Start quiz</Text>
					</TouchableOpacity>
            </View>
        )
        }
    }

    
export default connect()(DeckDetails)