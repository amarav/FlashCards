import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1
    }, 
    card: {
        borderRadius:6,
        elevation:3,
        backgroundColor:'#FFFFFE',
        shadowOffset: { width:1,height:1},
        shadowColor: '#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6,
      },
      cardInfo:{
        display: "flex",
        flexDirection: "column",
      },
    cardContent:{        
        display: "flex",
        flexDirection: "row",
         marginHorizontal:18,
         marginVertical:10,
         justifyContent: "space-between",
         alignItems: "center",
      },
      cardTitle: {
        fontSize: 18,
        color: 'darkgoldenrod',
      },
      formContainer:{
        display: "flex",
        flexDirection: "column",
        padding:30,
         marginHorizontal:18,
         marginVertical:10,
         justifyContent: "space-between",
      },
      title: {
        fontSize: 22,
        color: 'maroon',
        justifyContent:"center",
      },
      deckInput: {
          borderWidth:1,
          borderColor:'#ddd',
        backgroundColor: 'lightgray',
        fontSize:18,
        padding: 10,
        color: 'black',
        borderRadius: 10,
        marginBottom: 20
      },

}) 