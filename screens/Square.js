import React from 'react'
import {Text,StyleSheet, TouchableWithoutFeedback} from 'react-native'
export default function Square({value,onPress,squareNo,winner}) {
    return (
        <TouchableWithoutFeedback onPress={()=>onPress(squareNo)}>
            <Text style={styles.square}>
                <Text style={{color:winner?giveColor(winner,squareNo):'#15f4ee'}}>{value}</Text>
            </Text>
        </TouchableWithoutFeedback>
        //<Button title={value} onPress={()=>onPress(squareNo)} style={styles.square}/>
    )
}
const styles = StyleSheet.create({
    square:{
        borderWidth:1,
        borderColor:'#7677ef',
        width:60,
        height:60,
        backgroundColor:'black',
        fontSize:40,
        textAlign:'center'
    }
})

const giveColor = (winner,squareNo)=>{
    const [a,b,c] = winner;
    if(squareNo===a || squareNo===b || squareNo===c){
        return '#FFFF66'
    }
    else{
        return '#15f4ee'
    }
}
