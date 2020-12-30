import React from "react"
import {View, TouchableOpacity, StyleSheet } from "react-native"

export default function Controller({ onNext, onPrv }){
    return(
        <View>
            <TouchableOpacity onPress={onPrv} style={{width:30, height:30, backgroundColor:"red"}}>
            </TouchableOpacity>
            <TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNext} style={{width:30, height:30, backgroundColor:"red"}}>
            </TouchableOpacity>
        </View>
    )
}