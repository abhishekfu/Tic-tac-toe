import React,{useState} from 'react'
import {View,Text,StyleSheet, Button} from 'react-native';
import Square from './Square'
export default function Board() {
    const [squares,setSquares] = useState(Array(9).fill(''));
    const [xIsNext,setXIsNext] = useState(true);
    const renderSquare = (i) =>{
        return <Square 
        squareNo={i} 
        value={squares[i]} 
        onPress={handlePress} 
        winner={calculateWinner(squares)?calculateWinner(squares)[1]:null}/>
    }
    const handlePress = (i) =>{
        if(calculateWinner(squares) || squares[i]){
            return
        }
        setSquares(prevSquares=>{
            const squares = prevSquares.slice();
            squares[i] = xIsNext ? 'X':'O';
            return squares;
        });
        setXIsNext(prevXIsNext => !prevXIsNext);
    }
    return (
        <View>
            <Text style={styles.status}>{calculateWinner(squares)?`Winner ${calculateWinner(squares)[0]}`:`Next player:${xIsNext?'X':'O'}`}</Text>
            <View style={{flexDirection:'row'}}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </View>
            <View style={{flexDirection:'row'}}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </View>
            <View style={{flexDirection:'row', marginBottom:40}}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </View>
            <Button title='reset' onPress={()=>{setSquares(Array(9).fill(''));setXIsNext(true)}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    status:{
        textAlign:'center',
        marginBottom:60,
        fontSize:30,
        color:'#FAFA37'
    }
})

function calculateWinner(squares) {
	const lines = [
		[ 0, 1, 2 ],
		[ 3, 4, 5 ],
		[ 6, 7, 8 ],
		[ 0, 3, 6 ],
		[ 1, 4, 7 ],
		[ 2, 5, 8 ],
		[ 0, 4, 8 ],
		[ 2, 4, 6 ]
	];
	for (let i = 0; i < lines.length; i++) {
		const [ a, b, c ] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return [ squares[a], lines[i] ];
		}
	}
	return null;
}