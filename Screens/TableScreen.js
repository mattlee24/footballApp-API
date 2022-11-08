import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';

const TableScreen = () => {

    const [premierLeague, setPremierLeague] = useState({})

    useEffect(() => {
        const getPremierLeague = async () => {
            await axios
            ({
                method: 'get',
                url: 'https://api.football-data.org/v4/competitions/PL/standings',
                headers: {"X-Auth-Token": "a15a58c93e3446f28dbe7643924532d1"}
                })
                .then(function (response) {
                //console.log(response.data.standings[0].table);
                setPremierLeague(Object.values(response.data.standings[0].table))
                //console.log(response.data.standings[0].table[1].team.crest)
                })
                .catch(error => {
                console.log(error)
            });
        }
        getPremierLeague(); 
    }, []);

    console.log(premierLeague)

  return (
    <View>
        <View style={styles.titleView}>
            <Text style={styles.titleStyle}>Premier League</Text>
        </View> 
        <FlatList 
        style={styles.flatlist}
        data={premierLeague}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.team.id}
        renderItem={({ item }) => {
            if (
                item.team.shortName == "Tottenham" && item.position != "4" && item.position != "3" && item.position != "2" && item.position != "1" 
                || item.team.shortName == "Brighton Hove" && item.position != "4" && item.position != "3" && item.position != "2" && item.position != "1"
                || item.team.shortName == "Fulham" && item.position != "4" && item.position != "3" && item.position != "2" && item.position != "1"
                || item.team.shortName == "Wolverhampton" && item.position != "4" && item.position != "3" && item.position != "2" && item.position != "1"
            ) {
                return (
                    <View style={styles.listView}>
                        <Text style={styles.position}>{item.position}</Text>
                        <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
                        <Text style={styles.name}>{item.team.shortName}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                )
            } else if (item.position == "1"){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.ChamionsText}>Champions League</Text>
                            <Text style={styles.topText}>Pts</Text>
                        </View>
                        <View style={styles.listViewTop}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (
                item.team.shortName == "Tottenham" && item.position == "1"
                || item.team.shortName == "Brighton Hove" && item.position == "1"
                || item.team.shortName == "Fulham" && item.position == "1"
                || item.team.shortName == "Wolverhampton" && item.position == "1"
            ){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.ChamionsText}>Champions League</Text>
                            <Text style={styles.topText}>Pts</Text>
                        </View>
                        <View style={styles.listViewTop}>
                            <Text style={styles.position}>{item.position}</Text>
                            <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (
                item.team.shortName == "Tottenham" && item.position == "2"
                || item.team.shortName == "Brighton Hove" && item.position == "2"
                || item.team.shortName == "Fulham" && item.position == "2"
                || item.team.shortName == "Wolverhampton" && item.position == "2"
                || item.team.shortName == "Tottenham" && item.position == "3"
                || item.team.shortName == "Brighton Hove" && item.position == "3"
                || item.team.shortName == "Fulham" && item.position == "3"
                || item.team.shortName == "Wolverhampton" && item.position == "3"
                || item.team.shortName == "Tottenham" && item.position == "4"
                || item.team.shortName == "Brighton Hove" && item.position == "4"
                || item.team.shortName == "Fulham" && item.position == "4"
                || item.team.shortName == "Wolverhampton" && item.position == "4"
            ) {
                return (
                    <View>
                        <View style={styles.listViewChampPosition}>
                            <Text style={styles.position}>{item.position}</Text>
                            <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (
                item.position == "2" || item.position == "3" || item.position == "4" 
            ) {
                return (
                    <View>
                        <View style={styles.listViewChampPosition}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "5"){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.europaText}>Europa League</Text>
                        </View>
                        <View style={styles.listViewPosition5}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "7"){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.europaCText}>Europa Conference League Qualification</Text>
                        </View>
                        <View style={styles.listViewPosition7}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "8"){
                return (
                    <View>
                        <View style={styles.listViewPosition7}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "18"){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.relegationText}>Relegation</Text>
                        </View>
                        <View style={styles.listViewPosition18}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "20"){
                return (
                    <View style={styles.listViewBottom}>
                        <Text style={styles.position}>{item.position}</Text>
                        <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                        <Text style={styles.name}>{item.team.shortName}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                )
            } else {
                return (
                    <View style={styles.listView}>
                        <Text style={styles.position}>{item.position}</Text>
                        <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                        <Text style={styles.name}>{item.team.shortName}</Text>
                        <Text style={styles.points}>{item.points}</Text>
                    </View>
                )
            }
        }}
      />
    </View>
  )
}

export default TableScreen

const styles = StyleSheet.create({
    titleView: {
        marginTop: 70,
        marginBottom: 20,
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        height: "auto",
        borderRadius: 5,
    },
    titleStyle: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: "purple"
    },
    flatlist: {
        shadowOffset: {
            width: 0,
            height: 4,
            },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 180,
        backgroundColor: "white"
    },
    listView: {
        flexDirection: "row",
        justifyContent: "center",
        width: "95%",
        alignSelf: "center",
        borderBottomColor: "lightgray##ey",
        borderBottomWidth: 1
    },
    listViewBottom: {
        flexDirection: "row",
        justifyContent: "center",

        width: "95%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,  
    },
    listViewTop: {
        flexDirection: "row",
        justifyContent: "center",
        width: "95%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1
    },
    listViewPosition5: {
        flexDirection: "row",
        justifyContent: "center",
        width: "95%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
        marginTop: 12,
    },
    listViewPosition7: {
        flexDirection: "row",
        justifyContent: "center",
        width: "95%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
        marginTop: 12,
        marginBottom: 5
    },
    listViewPosition18: {
        flexDirection: "row",
        justifyContent: "center",
        width: "95%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
        marginTop: 12,
    },
    name: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        color: "purple",
        left: 40,
    },
    logo: {
        width: 25,
        height: 25,
        position: "absolute",
        alignSelf: "center",
        left: 80
    },
    points: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        color: "purple",
        position: "absolute",
        right: 0
    },
    position: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        color: "purple",
        position: "absolute",
        left: 0
    },
    topText: {
        marginHorizontal: 10,
        color: "purple",
        position: "absolute",
        right: 0,
        fontSize: 20,
        fontWeight: "bold"
    },
    topView: {
        width: "95%",
        alignSelf: "center",
        height: "auto",
        marginBottom: 25
    },
    ChamionsText: {
        color: "purple",
        position: "absolute",
        left: 0,
        fontSize: 20,
        fontWeight: "bold"
    },
    europaText: {
        marginTop: 10,
        color: "purple",
        position: "absolute",
        left: 0,
        fontSize: 20,
        fontWeight: "bold"
    },
    listViewChampPosition: {
        flexDirection: "row",
        justifyContent: "center",
        width: "95%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
    },
    europaCText: {
        marginTop: 10,
        color: "purple",
        position: "absolute",
        left: 0,
        fontSize: 20,
        fontWeight: "bold"
    },  
    relegationText: {
        marginTop: 10,
        color: "purple",
        position: "absolute",
        left: 0,
        fontSize: 20,
        fontWeight: "bold"
    }, 
})