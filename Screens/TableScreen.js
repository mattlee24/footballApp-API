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
                console.log(response.data.standings[0].table[1].team.crest)
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
                return (
                    <View style={styles.listView}>
                        {/* <SvgUri style={styles.logo} width="30" height="30" uri={item.team.crest} /> */}
                        <Image style={styles.logo} source={{uri: item.team.crest}}></Image>
                        <Text style={styles.item}>{item.team.name}</Text>
                    </View>
                )
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
        width: "95%%",
        alignSelf: "center",
        height: "auto",
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 4,
            },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    titleStyle: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: "purple"
    },
    flatlist: {
        marginBottom: 150,
    },
    listView: {
        flexDirection: "row",
        shadowOffset: {
            width: 0,
            height: 4,
            },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: "white",
        marginBottom: 5,
        width: "80%",
        alignSelf: "center",
        borderRadius: 25
    },
    item: {
        textAlign: "center",
        margin: 20,
        color: "purple"
    },
    logo: {
        width: 30,
        height: 30,
        alignSelf: "center",
        marginLeft: 10
    }
})