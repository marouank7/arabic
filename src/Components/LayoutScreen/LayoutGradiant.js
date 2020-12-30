import React from 'react'
import LinearGradiant from 'react-native-linear-gradient'
import {StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LayoutGradiant: React.FC = ({children}) => {
    return (
        <LinearGradiant style={styles.gradient} colors={['#444','#222']}>
            <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </LinearGradiant>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex:1,
    },
    container: {
        flex:1,
        marginHorizontal:15,
    },
});

export default LayoutGradiant