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

    //console.log(premierLeague)

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
                item.team.shortName == "Tottenham" && item.position != "1" && item.position != "5" && item.position != "7" && item.position != "8" && item.position != "18" && item.position != "20"
                || item.team.shortName == "Brighton Hove" && item.position != "1" && item.position != "5" && item.position != "7" && item.position != "8" && item.position != "18" && item.position != "20"
                || item.team.shortName == "Fulham" && item.position != "1" && item.position != "5" && item.position != "7" && item.position != "8" && item.position != "18" && item.position != "20"
                || item.team.shortName == "Wolverhampton" && item.position != "1" && item.position != "5" && item.position != "7" && item.position != "8" && item.position != "18" && item.position != "20"
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
                            <Text style={styles.ChamionsText}>CHAMPIONS LEAGUE</Text>
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
                            <Text style={styles.ChamionsText}>CHAMPIONS LEAGUE</Text>
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
            } else if (item.position == "5"){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.europaText}>EUROPA LEAGUE</Text>
                        </View>
                        <View style={styles.listViewPosition5}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (
                item.team.shortName == "Tottenham" && item.position == "5"
                || item.team.shortName == "Brighton Hove" && item.position == "5"
                || item.team.shortName == "Fulham" && item.position == "5"
                || item.team.shortName == "Wolverhampton" && item.position == "5"
            ){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.europaText}>EUROPA LEAGUE</Text>
                        </View>
                        <View style={styles.listViewPosition5}>
                            <Text style={styles.position}>{item.position}</Text>
                            <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "7"){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.europaCText}>EUROPA CONFERENCE LEAGUE QUALIFICATION</Text>
                        </View>
                        <View style={styles.listViewPosition7}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (
                item.team.shortName == "Tottenham" && item.position == "7"
                || item.team.shortName == "Brighton Hove" && item.position == "7"
                || item.team.shortName == "Fulham" && item.position == "7"
                || item.team.shortName == "Wolverhampton" && item.position == "7"
            ){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.europaCText}>EUROPA CONFERENCE LEAGUE QUALIFICATION</Text>
                        </View>
                        <View style={styles.listViewPosition7}>
                            <Text style={styles.position}>{item.position}</Text>
                            <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "8"){
                return (
                    <View>
                        <View style={styles.listViewPosition8}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (
                item.team.shortName == "Tottenham" && item.position == "8"
                || item.team.shortName == "Brighton Hove" && item.position == "8"
                || item.team.shortName == "Fulham" && item.position == "8"
                || item.team.shortName == "Wolverhampton" && item.position == "8"
            ){
                return (
                    <View>
                        <View style={styles.listViewPosition8}>
                            <Text style={styles.position}>{item.position}</Text>
                            <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (item.position == "18"){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.relegationText}>RELEGATION</Text>
                        </View>
                        <View style={styles.listViewPosition18}>
                            <Text style={styles.position}>{item.position}</Text>
                            <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                            <Text style={styles.name}>{item.team.shortName}</Text>
                            <Text style={styles.points}>{item.points}</Text>
                        </View>
                    </View>
                )
            } else if (
                item.team.shortName == "Tottenham" && item.position == "18"
                || item.team.shortName == "Brighton Hove" && item.position == "18"
                || item.team.shortName == "Fulham" && item.position == "18"
                || item.team.shortName == "Wolverhampton" && item.position == "18"
            ){
                return (
                    <View>
                        <View style={styles.topView}>
                            <Text style={styles.relegationText}>RELEGATION</Text>
                        </View>
                        <View style={styles.listViewPosition18}>
                            <Text style={styles.position}>{item.position}</Text>
                            <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
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
            } else if (
                item.team.shortName == "Tottenham" && item.position == "20"
                || item.team.shortName == "Brighton Hove" && item.position == "20"
                || item.team.shortName == "Fulham" && item.position == "20"
                || item.team.shortName == "Wolverhampton" && item.position == "20"
            ){
                return (
                    <View style={styles.listViewBottom}>
                        <Text style={styles.position}>{item.position}</Text>
                        <SvgUri style={styles.logo} width="25" height="25" uri={item.team.crest} />
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
        color: "navy"
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
        width: "95%",
        alignSelf: "center",
        backgroundColor: "white",
    },
    listView: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1
    },
    listViewBottom: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,  
    },
    listViewTop: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1
    },
    listViewPosition5: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
        marginTop: 12,
    },
    listViewPosition7: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
        marginTop: 10,
    },
    listViewPosition8: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
        alignSelf: "center",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        borderTopColor: "lightgrey",
        borderTopWidth: 1,
        marginTop: 20,
    },
    listViewPosition18: {
        flexDirection: "row",
        backgroundColor: "white",
        width: "100%",
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
        color: "black",
        textAlign: "left",
        left: 60
    },
    logo: {
        width: 25,
        height: 25,
        position: "absolute",
        alignSelf: "center",
        left: 40,
    },
    points: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        color: "black",
        position: "absolute",
        right: 0,
        fontWeight: "bold"
    },
    position: {
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        color: "black",
        position: "absolute",
        left: 0,
        fontWeight: "bold"
    },
    topText: {
        marginHorizontal: 10,
        color: "lightgrey",
        position: "absolute",
        right: 0,
        fontSize: 20,
        fontWeight: "bold",
    },
    topView: {
        width: "100%",
        alignSelf: "center",
        height: "auto",
        marginBottom: 25,
    },
    ChamionsText: {
        color: "lightgrey",
        position: "absolute",
        left: 0,
        fontSize: 15,
        fontWeight: "bold"
    },
    europaText: {
        marginTop: 10,
        color: "lightgrey",
        position: "absolute",
        left: 0,
        fontSize: 15,
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
        color: "lightgrey",
        position: "absolute",
        left: 0,
        fontSize: 15,
        fontWeight: "bold"
    },  
    relegationText: {
        marginTop: 10,
        color: "lightgrey",
        position: "absolute",
        left: 0,
        fontSize: 15,
        fontWeight: "bold"
    }, 
})