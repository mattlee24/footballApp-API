import { Image, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { SvgUri } from 'react-native-svg'; 

const MatchScreen = () => {

    const [matchData, setmatchData] = useState({})

    const getData = useEffect(() => {
        const getMatchData = async () => {
            await axios
            ({
                method: 'get',
                url: 'https://api.football-data.org/v4/competitions/PL/matches',
                headers: {"X-Auth-Token": "a15a58c93e3446f28dbe7643924532d1"}
                })
                .then(function (response) {
                //console.log(response.data.matches[200]);
                setmatchData(Object.values(response.data.matches))
                })
                .catch(error => {
                console.log(error)
            });
        }
        getMatchData(); 
    }, []);

    const hasDateTime = (dateTime) => {
        if (dateTime != null) {
            let dt = dateTime;
            if (dt.includes("T")){
                dt = dt.replace("T", " ");
                dt = dt.replace("Z", " ");
                dt = dt.split(" ")
                dt = dt[1]
                dt = dt.split(":")
                dt.pop()
                dt = dt.join(":")
            }
            return (
                <Text style={styles.dtText}>{dt}</Text>
            )
        }
    }

    const hasCorrectImageHome = (imagePath) => {
        if (imagePath != null) {
            let IP = imagePath;
            IP = IP.split(".")
            //console.log(IP[3])
            if ( IP[3] == "png" ) {
                IP = IP.join(".")
                //console.log(IP)
                return (
                    <Image style={styles.logoHome} source={{uri: IP}}></Image>
                )
            } else if ( IP[3] == "svg" ) {
                IP = IP.join(".")
                //console.log(IP)
                return (
                    //<Image style={styles.logoHome} source={{uri: IP}}></Image>
                    <SvgUri style={styles.logoHome} width="30" height="30" uri={IP} />
                )
            }
        }
    }

    const hasCorrectImageAway = (imagePath) => {
        if (imagePath != null) {
            let IP = imagePath;
            IP = IP.split(".")
            //console.log(IP[3])
            if ( IP[3] == "png" ) {
                IP = IP.join(".")
                //console.log(IP)
                return (
                    <Image style={styles.logoAway} source={{uri: IP}}></Image>
                )
            } else if ( IP[3] == "svg" ) {
                IP = IP.join(".")
                //console.log(IP)
                return (
                    //<Image style={styles.logoHome} source={{uri: IP}}></Image>
                    <SvgUri style={styles.logoAway} width="30" height="30" uri={IP} />
                )
            }
        }
    }

    //console.log(matchData)

  return (
    <View style={styles.container}>
    <View style={styles.titleView}>
        <Image source={ require("../assets/premLogo.png") } style={styles.premLogo}/>
        <Text style={styles.titleStyle}>Premier League</Text>
        <Text style={styles.titleStyle2}>England</Text>
    </View>
      <FlatList 
        style={styles.flatlist}
        data={matchData}
        showsVerticalScrollIndicator={false}
        //refreshing={refreshing}
        //onRefresh={() => {getData}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            (
            <TouchableOpacity>
                <View style={styles.matchView}>
                    <View>
                        <View style={styles.row}>
                            {hasCorrectImageHome(item.homeTeam.crest)}
                            <Text style={styles.teamHome}>{item.homeTeam.shortName}</Text>
                            <Text style={styles.scoreHome}>{item.score.fullTime.home}</Text>
                        </View>
                        <View style={styles.row}>
                            {hasCorrectImageAway(item.awayTeam.crest)}
                            <Text style={styles.teamAway}>{item.awayTeam.shortName}</Text>
                            <Text style={styles.scoreAway}>{item.score.fullTime.away}</Text>
                        </View>
                    </View>
                    <View style={styles.dTView}>
                        {hasDateTime(item.utcDate)}
                    </View>
                </View>
            </TouchableOpacity>
            )
        )}

      />
    </View>
  )
}

export default MatchScreen

const styles = StyleSheet.create({
    premLogo: {
        width: 50,
        height: 50,
        alignSelf: "center",
        marginTop: 70
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
        marginBottom: 10,
    },
    flatlist: {
        width: "90%",
        alignSelf: "center",
    },
    matchView: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        borderRadius: 10,
        height: "auto",
        marginTop: 20,
        // shadowColor: "black",
        // shadowOffset: {
        // width: 0,
        // height: 0,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 10,
        // elevation: 5
    },
    teamHome: {
        marginTop: 30,
        marginLeft: 10
    },
    teamAway: {
        marginTop: 20,
        marginLeft: 10
    },
    logoHome: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginTop: 20
    },
    logoAway: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 10

    },
    row: {
        flexDirection: "row",
        width: 200
    },
    dTView: {
        width: 160,
        height: "80%",
        alignItems: "center",
        borderLeftWidth: 1,
        borderLeftColor: "lightgrey",
        alignSelf: "center"
    },
    dtText: {
        marginTop: 40,
        fontSize: 18
    },
    scoreHome: {
        position: "absolute",
        right: 10,
        marginTop: 30,
        fontWeight: "bold"
    },
    scoreAway: {
        position: "absolute",
        right: 10,
        marginTop: 20,
        fontWeight: "bold"
    }
})