import React, { useState, useEffect} from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from "react-native-slider"
import Moment from "moment"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Player(){

    const [trackLenght, setTrackLenght] = useState(300)
    const [timeElapsed, setTimeElapsed] = useState("0:00")
    const [timeRemaning, setTimeRemaning] = useState("5:00")
    const [inPlay, setInPlay] = useState(true)

    const changeTime = (seconds) =>{
        setTimeElapsed(Moment.utc(seconds * 1000).format("m:ss"))
        setTimeRemaning(Moment.utc((trackLenght - seconds) * 1000).format("m:ss"))
    }

    return(
        <SafeAreaView style={styles.contairner}>
            <View style={{alignItems:"center"}}>
                <View style={{alignItems:"center", marginTop:24}}>
                    <Text style={[styles.textLight, {fontSize:12}]}>PLAYLIST</Text>
                    <Text style={[styles.textLight, {fontSize:15, fontWeight:"500", marginTop:8}]}>Suscribe to DesignIntoCode</Text>
                </View>
                <View style={styles.coverContainer}>
                    <Image source={require("../../img/casqueColor.jpg")} style={styles.cover}></Image>
                </View>
                <View style={{ alignItems:"center", marginTop:32 }}>
                    <Text style={[styles.textDark, {fontSize:20, fontWeight: "500"}]}>Music</Text>
                    <Text style={[styles.text , {fontSize:16, fontWeight: "500"}]}>History one</Text>
                </View>
            </View>
            <View style={{margin:32}}>
                <Slider
                    minimumValue={0}
                    maximumValue={trackLenght}
                    trackStyle={styles.track}
                    thumbStyle={styles.thumb}
                    minimumTrackTintColor="#93A8B3"
                    onValueChange={seconds => changeTime(seconds)}
                ></Slider>
                <View style={{ marginTop: -12, flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={[styles.textLight, styles.timeStamp]}>{timeElapsed}</Text>
                    <Text style={[styles.textLight, styles.timeStamp]}>{timeRemaning}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:16, height:100}}>
                    <TouchableOpacity style={styles.playButtonContainer} onPress={() => setInPlay(!inPlay)}>
                        {inPlay?
                            <Image source={require("../../img/play.png")} style={{height:35, width:30}}></Image>
                            :
                            <Image source={require("../../img/pause.png")} style={{height:35, width:30}}></Image>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contairner: {
        flex:1,
        backgroundColor:"#EAEAEC"
    },
    textLight: {
        color: "#B6B7BF"
    },
    text: {
        color:"#8E97A6"
    },
    textDark: {
        color: "#3D425C"
    },
    coverContainer: {
        marginTop: 32,
        width: 200,
        height: 200,
        shadowOffset:{ height: 15 }
    },
    cover: {
        width:200,
        height:200,
        borderRadius:125
    },
    track: {
        height:2,
        borderRadius:1,
        backgroundColor:"#FFF"
    },
    thumb: {
        width:8,
        height:8,
        borderBottomColor:"black"
    },
    timeStamp: {
        fontSize:11,
        fontWeight:"500"
    },
    playButtonContainer:{
        backgroundColor:"#FFF",
        borderColor:"rgba(93, 63, 106, 0.2)",
        borderWidth: 16,
        width: 128,
        height: 128,
        borderRadius:64,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal: 50,
        shadowOffset: {width:0, height:2},
        shadowColor:"#5D3F6A",
        shadowRadius: 4,
        shadowOpacity: 0.5,
        elevation: 60
    }
})