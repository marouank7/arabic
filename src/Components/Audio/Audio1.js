import React, { useState, useEffect} from 'react'
import {StyleSheet, View, Text, ActivityIndicator, Modal, Button, Dimensions, Image, ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LayoutGradiant from '../LayoutScreen/LayoutGradiant'

const Audio1 = (props) =>{

        return(
            <LayoutGradiant>
                <View>
                    <View style={{height:150, width:150, backgroundColor:"grey", alignSelf:"center", marginTop:50, justifyContent:"center", borderRadius:20, borderWidth:3, borderColor:"#fff"}}>
                        <Text style={{alignSelf:"center"}}>Histoire 2</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center", marginTop:20}}>
                        <Text style={{alignSelf:"center", color:"white", fontSize:16}}>La premiere histoire du trimestre</Text>
                        <TouchableOpacity style={{width:30, height:30, borderRadius:50, backgroundColor:"purple", marginLeft:40}}>
                        </TouchableOpacity>
                    </View>
                </View>
            </LayoutGradiant>
        )
}

const styles = StyleSheet.create({
    
})


export default Audio1