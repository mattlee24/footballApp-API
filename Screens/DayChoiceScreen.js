import { Image, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import data from '../components/matchday.json'

const DayChoiceScreen = ({navigation, route}) => {

    const [matchdayData, setmatchdayData] = useState({})

    useEffect(() => {
        setmatchdayData(Object.values(data))
    }, []);

    //console.log(matchdayData)

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Image source={{ uri: "https://www.pngkey.com/png/full/340-3408257_premier-league-logo-premier-league-logo-png.png" }} style={styles.premLogo}/>
                <Text style={styles.titleStyle}>Premier League</Text>
                <Text style={styles.titleStyle2}>England</Text>
                <Text style={styles.titleStyle3}>Choose Matchday</Text>
            </View>
            <FlatList 
                style={styles.flatlist}
                data={matchdayData}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => ( 
                    <TouchableOpacity 
                        style={styles.matchdayView}
                        onPress={() => navigation.push("MatchScreen", {paramA: item.matchday})}
                    >
                        <ImageBackground 
                            style={styles.background} 
                            source={{uri: "https://m.media-amazon.com/images/M/MV5BYmE0YzFlM2ItODE4OC00MjliLWIzYmUtMDBhZmM0MTYyNDk4XkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_.jpg"}}
                            resizeMode={"cover"}
                            imageStyle={{ borderRadius: 15}}
                            >
                            <Text style={styles.textStyle}>{item.matchday}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default DayChoiceScreen

const styles = StyleSheet.create({
   flatlist: {
    width: "100%",
    alignSelf: "center",
    marginBottom: 280,
   },
   premLogo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: -15,
    },
    titleView: {
        justifyContent: "center",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        height: "auto",
    },
    titleStyle: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold",
        color: "#38003c",
        alignSelf: "center",
    },
    titleStyle2: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "grey",
        alignSelf: "center",
        marginTop: 5,
    },
    titleStyle3: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: "grey",
        alignSelf: "center",
        marginTop: 2,
        marginBottom: 10,
    },
   matchdayView: {
    alignSelf: "center",
    backgroundColor: "white",
    height: 200,
    width: "95%",
    margin: 10,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    shadowOffset: {
        width: 0,
        height: 4,
        },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 25
   },
   background: {
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 15,
   },
   textStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "right",
    marginRight: 5
   }
})